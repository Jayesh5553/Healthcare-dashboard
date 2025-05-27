import { Card } from "@/components/ui/card"

const upcomingSchedule = {
  thursday: [
    { title: "Health checkup complete", time: "11:00 AM", icon: "🏥" },
    { title: "Ophthalmologist", time: "14:00 PM", icon: "👁️" },
  ],
  saturday: [
    { title: "Cardiologist", time: "12:00 AM", icon: "❤️" },
    { title: "Neurologist", time: "16:00 PM", icon: "🧠" },
  ],
}

export function UpcomingSchedule() {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-6">The Upcoming Schedule</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-gray-500 text-sm mb-3">On Thursday</h3>
          <div className="grid grid-cols-2 gap-3">
            {upcomingSchedule.thursday.map((item, index) => (
              <Card key={index} className="p-3 bg-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-sm">{item.title}</p>
                    <p className="text-gray-500 text-xs">{item.time}</p>
                  </div>
                  <span className="text-lg">{item.icon}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-gray-500 text-sm mb-3">On Saturday</h3>
          <div className="grid grid-cols-2 gap-3">
            {upcomingSchedule.saturday.map((item, index) => (
              <Card key={index} className="p-3 bg-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-sm">{item.title}</p>
                    <p className="text-gray-500 text-xs">{item.time}</p>
                  </div>
                  <span className="text-lg">{item.icon}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}
