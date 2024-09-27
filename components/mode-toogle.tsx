"use client"

import * as React from "react"
import { Moon, Sun, Laptop, Check } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { theme, setTheme } = useTheme() 

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem 
          onClick={() => setTheme("light")}
          className="flex items-center"
        >
          <Sun className="mr-2 h-4 w-4" />
          <span className="flex-grow">Light</span>
          {theme === "light" && <Check className="ml-2 h-4 w-4" />}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("dark")}
          className="flex items-center"
        >
          <Moon className="mr-2 h-4 w-4" />
          <span className="flex-grow">Dark</span>
          {theme === "dark" && <Check className="ml-2 h-4 w-4" />}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("system")}
          className="flex items-center"
        >
          <Laptop className="mr-2 h-4 w-4" />
          <span className="flex-grow">System</span>
          {theme === "system" && <Check className="ml-2 h-4 w-4" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}