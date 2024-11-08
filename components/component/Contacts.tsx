"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"

export const Contacts = () => {
  const [form, setForm] = useState({ name: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const { name, message } = form
    if (!name || !message) {
      setError('Name and message are required')
      return
    }

    setStatus('loading')
    setError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, message }),
      })

      if (res.ok) {
        setForm({ name: '', message: '' })
        setStatus('success')
        setTimeout(() => setStatus('idle'), 2000)
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      console.error('Failed to submit:', error)
      setError('Failed to submit your message. Please try again later.')
      setStatus('error')
    }
  }

  return (
    <div className="flex items-center justify-center mt-20">
      <div className="px-7 py-10">
        <h4 className="text-2xl mb-5">Contact Me</h4>

        {status === 'success' && (
          <p className="mb-4 text-green-500">Thank you for your message!</p>
        )}
        {status === 'error' && <p className="text-red-500">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nama</label>
            <input
              type="text"
              id="name"
              value={form.name}
              className="w-full text-sm bg-transparent border-[1.5px] px-5 py-3 rounded-lg mb-4 outline-none"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Pesan</label>
            <textarea
              id="message"
              value={form.message}
              className="w-full text-sm bg-transparent border-[1.5px] px-5 py-3 rounded-lg mb-4 outline-none"
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
          </div>
          <Button
            className="w-full"
            type="submit"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Mengirim...' : 'Kirim'}
          </Button>
        </form>
      </div>
    </div>
  )
}