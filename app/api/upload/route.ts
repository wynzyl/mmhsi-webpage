import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { randomUUID } from 'crypto'

const VALID_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
const MAX_SIZE = 5 * 1024 * 1024 // 5 MB

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const file = formData.get('file') as File | null
    const collection = formData.get('collection') as string | null

    if (!file) return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    if (!collection) return NextResponse.json({ error: 'No collection provided' }, { status: 400 })
    if (!VALID_TYPES.includes(file.type)) {
      return NextResponse.json({ error: 'Invalid file type. Use JPG, PNG, or WebP.' }, { status: 400 })
    }
    if (file.size > MAX_SIZE) {
      return NextResponse.json({ error: 'File too large. Maximum 5 MB.' }, { status: 400 })
    }

    const ext = file.name.split('.').pop()?.toLowerCase() ?? 'jpg'
    const filename = `${randomUUID()}.${ext}`
    const uploadDir = join(process.cwd(), 'public', 'uploads', collection)

    await mkdir(uploadDir, { recursive: true })

    const bytes = await file.arrayBuffer()
    await writeFile(join(uploadDir, filename), Buffer.from(bytes))

    return NextResponse.json({ url: `/uploads/${collection}/${filename}` })
  } catch (err) {
    console.error('[upload]', err)
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
  }
}
