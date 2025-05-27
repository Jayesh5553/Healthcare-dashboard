import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const calendarData = {
  month: "October 2021",
  days: [
    { date: 25, day: "Mon", times: ["10:00", "11:00", "12:00"] },
    { date: 26, day: "Tues", times: ["08:00", "09:00", "10:00"] },
    { date: 27, day: "Wed", times: ["12:00", "13:00"] },
    { date: 28, day: "Thurs", times: ["10:00", "11:00"] },
    { date: 29, day: "Fri", times: ["14:00", "16:00"] },
    { date: 30, day: "Sat", times: ["12:00", "14:00", "15:00"] },
    { date: 31, day: "Sun", times: ["09:00", "10:00", "11:00"] },
  ],
}

const appointments = [
  {
    type: "Dentist",
    time: "09:00-11:00",
    doctor: "Dr. Cameron Williamson",
    color: "bg-indigo-600",
  },
  {
    type: "Physiotherapy Appointment",
    time: "11:00-12:00",
    doctor: "Dr. Kevin Djones",
    color: "bg-gray-300",
  },
]

export function CalendarView() {
  return (
    <div className="space-y-4">
      <Card className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">{calendarData.month}</h2>
          <div className="flex space-x-1">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {calendarData.days.map((day, index) => (
            <div key={index} className="text-center">
              <div className="text-xs text-gray-500 mb-1">{day.day}</div>
              <div className="text-lg font-medium mb-2">{day.date}</div>
              <div className="space-y-1">
                {day.times.map((time, timeIndex) => (
                  <div key={timeIndex} className="text-xs bg-gray-100 rounded px-1 py-0.5">
                    {time}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        {appointments.map((appointment, index) => (
          <Card key={index} className={`p-4 text-white ${appointment.color}`}>
            <h3 className="font-medium">{appointment.type}</h3>
            <p className="text-sm opacity-90">{appointment.time}</p>
            <p className="text-sm opacity-90">{appointment.doctor}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}
