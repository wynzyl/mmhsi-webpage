import { notFound } from 'next/navigation'
import { COLLECTION_CONFIG } from '@/lib/admin-config'
import { getCollectionData } from '@/lib/admin-data'
import CollectionManager from '@/components/admin/CollectionManager'
import Link from 'next/link'

import { createBoardPasser, updateBoardPasser, deleteBoardPasser } from '@/actions/board-passers'
import { createAchievement, updateAchievement, deleteAchievement } from '@/actions/math-science'
import { createActivity, updateActivity, deleteActivity } from '@/actions/activities'
import { createAlumnus, updateAlumnus, deleteAlumnus } from '@/actions/alumni'
import { createGraduate, updateGraduate, deleteGraduate } from '@/actions/graduates'
import { createEvent, updateEvent, deleteEvent } from '@/actions/events'
import { createNews, updateNews, deleteNews } from '@/actions/news'

export const dynamic = 'force-dynamic'

const ACTIONS_MAP = {
  'board-passers': { create: createBoardPasser, update: updateBoardPasser, delete: deleteBoardPasser },
  'math-science': { create: createAchievement, update: updateAchievement, delete: deleteAchievement },
  activities: { create: createActivity, update: updateActivity, delete: deleteActivity },
  alumni: { create: createAlumnus, update: updateAlumnus, delete: deleteAlumnus },
  graduates: { create: createGraduate, update: updateGraduate, delete: deleteGraduate },
  events: { create: createEvent, update: updateEvent, delete: deleteEvent },
  news: { create: createNews, update: updateNews, delete: deleteNews },
} as const

export default async function AdminCollectionPage({ params }: { params: Promise<{ collection: string }> }) {
  const { collection } = await params
  const config = COLLECTION_CONFIG[collection]
  const actions = ACTIONS_MAP[collection as keyof typeof ACTIONS_MAP]

  if (!config || !actions) notFound()

  const items = await getCollectionData(collection)

  return (
    <div>
      <div className="bg-[#0E0E0E] border-b border-white/[0.04] px-8 py-3">
        <Link href="/admin" className="text-[10px] tracking-[0.2em] uppercase text-[#F5F0E8]/25 hover:text-[#F5F0E8]/50 font-sans transition-colors">
          ← Dashboard
        </Link>
      </div>
      <CollectionManager
        items={items as Record<string, unknown>[]}
        config={config}
        collection={collection}
        onCreate={actions.create as (data: Record<string, unknown>) => Promise<void>}
        onUpdate={actions.update as (id: number, data: Record<string, unknown>) => Promise<void>}
        onDelete={actions.delete}
      />
    </div>
  )
}
