"use client"

import Link from "next/link"
import UserAccountDropdown from "./user-account-dropdown"

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="font-medium">
            Home
          </Link>
          <Link href="/roadmaps" className="font-medium">
            Roadmaps
          </Link>
          <Link href="/skills-matching" className="font-medium">
            Skills Matching
          </Link>
        </nav>
        <UserAccountDropdown />
      </div>
    </header>
  )
} 