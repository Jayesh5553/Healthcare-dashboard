import { Card } from "@/components/ui/card"

const activityData = [
  { day: "Mon", value: 3 },
  { day: "Tues", value: 5 },
  { day: "Wed", value: 2 },
  { day: "Thurs", value: 4 },
  { day: "Fri", value: 6 },
  { day: "Sat", value: 3 },
  { day: "Sun", value: 4 },
]

export function ActivityFeed() {
  const maxValue = Math.max(...activityData.map((d) => d.value))

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Activity</h2>
        <p className="text-sm text-gray-500">3 appointments on this week</p>
      </div>

      <div className="flex items-end justify-between h-32 space-x-2">
        {activityData.map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <div className="flex items-end h-24">
              <div className="w-6 bg-cyan-400 rounded-t" style={{ height: `${(item.value / maxValue) * 100}%` }} />
            </div>
            <span className="text-xs text-gray-500">{item.day}</span>
          </div>
        ))}
      </div>
    </Card>
  )
}
