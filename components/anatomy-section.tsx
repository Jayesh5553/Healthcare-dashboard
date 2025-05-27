import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const healthIndicators = [
  {
    name: "Healthy Heart",
    position: { top: "25%", left: "45%" },
    color: "bg-red-500",
  },
  {
    name: "Healthy Leg",
    position: { top: "70%", left: "25%" },
    color: "bg-cyan-400",
  },
]

export function AnatomySection() {
  return (
    <Card className="relative p-6 bg-white">
      <Button variant="ghost" size="icon" className="absolute top-4 right-4 text-gray-400">
        <Search className="h-4 w-4" />
      </Button>

      <div className="relative mx-auto w-64">
        <img src="/images/anatomy.png" alt="Human anatomy" className="w-full h-auto" />

        {healthIndicators.map((indicator, index) => (
          <div key={index} className="absolute transform -translate-x-1/2 -translate-y-1/2" style={indicator.position}>
            <div className={`w-3 h-3 rounded-full ${indicator.color}`} />
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              <div className={`px-3 py-1 rounded-full text-white text-xs ${indicator.color}`}>{indicator.name}</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
