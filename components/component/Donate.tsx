import React from 'react'
import { BadgeDollarSign } from 'lucide-react'

export const Donate = () => {
  return (
    <div className="flex items-center justify-center">
      <a 
        href="https://saweria.co/nizaralghifary" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition"
      >
        <BadgeDollarSign className="mr-2 h-5 w-5 font-semibold" />
        Support Me
      </a>
    </div>
  )
}