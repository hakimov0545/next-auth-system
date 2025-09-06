import { ProtectedRoute } from "@/components/auth/protected-route"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { StatsCards } from "@/components/dashboard/stats-cards"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { ProfileSettings } from "@/components/dashboard/profile-settings"

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <DashboardHeader />
          <StatsCards />

          <div className="grid gap-6 md:grid-cols-2">
            <RecentActivity />
            <ProfileSettings />
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}
