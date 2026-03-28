'use server'
import { db } from '@/db'
import { mathScience } from '@/db/schema'
import { revalidatePath } from 'next/cache'
import { eq } from 'drizzle-orm'

export async function createAchievement(data: { title: string; participants: string; award: string; level: string; date: string; category: string; image: string }) {
  await db.insert(mathScience).values(data)
  revalidatePath('/math-science')
  revalidatePath('/admin/math-science')
}

export async function updateAchievement(id: number, data: Partial<{ title: string; participants: string; award: string; level: string; date: string; category: string; image: string }>) {
  await db.update(mathScience).set(data).where(eq(mathScience.id, id))
  revalidatePath('/math-science')
  revalidatePath('/admin/math-science')
}

export async function deleteAchievement(id: number) {
  await db.delete(mathScience).where(eq(mathScience.id, id))
  revalidatePath('/math-science')
  revalidatePath('/admin/math-science')
}
