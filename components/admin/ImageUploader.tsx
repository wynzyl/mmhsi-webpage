'use client'
import { useState, useRef } from 'react'

interface Props {
  value: string
  onChange: (url: string) => void
  collection: string
}

export default function ImageUploader({ value, onChange, collection }: Props) {
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setError('')
    setUploading(true)
    try {
      const fd = new FormData()
      fd.append('file', file)
      fd.append('collection', collection)
      const res = await fetch('/api/upload', { method: 'POST', body: fd })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error ?? 'Upload failed')
      onChange(json.url)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Upload failed')
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="space-y-2">
      {value && (
        <img src={value} alt="Preview" className="h-32 w-auto object-cover border border-white/10" />
      )}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="px-4 py-2 text-[11px] tracking-[0.15em] uppercase font-sans bg-[#1a1a1a] border border-white/10 text-[#F5F0E8]/60 hover:border-[#C41E3A]/40 hover:text-[#F5F0E8] transition-colors disabled:opacity-50"
        >
          {uploading ? 'Uploading…' : 'Choose Image'}
        </button>
        {value && (
          <span className="text-[10px] text-[#F5F0E8]/30 font-sans truncate max-w-[200px]">{value}</span>
        )}
      </div>
      <input ref={inputRef} type="file" accept="image/jpeg,image/png,image/webp" className="hidden" onChange={handleFile} />
      {error && <p className="text-[11px] text-red-400 font-sans">{error}</p>}
    </div>
  )
}
