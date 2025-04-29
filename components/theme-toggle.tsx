"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button
        className="rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
        aria-label="Toggle theme"
        disabled
      >
        <Sun className="h-5 w-5 opacity-50" />
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
      aria-label="Toggle theme"
    >
      {resolvedTheme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </button>
  )
}

