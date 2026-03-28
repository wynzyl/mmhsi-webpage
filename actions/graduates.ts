'use server'
import { db } from '@/db'
import { graduates } from '@/db/schema'
import { revalidatePath } from 'next/cache'
import { eq } from 'drizzle-orm'

export async function createGraduate(data: { name: string; university: string; course: string; batch: number }) {
  await db.insert(graduates).values(data)
  revalidatePath('/graduates')
  revalidatePath('/admin/graduates')
}

export async function updateGraduate(id: number, data: Partial<{ name: string; university: string; course: string; batch: number }>) {
  await db.update(graduates).set(data).where(eq(graduates.id, id))
  revalidatePath('/graduates')
  revalidatePath('/admin/graduates')
}

export async function deleteGraduate(id: number) {
  await db.delete(graduates).where(eq(graduates.id, id))
  revalidatePath('/graduates')
  revalidatePath('/admin/graduates')
}
