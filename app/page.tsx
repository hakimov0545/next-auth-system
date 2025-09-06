import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Users, Lock, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Next.js Authentication System
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Frontend-only authentication tizimi. React Context, TypeScript va modern UI komponentlar bilan yaratilgan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/login">Tizimga kirish</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/register">Ro'yxatdan o'tish</Link>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card>
            <CardHeader>
              <Shield className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Xavfsiz</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>LocalStorage va React Context orqali xavfsiz session boshqaruvi</CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-primary mb-2" />
              <CardTitle>User Management</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>To'liq user profil boshqaruvi va ma'lumotlarni yangilash</CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Lock className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Protected Routes</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Middleware orqali himoyalangan sahifalar va yo'nalishlar</CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Zap className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Modern Stack</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Next.js 14, TypeScript, Tailwind CSS va shadcn/ui</CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Demo Credentials */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Demo hisoblar</CardTitle>
            <CardDescription>Tizimni sinab ko'rish uchun quyidagi hisoblardan foydalaning</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-medium mb-2">Admin User</h4>
                <p className="text-sm text-muted-foreground">Email: admin@example.com</p>
                <p className="text-sm text-muted-foreground">Parol: password</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-medium mb-2">Regular User</h4>
                <p className="text-sm text-muted-foreground">Email: user@example.com</p>
                <p className="text-sm text-muted-foreground">Parol: password</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
