import type { Metadata } from 'next'
import './globals.css'
import { AuthProvider } from './contexts/auth-context'

export const metadata: Metadata = {
  title: 'Career Path Navigator',
  description: 'Navigate your career journey with personalized roadmaps and skill matching',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
