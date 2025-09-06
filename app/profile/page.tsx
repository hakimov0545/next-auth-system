import { ProtectedRoute } from "@/components/auth/protected-route"
import { ProfileSettings } from "@/components/dashboard/profile-settings"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Bell } from "lucide-react"

export default function ProfilePage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Profil sozlamalari</h1>
            <p className="text-muted-foreground">Hisobingiz va xavfsizlik sozlamalarini boshqaring</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <ProfileSettings />

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5" />
                    <span>Xavfsizlik</span>
                  </CardTitle>
                  <CardDescription>Hisobingiz xavfsizligi sozlamalari</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Ikki bosqichli autentifikatsiya</p>
                      <p className="text-sm text-muted-foreground">Qo'shimcha xavfsizlik qatlami</p>
                    </div>
                    <Badge variant="outline">O'chirilgan</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Parol kuchi</p>
                      <p className="text-sm text-muted-foreground">Joriy parol xavfsizligi</p>
                    </div>
                    <Badge variant="secondary">Kuchli</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bell className="h-5 w-5" />
                    <span>Bildirishnomalar</span>
                  </CardTitle>
                  <CardDescription>Email va push bildirishnomalar</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Email bildirishnomalar</p>
                      <p className="text-sm text-muted-foreground">Muhim yangiliklar</p>
                    </div>
                    <Badge variant="secondary">Yoqilgan</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Xavfsizlik ogohlantirishlari</p>
                      <p className="text-sm text-muted-foreground">Shubhali faoliyat</p>
                    </div>
                    <Badge variant="secondary">Yoqilgan</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}
