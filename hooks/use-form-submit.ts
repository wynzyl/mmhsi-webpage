'use client'
import { useState } from 'react'

export function useFormSubmit() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function run(action: () => Promise<void>) {
    setError('')
    setLoading(true)
    try {
      await action()
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return { run, loading, error }
}
