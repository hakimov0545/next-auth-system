"use client"

// Auth utility functions for client-side route protection

export const AUTH_ROUTES = ["/login", "/register"]
export const PUBLIC_ROUTES = ["/", "/login", "/register"]
export const PROTECTED_ROUTES = ["/dashboard", "/profile", "/settings"]

export function isPublicRoute(pathname: string): boolean {
  return PUBLIC_ROUTES.includes(pathname)
}

export function isAuthRoute(pathname: string): boolean {
  return AUTH_ROUTES.includes(pathname)
}

export function isProtectedRoute(pathname: string): boolean {
  return PROTECTED_ROUTES.some((route) => pathname.startsWith(route))
}

export function getRedirectPath(pathname: string, isAuthenticated: boolean): string | null {
  // Redirect authenticated users away from auth pages
  if (isAuthenticated && isAuthRoute(pathname)) {
    return "/dashboard"
  }

  // Redirect unauthenticated users to login for protected routes
  if (!isAuthenticated && isProtectedRoute(pathname)) {
    return "/login"
  }

  return null
}
