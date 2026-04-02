'use client'
import { useState } from 'react'
import type { FieldConfig } from '@/lib/types'
import { useFormSubmit } from '@/hooks/use-form-submit'
import { ADMIN_INPUT, ADMIN_BTN_PRIMARY, ADMIN_BTN_SECONDARY } from '@/lib/styles'
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
      init[f.name] = defaultValues?.[f.name] ?? ''
    }
    return init
  })

  const { run, loading, error } = useFormSubmit()

  function set(name: string, value: unknown) {
    setValues(prev => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    await run(async () => {
      const data: Record<string, unknown> = {}
      for (const f of fields) {
        data[f.name] = f.type === 'number' ? Number(values[f.name]) : values[f.name]
      }
      await onSubmit(data)
    })
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
              className={`${ADMIN_INPUT} resize-none`}
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
              className={ADMIN_INPUT}
            />
          )}
        </div>
      ))}

      {error && (
        <p className="text-[12px] text-red-400 font-sans">{error}</p>
      )}

      <div className="flex items-center gap-3 pt-2">
        <button type="submit" disabled={loading} className={ADMIN_BTN_PRIMARY}>
          {loading ? 'Saving…' : submitLabel}
        </button>
        <button type="button" onClick={onCancel} className={ADMIN_BTN_SECONDARY}>
          Cancel
        </button>
      </div>
    </form>
  )
}
