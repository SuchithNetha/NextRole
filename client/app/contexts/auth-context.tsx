"use client"

import { createContext, useContext, useState, ReactNode, useEffect } from "react"

interface AuthContextType {
  isAuthenticated: boolean
  user: { email: string } | null
  login: (email: string, password: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<{ email: string } | null>(null)

  // Check for existing session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
      setIsAuthenticated(true)
    }
  }, [])

  const login = (email: string, password: string) => {
    // TODO: Implement actual authentication logic
    // For now, we'll just store the user in localStorage
    const userData = { email }
    localStorage.setItem("user", JSON.stringify(userData))
    setUser(userData)
    setIsAuthenticated(true)
  }

  const logout = () => {
    localStorage.removeItem("user")
    setUser(null)
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
} 