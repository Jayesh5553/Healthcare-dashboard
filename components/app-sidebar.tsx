import {
  LayoutDashboard,
  History,
  Calendar,
  CalendarDays,
  BarChart3,
  TestTube,
  MessageCircle,
  Headphones,
  Settings,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const navigationItems = [
  { title: "Dashboard", icon: LayoutDashboard, isActive: true },
  { title: "History", icon: History },
  { title: "Calendar", icon: Calendar },
  { title: "Appointments", icon: CalendarDays },
  { title: "Statistics", icon: BarChart3 },
  { title: "Tests", icon: TestTube },
  { title: "Chat", icon: MessageCircle },
  { title: "Support", icon: Headphones },
  { title: "Setting", icon: Settings },
]

export function AppSidebar() {
  return (
    <Sidebar className="border-r">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel> <span className="text-cyan-400">Health</span>
          <span className="text-gray-900">care.</span></SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.isActive} className="w-full justify-start">
                    <a href="#" className="flex items-center space-x-3">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
