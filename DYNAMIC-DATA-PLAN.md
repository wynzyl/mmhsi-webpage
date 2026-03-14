# Plan: Dynamic Data System — PostgreSQL + Drizzle ORM + Server Actions

## Context
The 7 data-heavy pages (activities, alumni, board-passers, graduates, incoming-events, math-science, news) currently have all content hardcoded inside each page component. The goal is to store all data in a local PostgreSQL database using Drizzle ORM, use Next.js Server Actions for all CRUD operations, build a password-protected admin panel, and extract reusable display components shared across pages.

API routes are used only where unavoidable (image file upload, which must stream bytes to disk).

---

## Stack Additions
| Package | Purpose |
|---------|---------|
| `drizzle-orm` | Type-safe ORM for PostgreSQL |
| `drizzle-kit` | CLI: schema push, migrations |
| `postgres` | PostgreSQL client (Drizzle adapter) |

Install command: `npm install drizzle-orm postgres && npm install -D drizzle-kit`

---

## Architecture Overview

```
db/
  schema.ts           ← Drizzle table definitions (all 7 collections)
  index.ts            ← DB connection singleton (postgres + drizzle)
  seed.ts             ← One-time seed with current hardcoded data
lib/
  types.ts            ← Inferred TS types from Drizzle schema
  admin-config.ts     ← Form field schema per collection (drives DynamicForm)
actions/
  board-passers.ts    ← createBoardPasser, updateBoardPasser, deleteBoardPasser
  math-science.ts     ← createAchievement, updateAchievement, deleteAchievement
  activities.ts
  alumni.ts
  graduates.ts
  events.ts
  news.ts
  auth.ts             ← login(), logout() server actions
app/
  api/upload/route.ts ← Only API route: multipart image upload → public/uploads/
  admin/
    page.tsx          ← Dashboard (server component)
    login/page.tsx    ← Login form (client)
    [collection]/page.tsx ← Collection manager (client component)
components/
  admin/
    CollectionManager.tsx
    DynamicForm.tsx
    ImageUploader.tsx
  ui/
    page-header.tsx
    section-header.tsx
    stats-bar.tsx
middleware.ts          ← Protects /admin/* routes via cookie
drizzle.config.ts      ← Drizzle Kit config
.env.local             ← DATABASE_URL, ADMIN_PASSWORD
```

---

## Phase 1 — Database Schema (`db/schema.ts`)

One table per collection. All image columns store the public path string (e.g. `/uploads/board-passers/abc.jpg`).

```ts
export const boardPassers = pgTable('board_passers', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  exam: text('exam').notNull(),
  year: integer('year').notNull(),
  class: text('class').notNull(),
  image: text('image').notNull(),
})

export const mathScience = pgTable('math_science', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  participants: text('participants').notNull(),
  award: text('award').notNull(),
  level: text('level').notNull(),
  date: text('date').notNull(),
  category: text('category').notNull(),
  image: text('image').notNull(),
})

export const activities = pgTable('activities', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  category: text('category').notNull(),
  date: text('date').notNull(),
  description: text('description').notNull(),
})

export const alumni = pgTable('alumni', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  batch: text('batch').notNull(),
  university: text('university').notNull(),
  program: text('program').notNull(),
  achievement: text('achievement').notNull(),
  story: text('story').notNull(),
})

export const graduates = pgTable('graduates', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  university: text('university').notNull(),
  course: text('course').notNull(),
  batch: integer('batch').notNull(),
})

export const events = pgTable('events', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  date: text('date').notNull(),
  time: text('time').notNull(),
  location: text('location').notNull(),
  description: text('description').notNull(),
  category: text('category').notNull(),
})

export const news = pgTable('news', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  date: text('date').notNull(),
  category: text('category').notNull(),
  excerpt: text('excerpt').notNull(),
})
```

### `db/index.ts`
```ts
import postgres from 'postgres'
import { drizzle } from 'drizzle-orm/postgres-js'

const client = postgres(process.env.DATABASE_URL!)
export const db = drizzle(client)
```

### `db/seed.ts`
Script that inserts all current hardcoded data into the DB. Run once with `npx tsx db/seed.ts`.

### `drizzle.config.ts`
```ts
export default { schema: './db/schema.ts', dialect: 'postgresql', dbCredentials: { url: process.env.DATABASE_URL! } }
```

---

## Phase 2 — Server Actions (`actions/`)

