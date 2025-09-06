import { RegisterForm } from "@/components/auth/register-form"
import { RouteGuard } from "@/components/auth/route-guard"

export default function RegisterPage() {
  return (
    <RouteGuard redirectIfAuthenticated={true}>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Hisob yarating</h1>
            <p className="text-muted-foreground">Next.js Authentication System</p>
          </div>
          <RegisterForm />
        </div>
      </div>
    </RouteGuard>
  )
}
