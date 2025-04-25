"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Save, Send, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

interface Message {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

const suggestionButtons = [
  "How do I transition to a tech career?",
  "What skills are in demand for data science?",
  "How to prepare for a job interview?",
  "What certifications should I get?",
]

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "👋 Hi there! I'm your career assistant. I can help with career advice, skill recommendations, and job search tips. What would you like to know?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
    }
  }, [messages, isOpen])

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "Thanks for your question! I'm a demo chatbot, so I don't have real responses yet. In a full implementation, I would provide personalized career advice based on your question.",
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion)
    // Optional: automatically send the suggestion
    // setMessages(prev => [...prev, {
    //   id: Date.now().toString(),
    //   content: suggestion,
    //   sender: 'user',
    //   timestamp: new Date(),
    // }])
  }

  const handleSaveChat = () => {
    alert("Chat insights saved! In a real implementation, this would save the conversation to your account.")
  }

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    )
  }

  return (
    <>
      <Card className="fixed bottom-4 right-4 w-96 shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-lg">Chat Assistant</CardTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="absolute right-2 top-2"
          >
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="h-64 overflow-y-auto space-y-2">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-lg ${
                    msg.sender === "user" ? "bg-blue-100 ml-auto" : "bg-gray-100"
                  } max-w-[80%] ${msg.sender === "user" ? "ml-auto" : "mr-auto"}`}
                >
                  {msg.content}
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} className="bg-blue-600 hover:bg-blue-700">
                Send
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
