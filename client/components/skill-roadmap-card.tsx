import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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

export default function SkillRoadmapCard({ title, beginner, intermediate, advanced }: RoadmapProps) {
  if (!beginner || !intermediate || !advanced) {
    return (
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{title} Roadmap</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-gray-500">
            No roadmap available for this category yet.
          </div>
        </CardContent>
      </Card>
    );
  }

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