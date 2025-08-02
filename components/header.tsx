"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SocialLinks } from "@/components/social-links"
import { AuthButton } from "@/components/auth/auth-button"

const navigation = [
  { name: "Home", href: "/" },
  { 
    name: "About", 
    href: "/about",
    dropdown: [
      { name: "About Us", href: "/about" },
      { name: "Art & Media", href: "/art" },
    ]
  },
  { name: "News", href: "/news" },
  { 
    name: "Community", 
    href: "/community",
    dropdown: [
      { name: "Wall", href: "/community" },
      { name: "Ravenwatch", href: "/ravenwatch" },
    ]
  },
  { name: "Join Us", href: "/join" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [dropdownOpen, setDropdownOpen] = React.useState<string | null>(null)

  const isActiveLink = (href: string, hasDropdown?: boolean) => {
    if (hasDropdown) {
      // For dropdown parents, check if any child route is active
      const item = navigation.find(nav => nav.href === href)
      if (item?.dropdown) {
        return item.dropdown.some(child => pathname === child.href)
      }
    }
    return pathname === href
  }

  const getLinkClasses = (href: string, hasDropdown?: boolean, isMobile?: boolean) => {
    const baseClasses = isMobile 
      ? "block px-3 py-2 text-base font-medium rounded-md transition-colors"
      : "text-sm font-medium transition-all duration-200"
    
    const isActive = isActiveLink(href, hasDropdown)
    
    if (isActive) {
      return `${baseClasses} text-neon-purple font-bold ${isMobile ? 'bg-accent' : 'text-glow'}`
    }
    
    return `${baseClasses} text-foreground/80 hover:text-foreground ${isMobile ? 'hover:bg-accent' : 'hover:text-glow'}`
  }
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container-noir flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="relative w-10 h-10">
              <Image
                src="/N.png"
                alt="NOIR Community N logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-jarvish-blurry font-bold neon-text px-1 py-0.5">
                NOIR
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.dropdown && setDropdownOpen(item.name)}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              {item.dropdown ? (
                <div className="flex items-center space-x-1 text-sm font-medium text-foreground/80 hover:text-foreground hover:text-glow transition-all duration-200 cursor-pointer">
                  <span>{item.name}</span>
                  <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${
                    dropdownOpen === item.name ? 'rotate-180' : ''
                  }`} />
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={getLinkClasses(item.href)}
                  aria-current={isActiveLink(item.href) ? "page" : undefined}
                >
                  {item.name}
                </Link>
              )}
              
              {/* Dropdown Menu */}
              {item.dropdown && dropdownOpen === item.name && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-background/95 backdrop-blur border border-border/40 rounded-md shadow-lg py-1 z-50">
                  {item.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.name}
                      href={dropdownItem.href}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        pathname === dropdownItem.href 
                          ? 'text-neon-purple font-semibold bg-accent' 
                          : 'text-foreground/80 hover:text-foreground hover:bg-accent'
                      }`}
                      aria-current={pathname === dropdownItem.href ? "page" : undefined}
                    >
                      {dropdownItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right side - Social Links and Theme Toggle */}
        <div className="flex items-center space-x-4">
          <AuthButton />
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur border-b border-border/40">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div>
                    <div className={`px-3 py-2 text-base font-medium ${
                      isActiveLink(item.href, true) ? 'text-neon-purple font-bold' : 'text-foreground/80'
                    }`}>
                      {item.name}
                    </div>
                    <div className="pl-6 space-y-1">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                            pathname === dropdownItem.href
                              ? 'text-neon-purple font-bold bg-accent'
                              : 'text-foreground/60 hover:text-foreground hover:bg-accent'
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                          aria-current={pathname === dropdownItem.href ? "page" : undefined}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={getLinkClasses(item.href, false, true)}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={isActiveLink(item.href) ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}