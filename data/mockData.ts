export const navigationItems = [
  { title: "Dashboard", icon: "LayoutDashboard", isActive: true },
  { title: "History", icon: "History" },
  { title: "Calendar", icon: "Calendar" },
  { title: "Appointments", icon: "CalendarDays" },
  { title: "Statistics", icon: "BarChart3" },
  { title: "Tests", icon: "TestTube" },
  { title: "Chat", icon: "MessageCircle" },
  { title: "Support", icon: "HeadphonesIcon" },
  { title: "Setting", icon: "Settings" },
]

export const healthIndicators = [
  {
    name: "Healthy Heart",
    position: { top: "25%", left: "45%" },
    color: "bg-red-500",
    status: "healthy",
  },
  {
    name: "Healthy Leg",
    position: { top: "70%", left: "25%" },
    color: "bg-cyan-400",
    status: "healthy",
  },
]

export const healthCards = [
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

export const calendarData = {
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

export const appointments = [
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

export const upcomingSchedule = {
  thursday: [
    { title: "Health checkup complete", time: "11:00 AM", icon: "🏥" },
    { title: "Ophthalmologist", time: "14:00 PM", icon: "👁️" },
  ],
  saturday: [
    { title: "Cardiologist", time: "12:00 AM", icon: "❤️" },
    { title: "Neurologist", time: "16:00 PM", icon: "🧠" },
  ],
}

export const activityData = [
  { day: "Mon", value: 3 },
  { day: "Tues", value: 5 },
  { day: "Wed", value: 2 },
  { day: "Thurs", value: 4 },
  { day: "Fri", value: 6 },
  { day: "Sat", value: 3 },
  { day: "Sun", value: 4 },
]
