"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import SkillInput from "@/components/skill-input"
import JobMatchCard from "@/components/job-match-card"
import ChatWidget from "@/components/chat-widget"
import Header from "@/components/header"
import Link from "next/link"
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import SkillRoadmapCard from "@/components/skill-roadmap-card"
import JobRecommendations from "@/components/job-recommendations"
import { Badge } from "@/components/ui/badge"

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

interface SkillAnalysis {
  domains: {
    domain: string;
    baseMatchPercentage: number;
    advancedMatchPercentage: number;
    matchingSkills: string[];
    missingSkills: string[];
  }[];
  combinations: {
    name: string;
    matchPercentage: number;
    matchingSkills: string[];
    missingSkills: string[];
    roles: string[];
    path: string;
  }[];
  recommendations: {
    type: 'domain' | 'combination';
    name: string;
    matchPercentage: number;
    roles: string[];
    path: string;
  }[];
}

interface Recommendation {
  title: string;
  description: string;
  skills: string[];
}

interface JobMatch {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  matchPercentage: number;
  skills: string[];
  missingSkills: string[];
  analysis?: {
    recommendations: Recommendation[];
  };
}

interface JobMatchResponse {
  matches: JobMatch[];
  analysis: SkillAnalysis;
}

interface RoadmapItem {
  skill: string;
  description: string;
}

interface Roadmap {
  beginner: RoadmapItem[];
  intermediate: RoadmapItem[];
  advanced: RoadmapItem[];
}

interface SkillCategory {
  baseSkills: string[];
  advancedSkills: string[];
  roles: string[];
  roadmap: Roadmap;
}

interface SkillHierarchy {
  [key: string]: SkillCategory;
}

