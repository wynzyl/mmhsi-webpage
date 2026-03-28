'use server'
import { db } from '@/db'
import { news } from '@/db/schema'
import { revalidatePath } from 'next/cache'
import { eq } from 'drizzle-orm'

export async function createNews(data: { title: string; date: string; category: string; excerpt: string }) {
  await db.insert(news).values(data)
  revalidatePath('/news')
  revalidatePath('/admin/news')
}

export async function updateNews(id: number, data: Partial<{ title: string; date: string; category: string; excerpt: string }>) {
  await db.update(news).set(data).where(eq(news.id, id))
  revalidatePath('/news')
  revalidatePath('/admin/news')
}

export async function deleteNews(id: number) {
  await db.delete(news).where(eq(news.id, id))
  revalidatePath('/news')
  revalidatePath('/admin/news')
}
