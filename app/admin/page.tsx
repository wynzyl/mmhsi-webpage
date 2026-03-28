import { db } from '@/db'
import { boardPassers, mathScience, activities, alumni, graduates, events, news } from '@/db/schema'
import { count } from 'drizzle-orm'
import Link from 'next/link'
import { logout } from '@/actions/auth'

async function getCounts() {
  const [bp] = await db.select({ count: count() }).from(boardPassers)
  const [ms] = await db.select({ count: count() }).from(mathScience)
  const [act] = await db.select({ count: count() }).from(activities)
  const [al] = await db.select({ count: count() }).from(alumni)
  const [gr] = await db.select({ count: count() }).from(graduates)
  const [ev] = await db.select({ count: count() }).from(events)
  const [nw] = await db.select({ count: count() }).from(news)
  return {
    'board-passers': bp.count,
    'math-science': ms.count,
    activities: act.count,
    alumni: al.count,
    graduates: gr.count,
    events: ev.count,
    news: nw.count,
  }
}

const COLLECTIONS = [
  { slug: 'board-passers', label: 'Board Passers', desc: 'Licensure exam passers' },
  { slug: 'math-science', label: 'Math & Science', desc: 'Competition achievements' },
  { slug: 'activities', label: 'Activities', desc: 'School events & activities' },
  { slug: 'alumni', label: 'Alumni', desc: 'Success stories' },
  { slug: 'graduates', label: 'Graduates', desc: 'College placement records' },
  { slug: 'events', label: 'Incoming Events', desc: 'Upcoming school events' },
  { slug: 'news', label: 'News', desc: 'Latest announcements' },
]

export default async function AdminDashboard() {
  const counts = await getCounts()

  return (
    <main className="min-h-screen bg-[#0E0E0E] text-[#F5F0E8]">
      {/* Nav */}
      <div className="border-b border-white/[0.05] px-8 py-5 flex items-center justify-between">
        <div>
          <p className="text-[9px] tracking-[0.4em] uppercase text-[#D4A853] font-sans">MMHSI</p>
          <h1 className="font-display text-2xl font-semibold mt-0.5">Admin Dashboard</h1>
        </div>
        <form action={logout}>
          <button
            type="submit"
            className="text-[10px] tracking-[0.2em] uppercase font-sans text-[#F5F0E8]/30 hover:text-[#F5F0E8]/60 transition-colors"
          >
            Sign Out
          </button>
        </form>
      </div>

      {/* Collections Grid */}
      <div className="px-8 py-10">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#F5F0E8]/20 font-sans mb-6">Collections</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {COLLECTIONS.map(col => (
            <Link
              key={col.slug}
              href={`/admin/${col.slug}`}
              className="bg-[#161616] border border-white/[0.05] p-6 hover:border-[#C41E3A]/30 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(196,30,58,0.08)] transition-all duration-200 group"
            >
              <div className="font-display text-3xl font-light text-[#D4A853] mb-3 leading-none">
                {counts[col.slug as keyof typeof counts] ?? 0}
              </div>
              <div className="font-display text-lg font-semibold text-[#F5F0E8] mb-1 group-hover:text-white transition-colors">
                {col.label}
              </div>
              <div className="text-[11px] text-[#F5F0E8]/25 font-sans">{col.desc}</div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
