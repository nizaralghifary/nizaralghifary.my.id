"use client"

import React, { useState } from 'react'

import { Button } from "@/components/ui/button"

export const Contacts = () => {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name || !message) {
      setError('Name and message are required')
      return
    }

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, message }),
    })

    if (res.ok) {
      setName('')
      setMessage('')
      setSubmitted(true)
      setError('')

      setTimeout(() => {
        setSubmitted(false)
      }, 2000)
    } else {
      console.error('Failed to submit')
      setError('Failed to submit your message. Please try again later.')
    }
  }
  
  return (
    <div className="flex items-center justify-center mt-20">
      <div className="px-7 py-10">
        <h4 className="text-2xl mb-5">
          Contact Me
        </h4>
        {submitted && (
          <p className="mb-4">
            Thank you for your message!
          </p>
        )}
        {error && <p className={`text-red-500`}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">
              Nama
            </label>
            <input
              type="text"
              id="name"
              value={name}
              className="w-full text-sm bg-transparent border-[1.5px] px-5 py-3 rounded-lg mb-4 outline-none"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message">
              Pesan
            </label>
            <textarea
              id="message"
              value={message}
              className={`w-full text-sm bg-transparent border-[1.5px] px-5 py-3 rounded-lg mb-4 outline-none`}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <Button
            className="w-full"
            type="submit"
          >
            Kirim
          </Button>
        </form>
      </div>
    </div>
  )
}