"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { X } from "lucide-react"

// Mock data for skill suggestions
const skillSuggestions = [
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  "Vue.js",
  "Node.js",
  "Express",
  "Python",
  "Django",
  "Flask",
  "Java",
  "Spring Boot",
  "C#",
  ".NET",
  "PHP",
  "Laravel",
  "Ruby",
  "Ruby on Rails",
  "Go",
  "Rust",
  "HTML",
  "CSS",
  "SASS",
  "LESS",
  "Tailwind CSS",
  "Bootstrap",
  "GraphQL",
  "REST API",
  "SQL",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Redis",
  "AWS",
  "Azure",
  "Google Cloud",
  "Docker",
  "Kubernetes",
  "CI/CD",
  "Git",
  "GitHub",
  "GitLab",
  "Bitbucket",
  "Jira",
  "Confluence",
  "Agile",
  "Scrum",
  "Kanban",
  "TDD",
  "BDD",
  "Unit Testing",
  "Figma",
  "Sketch",
  "Adobe XD",
  "Photoshop",
  "Illustrator",
  "Product Management",
  "Project Management",
  "Technical Writing",
  "Machine Learning",
  "Data Science",
  "AI",
  "Big Data",
  "Data Analysis",
  "SEO",
  "Digital Marketing",
  "Content Strategy",
  "UX/UI Design",
]

interface SkillInputProps {
  selectedSkills: string[]
  onAddSkill: (skill: string) => void
  onRemoveSkill: (skill: string) => void
}

export default function SkillInput({ selectedSkills = [], onAddSkill, onRemoveSkill }: SkillInputProps) {
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  // Ensure selectedSkills is an array
  const skills = Array.isArray(selectedSkills) ? selectedSkills : []

  // Filter suggestions based on input and already selected skills
  const filteredSuggestions = skillSuggestions
    .filter((skill) => skill.toLowerCase().includes(inputValue.toLowerCase()) && !skills.includes(skill))
    .slice(0, 5) // Limit to 5 suggestions

  const handleSelect = (skill: string) => {
    onAddSkill(skill)
    setInputValue("")
    setOpen(false)
    inputRef.current?.focus()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && inputValue && !filteredSuggestions.includes(inputValue)) {
      e.preventDefault()
      onAddSkill(inputValue)
      setInputValue("")
    }
  }

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-2 mb-3">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary" className="px-3 py-1.5 text-sm">
            {skill}
            <button
              type="button"
              onClick={() => onRemoveSkill(skill)}
              className="ml-2 text-gray-500 hover:text-gray-700"
            >
              <X size={14} />
              <span className="sr-only">Remove {skill}</span>
            </button>
          </Badge>
        ))}
      </div>

      <Command className="rounded-lg border shadow-md">
        <CommandInput
          ref={inputRef}
          placeholder="Type a skill (e.g., JavaScript, React, Python)..."
          value={inputValue}
          onValueChange={setInputValue}
          onKeyDown={handleKeyDown}
          onFocus={() => setOpen(true)}
          className="text-base"
        />
        {open && (
          <CommandList>
            <CommandEmpty>No matching skills found. Press Enter to add.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              {filteredSuggestions.map((skill) => (
                <CommandItem key={skill} value={skill} onSelect={() => handleSelect(skill)}>
                  {skill}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        )}
      </Command>
    </div>
  )
}
