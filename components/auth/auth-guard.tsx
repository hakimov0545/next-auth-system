"use client"

import type React from "react"
import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"

interface AuthGuardProps {
  children: React.ReactNode
}

// Public routes that don't require authentication
const PUBLIC_ROUTES = ["/", "/login", "/register"]

// Routes that should redirect authenticated users
const AUTH_ROUTES = ["/login", "/register"]

export function AuthGuard({ children }: AuthGuardProps) {
  const { isAuthenticated, isLoading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (isLoading) return

    // Redirect authenticated users away from auth pages
    if (isAuthenticated && AUTH_ROUTES.includes(pathname)) {
      router.push("/dashboard")
      return
    }

    // Redirect unauthenticated users to login for protected routes
    if (!isAuthenticated && !PUBLIC_ROUTES.includes(pathname)) {
      router.push("/login")
      return
    }
  }, [isAuthenticated, isLoading, pathname, router])

  return <>{children}</>
}
