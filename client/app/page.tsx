'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ChatWidget from "@/components/chat-widget"
import Header from "@/components/header"
import Link from "next/link"

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">NextRole</h1>
          <Button 
            onClick={() => router.push('/auth')}
            variant="outline"
          >
            Login / Sign Up
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Welcome to NextRole</h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mb-12">
            Your career path navigator for finding the perfect job matches based on your skills.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Skills Matching</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Find job matches based on your skills and see what you need to learn next.
                </p>
                <Button 
                  onClick={() => router.push('/skills-matching')}
                  className="w-full"
                >
                  Match Skills
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Career Roadmaps</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Explore career paths and create your personalized learning roadmap.
                </p>
                <Button 
                  onClick={() => router.push('/roadmaps')}
                  className="w-full"
                >
                  View Roadmaps
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Explore Career Roadmaps</h3>
                <p className="text-gray-600">
                  Browse through industry-specific career paths and see the skills and steps needed to progress.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Match Your Skills</h3>
                <p className="text-gray-600">
                  Input your current skills and discover jobs that match your profile, along with skills to develop.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Get Personalized Advice</h3>
                <p className="text-gray-600">
                  Chat with our AI assistant for customized career guidance and answers to your questions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2024 NextRole. All rights reserved.</p>
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

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
}
