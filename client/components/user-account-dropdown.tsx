"use client"

import { useState } from "react"
import { useAuth } from "@/app/contexts/auth-context"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

export default function UserAccountDropdown() {
  const { isAuthenticated, user, logout } = useAuth()
  const [isOpen, setIsOpen] = useState(false)

  if (!isAuthenticated) {
    return (
      <Link href="/auth">
        <Button variant="outline">Login</Button>
      </Link>
    )
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
            {user?.email[0].toUpperCase()}
          </span>
          <span className="hidden md:inline">{user?.email}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 