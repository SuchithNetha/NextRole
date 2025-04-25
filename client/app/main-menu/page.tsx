"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/app/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import Link from "next/link"

export default function MainMenuPage() {
  const { isAuthenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth")
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Welcome to Your Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Career Roadmaps</CardTitle>
                <CardDescription>
                  Explore personalized career paths and progression steps
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/roadmaps">View Roadmaps</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Skills Matching</CardTitle>
                <CardDescription>
                  Find jobs that match your skills and discover new opportunities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/skills-matching">Match Skills</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Profile</CardTitle>
                <CardDescription>
                  Manage your personal information and preferences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/profile">View Profile</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Saved Items</CardTitle>
                <CardDescription>
                  Access your saved roadmaps and job matches
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/saved">View Saved</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2024 Career Path Navigator. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/about" className="hover:underline">
                About
              </Link>
              <Link href="/privacy" className="hover:underline">
                Privacy
              </Link>
              <Link href="/terms" className="hover:underline">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 