// Mock data for skill hierarchy
const skillHierarchy: SkillHierarchy = {
  "Frontend": {
    baseSkills: ["HTML", "CSS", "JavaScript"],
    advancedSkills: ["React", "TypeScript", "Next.js"],
    roles: ["Frontend Developer", "UI Developer", "Web Developer"],
    roadmap: {
      beginner: [
        { skill: "HTML", description: "Learn HTML5 fundamentals and semantic markup" },
        { skill: "CSS", description: "Master CSS3, Flexbox, and Grid layout" },
        { skill: "JavaScript", description: "Understand JavaScript basics and DOM manipulation" }
      ],
      intermediate: [
        { skill: "React", description: "Learn React fundamentals and component architecture" },
        { skill: "TypeScript", description: "Add type safety to your JavaScript code" },
        { skill: "Next.js", description: "Build full-stack applications with React" }
      ],
      advanced: [
        { skill: "State Management", description: "Learn Redux or Context API" },
        { skill: "Testing", description: "Master Jest and React Testing Library" },
        { skill: "Performance", description: "Optimize web applications" }
      ]
    }
  },
  "Backend": {
    baseSkills: ["Node.js", "Express", "MongoDB"],
    advancedSkills: ["Python", "Java", "SQL"],
    roles: ["Backend Developer", "API Developer", "Server Developer"],
    roadmap: {
      beginner: [
        { skill: "Node.js", description: "Learn Node.js fundamentals" },
        { skill: "Express", description: "Build RESTful APIs with Express" },
        { skill: "MongoDB", description: "Master NoSQL database concepts" }
      ],
      intermediate: [
        { skill: "Python", description: "Learn Python for backend development" },
        { skill: "Java", description: "Understand Java Spring framework" },
        { skill: "SQL", description: "Master relational database design" }
      ],
      advanced: [
        { skill: "Microservices", description: "Design and implement microservices" },
        { skill: "Security", description: "Implement authentication and authorization" },
        { skill: "Scaling", description: "Learn horizontal and vertical scaling" }
      ]
    }
  },
  "Full Stack": {
    baseSkills: ["JavaScript", "Node.js", "React"],
    advancedSkills: ["MongoDB", "Express", "TypeScript"],
    roles: ["Full Stack Developer", "Web Developer", "Software Engineer"],
    roadmap: {
      beginner: [
        { skill: "Frontend Basics", description: "HTML, CSS, JavaScript fundamentals" },
        { skill: "Backend Basics", description: "Node.js and Express fundamentals" },
        { skill: "Database", description: "MongoDB and SQL basics" }
      ],
      intermediate: [
        { skill: "React", description: "Build interactive UIs with React" },
        { skill: "API Design", description: "Design and implement RESTful APIs" },
        { skill: "TypeScript", description: "Add type safety to your stack" }
      ],
      advanced: [
        { skill: "DevOps", description: "Learn CI/CD and deployment" },
        { skill: "Architecture", description: "Design scalable applications" },
        { skill: "Testing", description: "Implement end-to-end testing" }
      ]
    }
  },
  "DevOps": {
    baseSkills: ["Linux", "Docker", "Git"],
    advancedSkills: ["AWS", "Kubernetes", "CI/CD"],
    roles: ["DevOps Engineer", "Cloud Engineer", "Site Reliability Engineer"],
    roadmap: {
      beginner: [
        { skill: "Linux", description: "Master Linux command line" },
        { skill: "Docker", description: "Learn containerization basics" },
        { skill: "Git", description: "Understand version control" }
      ],
      intermediate: [
        { skill: "AWS", description: "Learn cloud infrastructure" },
        { skill: "Kubernetes", description: "Master container orchestration" },
        { skill: "CI/CD", description: "Implement continuous integration" }
      ],
      advanced: [
        { skill: "Infrastructure as Code", description: "Learn Terraform or CloudFormation" },
        { skill: "Monitoring", description: "Implement logging and monitoring" },
        { skill: "Security", description: "Master cloud security practices" }
      ]
    }
  },
  "Data Science": {
    baseSkills: ["Python", "Pandas", "NumPy"],
    advancedSkills: ["Machine Learning", "TensorFlow", "SQL"],
    roles: ["Data Scientist", "Data Analyst", "Machine Learning Engineer"],
    roadmap: {
      beginner: [
        { skill: "Python", description: "Learn Python programming" },
        { skill: "Pandas", description: "Master data manipulation" },
        { skill: "NumPy", description: "Understand numerical computing" }
      ],
      intermediate: [
        { skill: "Machine Learning", description: "Learn ML fundamentals" },
        { skill: "TensorFlow", description: "Build neural networks" },
        { skill: "SQL", description: "Master database queries" }
      ],
      advanced: [
        { skill: "Deep Learning", description: "Advanced neural networks" },
        { skill: "Big Data", description: "Work with large datasets" },
        { skill: "Deployment", description: "Deploy ML models" }
      ]
    }
  },
  "Mobile": {
    baseSkills: ["JavaScript", "React Native", "Flutter"],
    advancedSkills: ["iOS", "Android", "Dart"],
    roles: ["Mobile Developer", "React Native Developer", "Flutter Developer"],
    roadmap: {
      beginner: [
        { skill: "JavaScript", description: "Learn JavaScript fundamentals" },
        { skill: "React Native", description: "Build cross-platform apps" },
        { skill: "Flutter", description: "Create beautiful UIs with Flutter" }
      ],
      intermediate: [
        { skill: "iOS", description: "Learn Swift and iOS development" },
        { skill: "Android", description: "Master Kotlin and Android" },
        { skill: "Dart", description: "Understand Flutter's language" }
      ],
      advanced: [
        { skill: "Performance", description: "Optimize mobile apps" },
        { skill: "Testing", description: "Implement mobile testing" },
        { skill: "Publishing", description: "Deploy to app stores" }
      ]
    }
  }
};

