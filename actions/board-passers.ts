'use server'
import { db } from '@/db'
import { boardPassers } from '@/db/schema'
import { revalidatePath } from 'next/cache'
import { eq } from 'drizzle-orm'

export async function createBoardPasser(data: { name: string; exam: string; year: number; class: string; image: string }) {
  await db.insert(boardPassers).values(data)
  revalidatePath('/board-passers')
  revalidatePath('/admin/board-passers')
}

export async function updateBoardPasser(id: number, data: Partial<{ name: string; exam: string; year: number; class: string; image: string }>) {
  await db.update(boardPassers).set(data).where(eq(boardPassers.id, id))
  revalidatePath('/board-passers')
  revalidatePath('/admin/board-passers')
}

export async function deleteBoardPasser(id: number) {
  await db.delete(boardPassers).where(eq(boardPassers.id, id))
  revalidatePath('/board-passers')
  revalidatePath('/admin/board-passers')
}
