"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"

interface UseAuthRedirectOptions {
  redirectTo?: string
  requireAuth?: boolean
  redirectIfAuthenticated?: boolean
}

export function useAuthRedirect({
  redirectTo = "/login",
  requireAuth = false,
  redirectIfAuthenticated = false,
}: UseAuthRedirectOptions = {}) {
  const { isAuthenticated, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (isLoading) return

    // Redirect if authentication is required but user is not authenticated
    if (requireAuth && !isAuthenticated) {
      router.push(redirectTo)
      return
    }

    // Redirect if user is authenticated but shouldn't be on this page
    if (redirectIfAuthenticated && isAuthenticated) {
      router.push("/dashboard")
      return
    }
  }, [isAuthenticated, isLoading, requireAuth, redirectIfAuthenticated, redirectTo, router])

  return { isAuthenticated, isLoading }
}
