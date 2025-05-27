import { Search, Bell, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold">
          
        </h1>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input placeholder="Search" className="w-80 pl-10 bg-gray-50 border-0" />
        </div>

        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>

        <Avatar className="h-10 w-10">
          <AvatarImage src="/placeholder.svg?height=40&width=40" />
          <AvatarFallback className="bg-cyan-400 text-white">JD</AvatarFallback>
        </Avatar>

        <Button size="icon" className="bg-indigo-600 hover:bg-indigo-700">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </header>
  )
}
