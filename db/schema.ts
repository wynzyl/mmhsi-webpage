import { pgTable, serial, text, integer } from 'drizzle-orm/pg-core'

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
