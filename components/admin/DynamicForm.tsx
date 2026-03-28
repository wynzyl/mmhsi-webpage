'use client'
import { useState } from 'react'
import type { FieldConfig } from '@/lib/types'
import ImageUploader from './ImageUploader'

interface Props {
  fields: FieldConfig[]
  defaultValues?: Record<string, unknown>
  collection: string
  onSubmit: (data: Record<string, unknown>) => Promise<void>
  onCancel: () => void
  submitLabel?: string
}

export default function DynamicForm({ fields, defaultValues, collection, onSubmit, onCancel, submitLabel = 'Save' }: Props) {
  const [values, setValues] = useState<Record<string, unknown>>(() => {
    const init: Record<string, unknown> = {}
    for (const f of fields) {
      init[f.name] = defaultValues?.[f.name] ?? (f.type === 'number' ? '' : '')
    }
    return init
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function set(name: string, value: unknown) {
    setValues(prev => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const data: Record<string, unknown> = {}
      for (const f of fields) {
        data[f.name] = f.type === 'number' ? Number(values[f.name]) : values[f.name]
      }
      await onSubmit(data)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {fields.map(field => (
        <div key={field.name} className="space-y-1.5">
          <label className="block text-[10px] tracking-[0.2em] uppercase font-sans text-[#D4A853]">
            {field.label}{field.required && ' *'}
          </label>
          {field.type === 'textarea' ? (
            <textarea
              value={String(values[field.name] ?? '')}
              onChange={e => set(field.name, e.target.value)}
              required={field.required}
              rows={4}
              className="w-full bg-[#1a1a1a] border border-white/[0.08] text-[#F5F0E8] text-[13px] px-3 py-2.5 font-sans focus:outline-none focus:border-[#C41E3A]/40 resize-none"
            />
          ) : field.type === 'image' ? (
            <ImageUploader
              value={String(values[field.name] ?? '')}
              onChange={url => set(field.name, url)}
              collection={collection}
            />
          ) : (
            <input
              type={field.type === 'number' ? 'number' : 'text'}
              value={String(values[field.name] ?? '')}
              onChange={e => set(field.name, e.target.value)}
              required={field.required}
              className="w-full bg-[#1a1a1a] border border-white/[0.08] text-[#F5F0E8] text-[13px] px-3 py-2.5 font-sans focus:outline-none focus:border-[#C41E3A]/40"
            />
          )}
        </div>
      ))}

      {error && (
        <p className="text-[12px] text-red-400 font-sans">{error}</p>
      )}

      <div className="flex items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2.5 bg-[#C41E3A] text-[#F5F0E8] text-[11px] tracking-[0.2em] uppercase font-sans hover:bg-[#a01830] transition-colors disabled:opacity-50"
        >
          {loading ? 'Saving…' : submitLabel}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2.5 border border-white/10 text-[#F5F0E8]/50 text-[11px] tracking-[0.2em] uppercase font-sans hover:text-[#F5F0E8] hover:border-white/20 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
