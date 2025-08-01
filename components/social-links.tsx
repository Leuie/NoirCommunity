"use client"

import Link from "next/link"
import { MessageCircle, Camera, Play, AtSign, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  {
    name: "Discord",
    href: "https://www.noircommunity.com/discord",
    icon: MessageCircle,
    color: "hover:text-[#5865F2]",
  },
  {
    name: "Threads",
    href: "https://www.threads.com/@noircommunity",
    icon: AtSign,
    color: "hover:text-[#000000] dark:hover:text-[#ffffff]",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/noircommunity",
    icon: Play,
    color: "hover:text-[#FF0000]",
  },
  {
    name: "Bluesky",
    href: "https://bsky.app/profile/noircommunity.com",
    icon: Camera,
    color: "hover:text-[#00A8E8]",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/noircommunity",
    icon: Instagram,
    color: "hover:text-[#E4405F]",
  },
]

export function SocialLinks() {
  return (
    <div className="flex items-center space-x-2">
      {socialLinks.map((link) => {
        const Icon = link.icon
        return (
          <Button
            key={link.name}
            variant="ghost"
            size="icon"
            asChild
            className={`w-9 h-9 transition-colors ${link.color}`}
          >
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow us on ${link.name}`}
            >
              <Icon className="h-4 w-4" />
            </Link>
          </Button>
        )
      })}
    </div>
  )
}