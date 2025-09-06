"use client"

import { useState } from "react"
import { useAuth } from "@/contexts/auth-context"
import { useToast } from "@/hooks/use-toast"

interface LoginFormData {
  email: string
  password: string
}

interface RegisterFormData {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export function useAuthForm() {
  const { login, register } = useAuth()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleLogin = async (data: LoginFormData) => {
    setIsSubmitting(true)
    try {
      await login(data.email, data.password)
      toast({
        title: "Muvaffaqiyatli kirish",
        description: "Siz muvaffaqiyatli tizimga kirdingiz",
      })
    } catch (error) {
      toast({
        title: "Xatolik",
        description: error instanceof Error ? error.message : "Login xatoligi",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleRegister = async (data: RegisterFormData) => {
    if (data.password !== data.confirmPassword) {
      toast({
        title: "Xatolik",
        description: "Parollar mos kelmaydi",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)
    try {
      await register(data.name, data.email, data.password)
      toast({
        title: "Muvaffaqiyatli ro'yxatdan o'tish",
        description: "Hisobingiz yaratildi va tizimga kirdingiz",
      })
    } catch (error) {
      toast({
        title: "Xatolik",
        description: error instanceof Error ? error.message : "Ro'yxatdan o'tish xatoligi",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    handleLogin,
    handleRegister,
    isSubmitting,
  }
}
