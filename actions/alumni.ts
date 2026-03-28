'use server'
import { db } from '@/db'
import { alumni } from '@/db/schema'
import { revalidatePath } from 'next/cache'
import { eq } from 'drizzle-orm'

export async function createAlumnus(data: { name: string; batch: string; university: string; program: string; achievement: string; story: string }) {
  await db.insert(alumni).values(data)
  revalidatePath('/alumni')
  revalidatePath('/admin/alumni')
}

export async function updateAlumnus(id: number, data: Partial<{ name: string; batch: string; university: string; program: string; achievement: string; story: string }>) {
  await db.update(alumni).set(data).where(eq(alumni.id, id))
  revalidatePath('/alumni')
  revalidatePath('/admin/alumni')
}

export async function deleteAlumnus(id: number) {
  await db.delete(alumni).where(eq(alumni.id, id))
  revalidatePath('/alumni')
  revalidatePath('/admin/alumni')
}
