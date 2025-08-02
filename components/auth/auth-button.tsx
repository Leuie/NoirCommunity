"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export function AuthButton() {
  const handleSignIn = () => {
    // Redirect to Discord for authentication
    window.location.href = 'https://discord.gg/noircommunity'
  }

  return (
    <Button onClick={handleSignIn} size="sm" className="btn-primary">
      Join Discord
    </Button>
  )
}