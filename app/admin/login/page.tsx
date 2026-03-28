'use client'
import { useState } from 'react'
import { login } from '@/actions/auth'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await login(password)
    } catch {
      setError('Invalid password')
      setLoading(false)
    }
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
              className="w-full bg-[#161616] border border-white/[0.07] text-[#F5F0E8] text-[13px] px-4 py-3 font-sans focus:outline-none focus:border-[#C41E3A]/40"
            />
          </div>

          {error && (
            <p className="text-[12px] text-red-400 font-sans">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#C41E3A] text-[#F5F0E8] text-[11px] tracking-[0.25em] uppercase font-sans hover:bg-[#a01830] transition-colors disabled:opacity-50"
          >
            {loading ? 'Signing in…' : 'Sign In'}
          </button>
        </form>
      </div>
    </main>
  )
}