export default function SkillsMatching() {
  const [skills, setSkills] = useState('')
  const [selectedRole, setSelectedRole] = useState('')
  const [results, setResults] = useState<JobMatchResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async () => {
    if (!skills.trim()) {
      alert('Please enter at least one skill');
      return;
    }

    try {
      setLoading(true);
      const skillsArray = skills.split(',')
        .map(skill => skill.trim())
        .filter(skill => skill.length > 0);

      // Get the token from localStorage
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Please log in to use this feature');
      }

      console.log('Sending skills:', skillsArray); // Debug log

      const response = await fetch('http://localhost:5000/api/skills/job-matches', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ skills: skillsArray })
      });

      console.log('Response status:', response.status); // Debug log

      if (!response.ok) {
        if (response.status === 401) {
          // Handle authentication error
          localStorage.removeItem('token'); // Clear invalid token
          router.push('/login'); // Redirect to login
          throw new Error('Please log in again to continue');
        }
        const errorData = await response.json().catch(() => ({ error: 'Failed to parse error response' }));
        console.error('Error response:', errorData); // Debug log
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Received data:', data); // Debug log
      setResults(data);
    } catch (error: unknown) {
      console.error('Error details:', error); // Debug log
      if (error instanceof Error) {
        alert(error.message || 'Failed to get job matches. Please try again.');
        if (error.message.includes('Please log in')) {
          router.push('/login');
        }
      } else {
        alert('Failed to get job matches. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

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
                <div className="space-y-4">
                  <SkillInput
                    selectedSkills={skills.split(',').map(skill => skill.trim())}
                    onAddSkill={(skill) => setSkills(prevSkills => prevSkills + ',' + skill)}
                    onRemoveSkill={(skill) => setSkills(prevSkills => prevSkills.replace(',' + skill, ''))}
                  />
                  <div className="flex justify-end">
                    <Button 
                      onClick={handleSubmit}
                      disabled={!skills.trim()}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      {loading ? 'Matching...' : 'Match Jobs'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {results && (
              <>
                <h3 className="text-xl font-semibold mb-4">Job Matches</h3>
                <div className="space-y-4">
                  {results.matches.map((job: JobMatch, index: number) => (
                    <JobMatchCard 
                      key={index} 
                      job={job} 
                      userSkills={skills.split(',').map(skill => skill.trim())}
                    />
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-4 mt-8">Career Path Analysis</h3>
                <div className="space-y-6">
                  {results.analysis.domains.map((domain, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium mb-2">{domain.domain}</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Base Skills Match: {Math.round(domain.baseMatchPercentage)}% | 
                        Advanced Skills Match: {Math.round(domain.advancedMatchPercentage)}%
                      </p>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Matching Skills:</p>
                        <div className="flex flex-wrap gap-2">
                          {domain.matchingSkills.map((skill, i) => (
                            <Badge key={i} variant="secondary">{skill}</Badge>
                          ))}
                        </div>
                        <p className="text-sm font-medium">Missing Skills:</p>
                        <div className="flex flex-wrap gap-2">
                          {domain.missingSkills.map((skill, i) => (
                            <Badge key={i} variant="outline">{skill}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-4 mt-8">Career Path Roadmaps</h3>
                <div className="space-y-6">
                  {Object.entries(skillHierarchy).map(([category, data]) => (
                    <SkillRoadmapCard
                      key={category}
                      title={category}
                      beginner={data.roadmap.beginner}
                      intermediate={data.roadmap.intermediate}
                      advanced={data.roadmap.advanced}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Skills to Add</h3>
                <p className="text-gray-600 mb-4">These in-demand skills will increase your job match percentage</p>
                <div className="space-y-4">
                  {highValueSkills.map((skill) => (
                    <div key={skill.name} className="border rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">{skill.name}</h4>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSkills(prevSkills => prevSkills + ',' + skill.name)}
                          disabled={skills.split(',').includes(skill.name)}
                        >
                          {skills.split(',').includes(skill.name) ? "Added" : "Add"}
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

            {skills && (
              <JobRecommendations
                skills={skills.split(',').map(skill => skill.trim())}
                role={selectedRole}
              />
            )}
          </div>
        </div>

        <Button 
          variant="outline" 
          onClick={() => router.push('/main-menu')}
          className="w-full mt-4"
        >
          Back to Home
        </Button>
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
