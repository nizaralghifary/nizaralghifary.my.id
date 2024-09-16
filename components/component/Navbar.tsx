import React from 'react'

import { ModeToggle } from "@/components/mode-toogle"

export const Navbar = () => {
  return (
    <nav className="sticky top-0 backdrop-blur z-20 px-6 py-2 flex justify-between items-center sm:px-16 px-8 max-w-full border-b">
      <h2 className="text-xl font-semibold py-2">
        Nizar
      </h2>
      <ModeToggle/>
    </nav>
  )
}