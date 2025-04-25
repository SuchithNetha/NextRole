import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Check, X } from "lucide-react"

interface JobMatchCardProps {
  job: {
    id: number
    title: string
    company: string
    matchPercentage: number
    location: string
    salary: string
    skills: string[]
    missingSkills: string[]
    url?: string
  }
  userSkills: string[]
}

export default function JobMatchCard({ job, userSkills }: JobMatchCardProps) {
  // Ensure skills and missingSkills are arrays with default empty arrays
  const skills = job.skills || []
  const missingSkills = job.missingSkills || []

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <Badge
                variant={job.matchPercentage >= 85 ? "default" : "secondary"}
                className={job.matchPercentage >= 85 ? "bg-green-600" : ""}
              >
                {job.matchPercentage}% Match
              </Badge>
            </div>
            <p className="text-gray-600 mb-4">
              {job.company} • {job.location}
            </p>

            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Match Percentage</span>
                <span>{job.matchPercentage}%</span>
              </div>
              <Progress 
                value={job.matchPercentage} 
                className="h-2"
                indicatorClassName={job.matchPercentage >= 85 ? "bg-green-600" : ""}
              />
            </div>

            <div className="text-sm text-gray-600 mb-4">
              <span className="font-medium">Salary Range:</span> {job.salary}
            </div>

            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-medium mb-2">Skills You Have</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="flex items-center gap-1">
                      <Check size={12} className="text-green-600" />
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Skills to Develop</h4>
                <div className="flex flex-wrap gap-2">
                  {missingSkills.map((skill) => (
                    <Badge key={skill} variant="outline" className="flex items-center gap-1 border-dashed">
                      <X size={12} className="text-gray-400" />
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-end mt-4 md:mt-0">
            {job.url ? (
              <a href={job.url} target="_blank" rel="noopener noreferrer">
                <Button className="w-full">Apply Now</Button>
              </a>
            ) : (
              <Button className="w-full">Apply Now</Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
