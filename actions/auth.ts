'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function login(password: string) {
  if (password !== process.env.ADMIN_PASSWORD) {
    throw new Error('Invalid password')
  }
  const cookieStore = await cookies()
  cookieStore.set('admin_session', process.env.ADMIN_PASSWORD!, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  })
  redirect('/admin')
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete('admin_session')
  redirect('/admin/login')
}
