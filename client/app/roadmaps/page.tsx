import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import RoadmapCard from "@/components/roadmap-card"
import ChatWidget from "@/components/chat-widget"
import Link from "next/link"

// Mock data for roadmaps
const roadmaps = [
  {
    id: 1,
    title: "Software Development",
    description: "From junior developer to software architect",
    industry: "Technology",
    experienceLevel: "All Levels",
    steps: 5,
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "Data Science",
    description: "From data analyst to chief data officer",
    industry: "Technology",
    experienceLevel: "Intermediate",
    steps: 4,
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "Digital Marketing",
    description: "From marketing assistant to marketing director",
    industry: "Marketing",
    experienceLevel: "Beginner",
    steps: 6,
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 4,
    title: "UX/UI Design",
    description: "From junior designer to design lead",
    industry: "Design",
    experienceLevel: "All Levels",
    steps: 5,
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 5,
    title: "Project Management",
    description: "From project coordinator to program director",
    industry: "Business",
    experienceLevel: "Intermediate",
    steps: 4,
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 6,
    title: "Financial Analysis",
    description: "From financial analyst to CFO",
    industry: "Finance",
    experienceLevel: "Advanced",
    steps: 7,
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function RoadmapsPage() {
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

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Career Roadmaps</h2>
            <p className="text-gray-600">Explore career paths and progression steps across industries</p>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-auto">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Industries</SelectItem>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full sm:w-auto">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Experience Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roadmaps.map((roadmap) => (
            <RoadmapCard key={roadmap.id} roadmap={roadmap} />
          ))}
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

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  )
}
