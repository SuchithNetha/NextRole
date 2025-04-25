"use client"

import { useState, useEffect } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import RoadmapCard from "@/components/roadmap-card"
import ChatWidget from "@/components/chat-widget"
import Header from "@/components/header"
import Link from "next/link"

interface CareerStage {
  title: string;
  description: string;
  timeframe: string;
  experienceLevel: string;
  skills: string[];
}

interface Roadmap {
  id: number;
  title: string;
  description: string;
  industry: string;
  experienceLevel: string;
  careerStages: CareerStage[];
  image: string;
}

export default function RoadmapsPage() {
  const [roadmaps, setRoadmaps] = useState<Roadmap[]>([]);
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoadmaps = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/skills/roadmaps');
        const data = await response.json();
        
        // Transform the data into the format we need
        const formattedRoadmaps = Object.entries(data.skillHierarchy).map(([title, category]: [string, any], index) => ({
          id: index + 1,
          title,
          description: `Career progression for ${title}`,
          industry: category.industry,
          experienceLevel: category.experienceLevel,
          careerStages: category.careerStages || [],
          image: "/placeholder.svg?height=200&width=400",
        }));

        setRoadmaps(formattedRoadmaps);
      } catch (error) {
        console.error('Error fetching roadmaps:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRoadmaps();
  }, []);

  const filteredRoadmaps = roadmaps.filter(roadmap => {
    const industryMatch = selectedIndustry === "all" || roadmap.industry.toLowerCase() === selectedIndustry;
    const levelMatch = selectedLevel === "all" || roadmap.experienceLevel === selectedLevel;
    return industryMatch && levelMatch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Career Roadmaps</h2>
            <p className="text-gray-600">Explore career paths and progression steps across industries</p>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-auto">
              <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
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
              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Experience Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="Beginner">Beginner</SelectItem>
                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                  <SelectItem value="Advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-8">Loading roadmaps...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRoadmaps.map((roadmap) => (
              <RoadmapCard key={roadmap.id} roadmap={roadmap} />
            ))}
          </div>
        )}
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

      <ChatWidget />
    </div>
  )
}
