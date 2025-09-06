"use client"

import type React from "react"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2, Shield } from "lucide-react"

interface ProtectedRouteProps {
  children: React.ReactNode
  fallback?: React.ReactNode
  redirectTo?: string
}

export function ProtectedRoute({ children, fallback, redirectTo = "/login" }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push(redirectTo)
    }
  }, [isAuthenticated, isLoading, router, redirectTo])

  // Show loading state
  if (isLoading) {
    return (
      fallback || (
        <div className="min-h-screen flex items-center justify-center bg-background">
          <Card className="w-full max-w-md mx-auto">
            <CardContent className="flex flex-col items-center justify-center p-8">
              <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
              <h3 className="text-lg font-medium mb-2">Yuklanmoqda...</h3>
              <p className="text-sm text-muted-foreground text-center">Autentifikatsiya holati tekshirilmoqda</p>
            </CardContent>
          </Card>
        </div>
      )
    )
  }

  // Show unauthorized state
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="w-full max-w-md mx-auto">
          <CardContent className="flex flex-col items-center justify-center p-8">
            <Shield className="h-8 w-8 text-destructive mb-4" />
            <h3 className="text-lg font-medium mb-2">Ruxsat berilmagan</h3>
            <p className="text-sm text-muted-foreground text-center">
              Bu sahifaga kirish uchun tizimga kirishingiz kerak
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return <>{children}</>
}
