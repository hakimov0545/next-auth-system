"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Users, Shield, Clock } from "lucide-react"

const stats = [
  {
    title: "Jami sessiyalar",
    value: "24",
    description: "So'nggi 30 kun",
    icon: Activity,
    trend: "+12%",
  },
  {
    title: "Faol vaqt",
    value: "2.4h",
    description: "Bugungi kun",
    icon: Clock,
    trend: "+5%",
  },
  {
    title: "Xavfsizlik darajasi",
    value: "98%",
    description: "Barcha tekshiruvlar",
    icon: Shield,
    trend: "Stabil",
  },
  {
    title: "Profil to'ldirilganligi",
    value: "85%",
    description: "Ma'lumotlar to'liq",
    icon: Users,
    trend: "+15%",
  },
]

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
              <div className="text-xs text-green-600 mt-1">{stat.trend}</div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
