"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function FloatingThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="fixed right-6 bottom-6 z-50">
        <Button 
          variant="outline" 
          size="icon" 
          className="w-12 h-12 rounded-full shadow-lg bg-background/80 backdrop-blur-sm border-border/50 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
        >
          <Sun className="h-5 w-5" />
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed right-6 bottom-6 z-50">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="w-12 h-12 rounded-full shadow-lg bg-background/80 backdrop-blur-sm border-border/50 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110 hover:shadow-xl"
        title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {theme === "light" ? (
          <Moon className="h-5 w-5" />
        ) : (
          <Sun className="h-5 w-5" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  )
}