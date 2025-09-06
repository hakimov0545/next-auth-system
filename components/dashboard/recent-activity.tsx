"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LogIn, Settings, User, Shield } from "lucide-react"

const activities = [
  {
    id: 1,
    action: "Tizimga kirish",
    description: "Muvaffaqiyatli login",
    time: "2 daqiqa oldin",
    icon: LogIn,
    status: "success",
  },
  {
    id: 2,
    action: "Profil yangilandi",
    description: "Ism va email o'zgartirildi",
    time: "1 soat oldin",
    icon: User,
    status: "info",
  },
  {
    id: 3,
    action: "Sozlamalar o'zgartirildi",
    description: "Xavfsizlik sozlamalari",
    time: "3 soat oldin",
    icon: Settings,
    status: "warning",
  },
  {
    id: 4,
    action: "Xavfsizlik tekshiruvi",
    description: "Barcha tekshiruvlar muvaffaqiyatli",
    time: "1 kun oldin",
    icon: Shield,
    status: "success",
  },
]

const statusColors = {
  success: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  info: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
}

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>So'nggi faoliyat</CardTitle>
        <CardDescription>Hisobingizdagi so'nggi harakatlar</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = activity.icon
            return (
              <div key={activity.id} className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                    <Icon className="h-4 w-4" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                </div>
                <div className="flex-shrink-0 text-right">
                  <Badge variant="secondary" className={statusColors[activity.status]}>
                    {activity.time}
                  </Badge>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
