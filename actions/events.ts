'use server'
import { db } from '@/db'
import { events } from '@/db/schema'
import { revalidatePath } from 'next/cache'
import { eq } from 'drizzle-orm'

export async function createEvent(data: { title: string; date: string; time: string; location: string; description: string; category: string }) {
  await db.insert(events).values(data)
  revalidatePath('/incoming-events')
  revalidatePath('/admin/events')
}

export async function updateEvent(id: number, data: Partial<{ title: string; date: string; time: string; location: string; description: string; category: string }>) {
  await db.update(events).set(data).where(eq(events.id, id))
  revalidatePath('/incoming-events')
  revalidatePath('/admin/events')
}

export async function deleteEvent(id: number) {
  await db.delete(events).where(eq(events.id, id))
  revalidatePath('/incoming-events')
  revalidatePath('/admin/events')
}
