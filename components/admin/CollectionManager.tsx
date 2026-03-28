'use client'
import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import type { CollectionConfig } from '@/lib/types'
import DynamicForm from './DynamicForm'

interface Props {
  items: Record<string, unknown>[]
  config: CollectionConfig
  collection: string
  onCreate: (data: Record<string, unknown>) => Promise<void>
  onUpdate: (id: number, data: Record<string, unknown>) => Promise<void>
  onDelete: (id: number) => Promise<void>
}

type Panel = 'none' | 'create' | 'edit'

export default function CollectionManager({ items, config, collection, onCreate, onUpdate, onDelete }: Props) {
  const router = useRouter()
  const [panel, setPanel] = useState<Panel>('none')
  const [selected, setSelected] = useState<Record<string, unknown> | null>(null)
  const [deleting, setDeleting] = useState<number | null>(null)
  const [isPending, startTransition] = useTransition()

  function openCreate() {
    setSelected(null)
    setPanel('create')
  }

  function openEdit(item: Record<string, unknown>) {
    setSelected(item)
    setPanel('edit')
  }

  function closePanel() {
    setPanel('none')
    setSelected(null)
  }

  async function handleCreate(data: Record<string, unknown>) {
    await onCreate(data)
    closePanel()
    startTransition(() => router.refresh())
  }

  async function handleUpdate(data: Record<string, unknown>) {
    if (!selected) return
    await onUpdate(selected.id as number, data)
    closePanel()
    startTransition(() => router.refresh())
  }

  async function handleDelete(id: number) {
    if (!confirm('Delete this item?')) return
    setDeleting(id)
    try {
      await onDelete(id)
      startTransition(() => router.refresh())
    } finally {
      setDeleting(null)
    }
  }

  const displayFields = config.fields.filter(f => f.type !== 'image' && f.type !== 'textarea').slice(0, 3)

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-[#F5F0E8]">
      {/* Header */}
      <div className="border-b border-white/[0.05] px-8 py-6 flex items-center justify-between">
        <div>
          <p className="text-[9px] tracking-[0.3em] uppercase text-[#D4A853] font-sans mb-1">Admin</p>
          <h1 className="font-display text-3xl font-semibold">{config.label}</h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[11px] text-[#F5F0E8]/30 font-sans">{items.length} item{items.length !== 1 ? 's' : ''}</span>
          <button
            onClick={openCreate}
            className="px-5 py-2.5 bg-[#C41E3A] text-[#F5F0E8] text-[11px] tracking-[0.2em] uppercase font-sans hover:bg-[#a01830] transition-colors"
          >
            + Add New
          </button>
        </div>
      </div>

      {/* Panel */}
      {panel !== 'none' && (
        <div className="border-b border-white/[0.05] bg-[#111] px-8 py-8">
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#D4A853] font-sans mb-6">
            {panel === 'create' ? 'New Entry' : 'Edit Entry'}
          </p>
          <DynamicForm
            fields={config.fields}
            defaultValues={selected ?? undefined}
            collection={collection}
            onSubmit={panel === 'create' ? handleCreate : handleUpdate}
            onCancel={closePanel}
            submitLabel={panel === 'create' ? 'Create' : 'Update'}
          />
        </div>
      )}

      {/* Table */}
      <div className="px-8 py-6">
        {items.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-[#F5F0E8]/20 font-sans text-sm">No entries yet. Add your first one.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/[0.05]">
                  <th className="py-3 pr-4 text-[9px] tracking-[0.25em] uppercase text-[#F5F0E8]/25 font-sans">ID</th>
                  {displayFields.map(f => (
                    <th key={f.name} className="py-3 pr-4 text-[9px] tracking-[0.25em] uppercase text-[#F5F0E8]/25 font-sans">
                      {f.label}
                    </th>
                  ))}
                  <th className="py-3 text-[9px] tracking-[0.25em] uppercase text-[#F5F0E8]/25 font-sans text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map(item => (
                  <tr key={String(item.id)} className="border-b border-white/[0.03] hover:bg-white/[0.02]">
                    <td className="py-3.5 pr-4 text-[12px] text-[#F5F0E8]/30 font-sans">{String(item.id)}</td>
                    {displayFields.map(f => (
                      <td key={f.name} className="py-3.5 pr-4 text-[12px] text-[#F5F0E8]/70 font-sans max-w-[200px] truncate">
                        {String(item[f.name] ?? '')}
                      </td>
                    ))}
                    <td className="py-3.5 text-right">
                      <div className="flex items-center justify-end gap-3">
                        <button
                          onClick={() => openEdit(item)}
                          className="text-[10px] tracking-[0.15em] uppercase font-sans text-[#D4A853]/60 hover:text-[#D4A853] transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(item.id as number)}
                          disabled={deleting === item.id || isPending}
                          className="text-[10px] tracking-[0.15em] uppercase font-sans text-[#C41E3A]/40 hover:text-[#C41E3A] transition-colors disabled:opacity-30"
                        >
                          {deleting === item.id ? '…' : 'Delete'}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