Each file exports three server actions using `'use server'`. All actions call `revalidatePath()` after mutation so the public page reflects changes immediately.

Example (`actions/board-passers.ts`):
```ts
'use server'
import { db } from '@/db'
import { boardPassers } from '@/db/schema'
import { revalidatePath } from 'next/cache'
import { eq } from 'drizzle-orm'

export async function createBoardPasser(data: Omit<BoardPasser, 'id'>) {
  await db.insert(boardPassers).values(data)
  revalidatePath('/board-passers')
}

export async function updateBoardPasser(id: number, data: Partial<BoardPasser>) {
  await db.update(boardPassers).set(data).where(eq(boardPassers.id, id))
  revalidatePath('/board-passers')
}

export async function deleteBoardPasser(id: number) {
  await db.delete(boardPassers).where(eq(boardPassers.id, id))
  revalidatePath('/board-passers')
}
```

Same pattern for all 7 collections. Auth actions:

```ts
// actions/auth.ts
'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function login(password: string) {
  if (password !== process.env.ADMIN_PASSWORD) throw new Error('Invalid password')
  cookies().set('admin_session', process.env.ADMIN_PASSWORD!, { httpOnly: true, maxAge: 60 * 60 * 24 * 7 })
  redirect('/admin')
}

export async function logout() {
  cookies().delete('admin_session')
  redirect('/admin/login')
}
```

---

## Phase 3 — Image Upload API Route

**`app/api/upload/route.ts`** — This is the only API route. Server actions cannot stream multipart files to disk as easily; the API route handles this cleanly.

- Accepts `POST` multipart with `file` (Blob) and `collection` (string)
- Validates: jpg/png/webp, max 5 MB
- Generates: `public/uploads/[collection]/[uuid].[ext]`
- Returns `{ url: '/uploads/collection/uuid.ext' }`

---

## Phase 4 — Middleware

**`middleware.ts`** — Protects `/admin/*` (except `/admin/login`):
```ts
export function middleware(req: NextRequest) {
  const session = req.cookies.get('admin_session')
  if (!session?.value) return NextResponse.redirect(new URL('/admin/login', req.url))
  return NextResponse.next()
}
export const config = { matcher: ['/admin/:path*'] }
```
Excludes `/admin/login` via the matcher pattern or an `if` check.

---

## Phase 5 — Admin UI

### `app/admin/login/page.tsx` (client)
Form that calls `login(password)` server action. Dark luxury styled (dark bg, crimson button, display font).

### `app/admin/page.tsx` (server)
Queries DB to get counts per collection, renders 7 collection cards linking to `/admin/[collection]`. Logout button calls `logout()` server action.

### `app/admin/[collection]/page.tsx` (client, fetches data on mount)
- Reads `COLLECTION_CONFIG[collection]` from `lib/admin-config.ts`
- Renders `<CollectionManager>` with the config and the collection name

### `components/admin/CollectionManager.tsx` (client)
- `useState` for: items list, selected item for edit, form open/close
- On mount: `fetch('/api/data/[collection]')` ...

Wait — with server actions, how does the client component get data? Options:
1. Pass initial data as a prop from the server page component (uses Drizzle server-side)
2. Have a separate API route for GET
3. Call the server action for reads

**Best approach:** The `app/admin/[collection]/page.tsx` is a **server component** that queries the DB and passes the initial data as props to the `CollectionManager` client component. After mutations (via server actions), `revalidatePath('/admin/[collection]')` refreshes the server component data.

```tsx
// app/admin/[collection]/page.tsx (server)
import { getCollectionData } from '@/lib/admin-data'
import CollectionManager from '@/components/admin/CollectionManager'

export default async function AdminCollectionPage({ params }) {
  const items = await getCollectionData(params.collection)
  const config = COLLECTION_CONFIG[params.collection]
  return <CollectionManager items={items} config={config} collection={params.collection} />
}
```

`lib/admin-data.ts` — a server-side function that queries the right Drizzle table based on collection name.

### `components/admin/CollectionManager.tsx` (client)
- Receives `items`, `config`, `collection` as props
- "Add New" / "Edit" opens a slide panel with `DynamicForm`
- "Delete" button calls the appropriate delete server action
- After server action completes, the page is re-rendered via `revalidatePath`

### `components/admin/DynamicForm.tsx` (client)
- Receives `fields: FieldConfig[]` and optional `defaultValues`
- Renders each field: text input, textarea, number, date, or `ImageUploader` for image fields
- Submit: calls `create*` or `update*` server action (passed as a prop from CollectionManager)

