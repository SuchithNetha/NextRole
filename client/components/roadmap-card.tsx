"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

interface RoadmapStep {
  title: string
  description: string
  skills: string[]
  timeframe: string
}

// Mock data for roadmap steps
const mockSteps: Record<number, RoadmapStep[]> = {
  1: [
    {
      title: "Junior Developer",
      description: "Build a foundation in software development with hands-on coding experience.",
      skills: ["HTML", "CSS", "JavaScript", "Git", "Basic Algorithms"],
      timeframe: "1-2 years",
    },
    {
      title: "Mid-level Developer",
      description: "Expand your technical skills and take on more complex projects.",
      skills: ["React/Angular/Vue", "Node.js", "SQL/NoSQL", "Testing", "CI/CD"],
      timeframe: "2-3 years",
    },
    {
      title: "Senior Developer",
      description: "Lead development efforts and mentor junior team members.",
      skills: ["System Design", "Architecture Patterns", "Performance Optimization", "Team Leadership"],
      timeframe: "3-5 years",
    },
    {
      title: "Tech Lead",
      description: "Guide technical direction and make key architectural decisions.",
      skills: ["Project Planning", "Technical Documentation", "Cross-team Collaboration", "Stakeholder Management"],
      timeframe: "5-8 years",
    },
    {
      title: "Software Architect",
      description: "Design and oversee implementation of complex software systems.",
      skills: ["Enterprise Architecture", "Technology Strategy", "Scalability Planning", "Technical Vision"],
      timeframe: "8+ years",
    },
  ],
  // Add more roadmaps as needed
}

interface RoadmapCardProps {
  roadmap: {
    id: number
    title: string
    description: string
    industry: string
    experienceLevel: string
    steps: number
    image: string
  }
}

export default function RoadmapCard({ roadmap }: RoadmapCardProps) {
  const [expanded, setExpanded] = useState(false)

  // Get steps for this roadmap or use an empty array if not found
  const steps = mockSteps[roadmap.id] || []

  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image src={roadmap.image || "/placeholder.svg"} alt={roadmap.title} fill className="object-cover" />
      </div>
      <CardContent className="pt-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{roadmap.title}</h3>
          <Badge variant="outline">{roadmap.industry}</Badge>
        </div>
        <p className="text-gray-600 mb-4">{roadmap.description}</p>
        <div className="flex justify-between text-sm text-gray-500">
          <span>{roadmap.steps} career stages</span>
          <span>{roadmap.experienceLevel}</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-0">
        <Button variant={expanded ? "secondary" : "default"} onClick={() => setExpanded(!expanded)}>
          {expanded ? "Hide Details" : "View Roadmap"}
        </Button>
      </CardFooter>

      {expanded && (
        <div className="px-6 pb-6">
          <Accordion type="single" collapsible className="w-full">
            {steps.map((step, index) => (
              <AccordionItem key={index} value={`step-${index}`}>
                <AccordionTrigger className="text-left">
                  <div>
                    <span className="font-medium">{step.title}</span>
                    <span className="text-sm text-gray-500 ml-2">({step.timeframe})</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-3 text-gray-600">{step.description}</p>
                  <div className="mb-2">
                    <span className="text-sm font-medium">Key Skills:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {step.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      )}
    </Card>
  )
}
