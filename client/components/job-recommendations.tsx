import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"

interface JobRecommendation {
  title: string
  company: string
  location: string
  salary: string
  skills: string[]
  matchPercentage: number
  url: string
  postedDate: string
}

interface JobRecommendationsProps {
  skills: string[]
  role: string
}

export default function JobRecommendations({ skills, role }: JobRecommendationsProps) {
  const [recommendations, setRecommendations] = useState<JobRecommendation[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        setLoading(true)
        const response = await fetch('http://localhost:5000/api/jobs/recommendations', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            skills,
            role,
          }),
        })

        if (!response.ok) {
          throw new Error('Failed to fetch job recommendations')
        }

        const data = await response.json()
        setRecommendations(data.recommendations)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    if (skills.length > 0 && role) {
      fetchRecommendations()
    }
  }, [skills, role])

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Job Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-4">Loading job recommendations...</div>
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Job Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-4 text-red-500">{error}</div>
        </CardContent>
      </Card>
    )
  }

  if (recommendations.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Job Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-4">No job recommendations found for your skills and role.</div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Job Recommendations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendations.map((job, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-medium">{job.title}</h3>
                  <p className="text-sm text-gray-500">{job.company} • {job.location}</p>
                </div>
                <Badge variant="outline" className="ml-2">
                  {job.matchPercentage}% Match
                </Badge>
              </div>
              
              <div className="mb-2">
                <p className="text-sm font-medium">Salary: {job.salary}</p>
                <p className="text-sm text-gray-500">Posted: {job.postedDate}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>

              <a
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm text-blue-600 hover:underline"
              >
                View Job
              </a>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 