### `components/admin/ImageUploader.tsx` (client)
- `<input type="file">` with preview
- On file select: `fetch('/api/upload', { method: 'POST', body: FormData })` → gets back URL
- Stores URL in parent form state

---

## Phase 6 — Reusable Display Components

Three new shared components to eliminate repetition across all pages:

### `components/ui/page-header.tsx`
```tsx
export function PageHeader({ label, title, subtitle }: PageHeaderProps)
```
The dark section with `pt-32 pb-20`, crimson radial gradient, gold breadcrumb, Cormorant heading, italic subtitle. Currently repeated verbatim across 11 pages.

### `components/ui/section-header.tsx`
```tsx
export function SectionHeader({ number, label, title }: SectionHeaderProps)
```
The `"01"` ghost crimson number + gold label + bold display title. Repeated in every section.

### `components/ui/stats-bar.tsx`
```tsx
export function StatsBar({ stats, cols = 4 }: StatsBarProps)
// stats: { number: string, label: string }[]
```
The gold Cormorant numerals with crimson column dividers. Repeated on every page.

---

## Phase 7 — Update Public Pages

Each of the 7 pages becomes a **server component** that:
1. Queries Drizzle directly for its data
2. Renders using `PageHeader`, `SectionHeader`, `StatsBar` instead of inline patterns

```tsx
// app/board-passers/page.tsx
import { db } from '@/db'
import { boardPassers } from '@/db/schema'
import { PageHeader } from '@/components/ui/page-header'

export default async function BoardPassersPage() {
  const passers = await db.select().from(boardPassers).orderBy(boardPassers.id)
  // ...render...
}
```

No `force-dynamic` needed — Next.js server components that use DB queries are dynamic by default.

---

## Environment Setup

**`.env.local`**
```
DATABASE_URL=postgresql://postgres:password@localhost:5432/mmhsi
ADMIN_PASSWORD=mmhsi-admin
```

**PostgreSQL setup** (prerequisite — user must have PostgreSQL running locally):
```bash
createdb mmhsi
npx drizzle-kit push    # creates tables from schema
npx tsx db/seed.ts      # inserts current hardcoded data
```

---

## Files Created / Modified

**New files:**
- `db/schema.ts`, `db/index.ts`, `db/seed.ts`
- `drizzle.config.ts`
- `lib/types.ts`, `lib/admin-config.ts`, `lib/admin-data.ts`
- `actions/board-passers.ts`, `actions/math-science.ts`, `actions/activities.ts`, `actions/alumni.ts`, `actions/graduates.ts`, `actions/events.ts`, `actions/news.ts`, `actions/auth.ts`
- `app/api/upload/route.ts`
- `app/admin/page.tsx`, `app/admin/login/page.tsx`, `app/admin/[collection]/page.tsx`
- `components/admin/CollectionManager.tsx`
- `components/admin/DynamicForm.tsx`
- `components/admin/ImageUploader.tsx`
- `components/ui/page-header.tsx`
- `components/ui/section-header.tsx`
- `components/ui/stats-bar.tsx`
- `middleware.ts`
- `.env.local`

**Modified files:**
- `package.json` — add `drizzle-orm`, `postgres`, dev dep `drizzle-kit`
- `app/board-passers/page.tsx` — replace hardcoded data with DB query
- `app/math-science/page.tsx` — same
- `app/activities/page.tsx` — same
- `app/alumni/page.tsx` — same
- `app/graduates/page.tsx` — same
- `app/incoming-events/page.tsx` — same
- `app/news/page.tsx` — same

**Optionally updated** (use reusable components):
- All pages (`about`, `contact`, etc.) can adopt `PageHeader`/`SectionHeader`/`StatsBar` in a follow-up

---

## Verification

1. `npm install` then `npx drizzle-kit push` then `npx tsx db/seed.ts`
2. `npm run dev`
3. Visit `/admin/login` → enter `mmhsi-admin` → see dashboard
4. Open `/admin/board-passers` → 5 rows appear from DB seed
5. Click **Add New** → fill form + upload image → Submit
6. Visit `/board-passers` → new entry shows with uploaded image
7. Click **Edit** in admin → change a field → Submit → public page reflects change
8. Click **Delete** → row removed from DB and public page
9. Repeat for all 7 collections
10. `PageHeader`, `SectionHeader`, `StatsBar` components render correctly on updated pages
