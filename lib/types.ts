import type { InferSelectModel } from 'drizzle-orm'
import type {
  boardPassers,
  mathScience,
  activities,
  alumni,
  graduates,
  events,
  news,
} from '@/db/schema'

export type BoardPasser = InferSelectModel<typeof boardPassers>
export type MathScience = InferSelectModel<typeof mathScience>
export type Activity = InferSelectModel<typeof activities>
export type Alumni = InferSelectModel<typeof alumni>
export type Graduate = InferSelectModel<typeof graduates>
export type Event = InferSelectModel<typeof events>
export type News = InferSelectModel<typeof news>

export interface FieldConfig {
  name: string
  label: string
  type: 'text' | 'textarea' | 'number' | 'image'
  required?: boolean
}

export interface CollectionConfig {
  label: string
  fields: FieldConfig[]
}
