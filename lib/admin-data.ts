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

const QUERIES: Record<string, () => Promise<unknown[]>> = {
  'board-passers': () => db.select().from(boardPassers).orderBy(boardPassers.id),
  'math-science':  () => db.select().from(mathScience).orderBy(mathScience.id),
  activities:      () => db.select().from(activities).orderBy(activities.id),
  alumni:          () => db.select().from(alumni).orderBy(alumni.id),
  graduates:       () => db.select().from(graduates).orderBy(graduates.id),
  events:          () => db.select().from(events).orderBy(events.id),
  news:            () => db.select().from(news).orderBy(news.id),
}

export async function getCollectionData(collection: string) {
  return QUERIES[collection]?.() ?? []
}
