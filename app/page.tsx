import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Header } from "@/components/header"
import { AnatomySection } from "@/components/anatomy-section"
import { HealthStatusCards } from "@/components/health-status-cards"
import { CalendarView } from "@/components/calendar-view"
import { UpcomingSchedule } from "@/components/upcoming-schedule"
import { ActivityFeed } from "@/components/activity-feed"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Dashboard() {
  return (
    <SidebarProvider>
      <div className="flex h-screen bg-gray-50">
        <AppSidebar />
        <SidebarInset className="flex-1 flex flex-col">
          <Header />

          <main className="flex-1 p-6">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <Button variant="outline" className="text-sm">
                This Week
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column - Anatomy */}
              <div className="lg:col-span-1">
                <AnatomySection />
              </div>

              {/* Middle Column - Health Cards */}
              <div className="lg:col-span-1">
                <HealthStatusCards />
              </div>

              {/* Right Column - Calendar */}
              <div className="lg:col-span-1">
                <CalendarView />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              {/* Bottom Left - Upcoming Schedule */}
              <UpcomingSchedule />

              {/* Bottom Right - Activity */}
              <ActivityFeed />
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
