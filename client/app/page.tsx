import Link from "next/link"
import { Button } from "@/components/ui/button"
import ChatWidget from "@/components/chat-widget"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Career Path Navigator</h1>
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
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Navigate Your Career Journey</h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mb-12">
            Discover personalized career roadmaps and find jobs that match your skills. Let us guide you to your next
            professional milestone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/roadmaps">Explore Roadmaps</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
              <Link href="/skills-matching">Find Matching Jobs</Link>
            </Button>
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

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  )
}
