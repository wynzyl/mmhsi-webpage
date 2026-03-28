'use server'
import { db } from '@/db'
import { activities } from '@/db/schema'
import { revalidatePath } from 'next/cache'
import { eq } from 'drizzle-orm'

export async function createActivity(data: { title: string; category: string; date: string; description: string }) {
  await db.insert(activities).values(data)
  revalidatePath('/activities')
  revalidatePath('/admin/activities')
}

export async function updateActivity(id: number, data: Partial<{ title: string; category: string; date: string; description: string }>) {
  await db.update(activities).set(data).where(eq(activities.id, id))
  revalidatePath('/activities')
  revalidatePath('/admin/activities')
}

export async function deleteActivity(id: number) {
  await db.delete(activities).where(eq(activities.id, id))
  revalidatePath('/activities')
  revalidatePath('/admin/activities')
}
