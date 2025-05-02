"use client"

import { useState } from "react"
import { Home, Calendar, PlusCircle } from "lucide-react"
import Dashboard from "@/components/screens/dashboard"
import RunLogger from "@/components/screens/run-logger"
import CalendarTracker from "@/components/screens/calendar-tracker"
import TodaysRun from "@/components/screens/todays-run"
import ViewRun from "@/components/screens/view-run"
import NoActivity from "@/components/screens/no-activity"

// Update the mobile app container to use a blue background similar to the screenshot
export default function MobileApp() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [activeScreen, setActiveScreen] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState<string | null>(null)

  const handleNavigate = (screen: string) => {
    setActiveScreen(screen)
  }

  const handleBack = () => {
    setActiveScreen(null)
    setSelectedDate(null)
  }

  const handleSelectDay = (date: string, hasActivity: boolean) => {
    setSelectedDate(date)
    setActiveScreen(hasActivity ? "view-run" : "no-activity")
  }

  const renderContent = () => {
    // First check if we're in a sub-screen
    if (activeScreen === "todays-run") {
      return (
        <TodaysRun
          onBack={handleBack}
          onLogRun={() => {
            setActiveScreen(null)
            setActiveTab("log")
          }}
        />
      )
    }

    if (activeScreen === "view-run" && selectedDate) {
      return <ViewRun onBack={handleBack} date={selectedDate} />
    }

    if (activeScreen === "no-activity" && selectedDate) {
      return <NoActivity onBack={handleBack} date={selectedDate} />
    }

    // Otherwise render the main tabs
    switch (activeTab) {
      case "dashboard":
        return <Dashboard onLogRun={() => setActiveTab("log")} onViewWorkout={() => handleNavigate("todays-run")} />
      case "log":
        return <RunLogger onSave={() => setActiveTab("dashboard")} />
      case "calendar":
        return <CalendarTracker onSelectDay={handleSelectDay} />
      default:
        return <Dashboard onLogRun={() => setActiveTab("log")} onViewWorkout={() => handleNavigate("todays-run")} />
    }
  }

  return (
    <div className="flex flex-col h-[700px] w-full overflow-hidden rounded-3xl bg-white shadow-xl">
      <div className="flex-1 overflow-y-auto">{renderContent()}</div>

      {!activeScreen && (
        <div className="flex items-center justify-around py-4 bg-white border-t border-gray-200 rounded-t-3xl">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`flex flex-col items-center p-2 ${activeTab === "dashboard" ? "text-[#3C4DF3]" : "text-gray-500"}`}
          >
            <Home className="h-6 w-6" />
            <span className="text-xs mt-1">Dashboard</span>
          </button>

          <button
            onClick={() => setActiveTab("calendar")}
            className={`flex flex-col items-center p-2 ${activeTab === "calendar" ? "text-[#3C4DF3]" : "text-gray-500"}`}
          >
            <Calendar className="h-6 w-6" />
            <span className="text-xs mt-1">Calendar</span>
          </button>

          <button
            onClick={() => setActiveTab("log")}
            className={`flex flex-col items-center p-2 ${activeTab === "log" ? "text-[#3C4DF3]" : "text-gray-500"}`}
          >
            <PlusCircle className="h-6 w-6" />
            <span className="text-xs mt-1">Log</span>
          </button>
        </div>
      )}
    </div>
  )
}
