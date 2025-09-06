"use client"

import type React from "react"
import { useAuthRedirect } from "@/hooks/use-auth-redirect"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2 } from "lucide-react"

interface RouteGuardProps {
  children: React.ReactNode
  requireAuth?: boolean
  redirectIfAuthenticated?: boolean
  redirectTo?: string
  fallback?: React.ReactNode
}

export function RouteGuard({
  children,
  requireAuth = false,
  redirectIfAuthenticated = false,
  redirectTo = "/login",
  fallback,
}: RouteGuardProps) {
  const { isLoading } = useAuthRedirect({
    requireAuth,
    redirectIfAuthenticated,
    redirectTo,
  })

  if (isLoading) {
    return (
      fallback || (
        <div className="min-h-screen flex items-center justify-center bg-background">
          <Card className="w-full max-w-md mx-auto">
            <CardContent className="flex flex-col items-center justify-center p-8">
              <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
              <h3 className="text-lg font-medium mb-2">Yuklanmoqda...</h3>
              <p className="text-sm text-muted-foreground text-center">Sahifa tayyorlanmoqda...</p>
            </CardContent>
          </Card>
        </div>
      )
    )
  }

  return <>{children}</>
}
