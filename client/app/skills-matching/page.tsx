"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import SkillInput from "@/components/skill-input"
import JobMatchCard from "@/components/job-match-card"
import ChatWidget from "@/components/chat-widget"

// Mock data for job matches
const jobMatches = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    matchPercentage: 92,
    location: "Remote",
    salary: "$120,000 - $150,000",
    skills: ["React", "TypeScript", "CSS", "Next.js", "GraphQL"],
    missingSkills: ["Vue.js", "AWS"],
  },
  {
    id: 2,
    title: "Full Stack Engineer",
    company: "Digital Innovations",
    matchPercentage: 85,
    location: "New York, NY",
    salary: "$110,000 - $140,000",
    skills: ["JavaScript", "Node.js", "React", "MongoDB", "Express"],
    missingSkills: ["Docker", "Kubernetes", "AWS"],
  },
  {
    id: 3,
    title: "UI/UX Developer",
    company: "Creative Design Studio",
    matchPercentage: 78,
    location: "San Francisco, CA",
    salary: "$100,000 - $130,000",
    skills: ["React", "CSS", "Figma", "HTML"],
    missingSkills: ["Adobe XD", "Sketch", "User Research"],
  },
  {
    id: 4,
    title: "Backend Developer",
    company: "Data Systems Corp",
    matchPercentage: 72,
    location: "Austin, TX",
    salary: "$115,000 - $135,000",
    skills: ["Node.js", "Express", "MongoDB"],
    missingSkills: ["Python", "Django", "AWS", "SQL"],
  },
]

// Mock data for high-value skills
const highValueSkills = [
  { name: "AWS", demand: "High", growth: "+15%" },
  { name: "React Native", demand: "High", growth: "+12%" },
  { name: "Docker", demand: "Medium", growth: "+10%" },
  { name: "Python", demand: "High", growth: "+18%" },
  { name: "GraphQL", demand: "Medium", growth: "+8%" },
]

export default function SkillsMatchingPage() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>(["React", "JavaScript", "HTML", "CSS", "TypeScript"])

  const handleAddSkill = (skill: string) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill])
    }
  }

  const handleRemoveSkill = (skill: string) => {
    setSelectedSkills(selectedSkills.filter((s) => s !== skill))
  }

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
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Skills Matching</h2>
          <p className="text-gray-600">Find jobs that match your skills and discover new skills to learn</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Your Skills</h3>
                <SkillInput
                  selectedSkills={selectedSkills}
                  onAddSkill={handleAddSkill}
                  onRemoveSkill={handleRemoveSkill}
                />
              </CardContent>
            </Card>

            <h3 className="text-xl font-semibold mb-4">Job Matches</h3>
            <div className="space-y-4">
              {jobMatches &&
                jobMatches.map((job) => <JobMatchCard key={job.id} job={job} userSkills={selectedSkills || []} />)}
            </div>
          </div>

          <div>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Skills to Add</h3>
                <p className="text-gray-600 mb-4">These in-demand skills will increase your job match percentage</p>
                <div className="space-y-4">
                  {highValueSkills &&
                    highValueSkills.map((skill) => (
                      <div key={skill.name} className="border rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium">{skill.name}</h4>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleAddSkill(skill.name)}
                            disabled={selectedSkills.includes(skill.name)}
                          >
                            {selectedSkills.includes(skill.name) ? "Added" : "Add"}
                          </Button>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <span>Demand: {skill.demand}</span>
                          <span>Growth: {skill.growth}</span>
                        </div>
                      </div>
                    ))}
                </div>
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

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  )
}
