import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const healthCards = [
  {
    organ: "Lungs",
    date: "Date: 24 Oct 2021",
    status: 85,
    color: "bg-red-100",
    iconColor: "text-red-500",
  },
  {
    organ: "Teeth",
    date: "Date: 26 Oct 2021",
    status: 90,
    color: "bg-green-100",
    iconColor: "text-green-500",
  },
  {
    organ: "Bone",
    date: "Date: 26 Oct 2021",
    status: 75,
    color: "bg-orange-100",
    iconColor: "text-orange-500",
  },
]

export function HealthStatusCards() {
  return (
    <div className="space-y-4">
      {healthCards.map((card, index) => (
        <Card key={index} className="p-4">
          <div className="flex items-center space-x-3 mb-3">
            <div className={`w-10 h-10 rounded-lg ${card.color} flex items-center justify-center`}>
              <span className={`text-lg ${card.iconColor}`}>
                {card.organ === "Lungs" && "🫁"}
                {card.organ === "Teeth" && "🦷"}
                {card.organ === "Bone" && "🦴"}
              </span>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">{card.organ}</h3>
              <p className="text-sm text-gray-500">{card.date}</p>
            </div>
          </div>
          <Progress value={card.status} className="h-2" />
        </Card>
      ))}
    </div>
  )
}
