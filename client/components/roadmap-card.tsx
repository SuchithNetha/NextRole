"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

interface CareerStage {
  title: string;
  description: string;
  timeframe: string;
  experienceLevel: string;
  skills: string[];
}

interface RoadmapCardProps {
  roadmap: {
    id: number;
    title: string;
    description: string;
    industry: string;
    experienceLevel: string;
    careerStages: CareerStage[];
    image: string;
  }
}

interface RoadmapItem {
  skill: string;
  description: string;
}

interface RoadmapProps {
  title: string;
  beginner: RoadmapItem[];
  intermediate: RoadmapItem[];
  advanced: RoadmapItem[];
}

export default function RoadmapCard({ roadmap }: RoadmapCardProps) {
  const [expanded, setExpanded] = useState(false)

  // Filter career stages based on experience level
  const filteredStages = roadmap.careerStages.filter(stage => {
    if (roadmap.experienceLevel === "All Levels") return true;
    if (roadmap.experienceLevel === "Beginner") return stage.experienceLevel === "Beginner";
    if (roadmap.experienceLevel === "Intermediate") 
      return ["Beginner", "Intermediate"].includes(stage.experienceLevel);
    if (roadmap.experienceLevel === "Advanced")
      return ["Intermediate", "Advanced"].includes(stage.experienceLevel);
    return true;
  });

  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image src={roadmap.image || "/placeholder.svg"} alt={roadmap.title} fill className="object-cover" />
      </div>
      <CardContent className="pt-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{roadmap.title}</h3>
          <div className="flex gap-2">
            <Badge variant="outline">{roadmap.industry}</Badge>
            <Badge variant="secondary">{roadmap.experienceLevel}</Badge>
          </div>
        </div>
        <p className="text-gray-600 mb-4">{roadmap.description}</p>
        <div className="flex justify-between text-sm text-gray-500">
          <span>{filteredStages.length} career stages</span>
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
            {filteredStages.map((stage, index) => (
              <AccordionItem key={index} value={`stage-${index}`}>
                <AccordionTrigger className="text-left">
                  <div>
                    <span className="font-medium">{stage.title}</span>
                    <span className="text-sm text-gray-500 ml-2">({stage.timeframe})</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-3 text-gray-600">{stage.description}</p>
                  <div className="mb-2">
                    <span className="text-sm font-medium">Key Skills:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {stage.skills.map((skill, skillIndex) => (
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

export function CareerRoadmapCard({ title, beginner, intermediate, advanced }: RoadmapProps) {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>{title} Roadmap</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Beginner Level</h3>
            <div className="space-y-2">
              {beginner.map((item, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium">{item.skill}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Intermediate Level</h3>
            <div className="space-y-2">
              {intermediate.map((item, index) => (
                <div key={index} className="p-3 bg-blue-50 rounded-lg">
                  <h4 className="font-medium">{item.skill}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Advanced Level</h3>
            <div className="space-y-2">
              {advanced.map((item, index) => (
                <div key={index} className="p-3 bg-purple-50 rounded-lg">
                  <h4 className="font-medium">{item.skill}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
