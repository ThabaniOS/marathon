"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CalendarTrackerProps {
  onSelectDay: (date: string, hasActivity: boolean) => void
}

export default function CalendarTracker({ onSelectDay }: CalendarTrackerProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  // Mock data for workout status - in a real app this would come from state/API
  const workoutStatus = {
    // Format: "YYYY-MM-DD": status
    "2025-04-22": "completed", // Green
    "2025-04-23": "planned", // Pink
    "2025-04-24": "recovery", // Orange
    "2025-04-25": "planned",
    "2025-04-26": "planned",
    "2025-04-27": "recovery",
    "2025-04-28": "completed",
    "2025-04-29": "completed",
  }

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500"
      case "planned":
        return "bg-pink-500"
      case "recovery":
        return "bg-orange-500"
      default:
        return "bg-transparent"
    }
  }

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay()
  }

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  const formatDate = (year: number, month: number, day: number) => {
    const date = new Date(year, month, day)
    return date.toLocaleDateString("en-US", { weekday: "long", day: "numeric", month: "long", year: "numeric" })
  }

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth)
    const firstDayOfMonth = getFirstDayOfMonth(currentYear, currentMonth)
    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-10"></div>)
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateString = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
      const status = workoutStatus[dateString]
      const hasActivity = status === "completed"
      const formattedDate = formatDate(currentYear, currentMonth, day)

      days.push(
        <div
          key={day}
          onClick={() => onSelectDay(formattedDate, hasActivity)}
          className={`h-12 flex items-center justify-center ${status ? "cursor-pointer" : ""}`}
        >
          <div
            className={`
            relative flex items-center justify-center w-10 h-10 rounded-full
            ${
              day === new Date().getDate() &&
              currentMonth === new Date().getMonth() &&
              currentYear === new Date().getFullYear()
                ? "border-2 border-[#3C4DF3]"
                : ""
            }
            ${status ? "hover:bg-gray-100" : ""}
          `}
          >
            <span className="text-sm">{day}</span>
            {status && <div className={`absolute bottom-0 w-6 h-1.5 rounded-full ${getStatusColor(status)}`}></div>}
          </div>
        </div>,
      )
    }

    return days
  }

  return (
    <div className="flex flex-col h-full p-5 text-gray-800">
      <h1 className="text-xl font-bold mb-6">Training Calendar</h1>

      <div className="flex items-center justify-between mb-6">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrevMonth}
          className="border-gray-200 text-gray-800 hover:bg-gray-100 hover:text-gray-800"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <h2 className="text-lg font-semibold">
          {monthNames[currentMonth]} {currentYear}
        </h2>

        <Button
          variant="outline"
          size="icon"
          onClick={handleNextMonth}
          className="border-gray-200 text-gray-800 hover:bg-gray-100 hover:text-gray-800"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <Card className="flex-1 p-4 bg-white rounded-xl shadow-md">
        {/* Day labels */}
        <div className="grid grid-cols-7 mb-2">
          {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
            <div key={index} className="text-center text-sm font-medium text-gray-500">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1 text-gray-800">{renderCalendar()}</div>
      </Card>

      {/* Legend */}
      <div className="mt-6 flex justify-around">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
          <span className="text-xs text-gray-700">Completed</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-pink-500 mr-2"></div>
          <span className="text-xs text-gray-700">Planned</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-orange-500 mr-2"></div>
          <span className="text-xs text-gray-700">Recovery</span>
        </div>
      </div>
    </div>
  )
}
