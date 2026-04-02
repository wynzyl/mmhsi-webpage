'use client'
import { useState } from 'react'
import { login } from '@/actions/auth'
import { useFormSubmit } from '@/hooks/use-form-submit'
import { ADMIN_INPUT, ADMIN_BTN_PRIMARY } from '@/lib/styles'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const { run, loading, error } = useFormSubmit()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    await run(() => login(password))
  }

  return (
    <main className="min-h-screen bg-[#0E0E0E] flex items-center justify-center px-4">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(196,30,58,0.08) 0%, transparent 70%)' }}
      />
      <div className="relative w-full max-w-sm">
        <div className="mb-10 text-center">
          <p className="text-[9px] tracking-[0.4em] uppercase text-[#D4A853] font-sans mb-3">MMHSI</p>
          <h1 className="font-display text-4xl font-light text-[#F5F0E8]">Admin Panel</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="block text-[10px] tracking-[0.2em] uppercase text-[#F5F0E8]/30 font-sans">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              autoFocus
              className={ADMIN_INPUT}
            />
          </div>

          {error && (
            <p className="text-[12px] text-red-400 font-sans">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 ${ADMIN_BTN_PRIMARY}`}
          >
            {loading ? 'Signing in…' : 'Sign In'}
          </button>
        </form>
      </div>
    </main>
  )
}
