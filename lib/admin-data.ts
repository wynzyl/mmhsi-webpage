import { db } from '@/db'
import {
  boardPassers,
  mathScience,
  activities,
  alumni,
  graduates,
  events,
  news,
} from '@/db/schema'

export async function getCollectionData(collection: string) {
  switch (collection) {
    case 'board-passers':
      return db.select().from(boardPassers).orderBy(boardPassers.id)
    case 'math-science':
      return db.select().from(mathScience).orderBy(mathScience.id)
    case 'activities':
      return db.select().from(activities).orderBy(activities.id)
    case 'alumni':
      return db.select().from(alumni).orderBy(alumni.id)
    case 'graduates':
      return db.select().from(graduates).orderBy(graduates.id)
    case 'events':
      return db.select().from(events).orderBy(events.id)
    case 'news':
      return db.select().from(news).orderBy(news.id)
    default:
      return []
  }
}
