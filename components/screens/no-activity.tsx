"use client"

import { ArrowLeft, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NoActivityProps {
  onBack: () => void
  date?: string // Optional date parameter
}

export default function NoActivity({ onBack, date }: NoActivityProps) {
  return (
    <div className="flex flex-col h-full p-5 text-gray-800">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="mr-2 text-gray-800">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h1 className="text-xl font-bold">Activity Details</h1>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="h-24 w-24 rounded-full bg-gray-100 flex items-center justify-center mb-6">
          <Calendar className="h-12 w-12 text-gray-400" />
        </div>

        <h2 className="text-xl font-medium text-gray-700 mb-2">No activity logged on this day</h2>
        {date && <p className="text-gray-500 mb-6">{date}</p>}

        <p className="text-gray-500 text-center max-w-xs mb-8">
          You haven't recorded any runs or workouts for this date.
        </p>
      </div>

      <Button
        onClick={onBack}
        className="w-full py-5 text-base bg-[#3C4DF3] hover:bg-[#3C4DF3]/90 text-white rounded-xl"
      >
        Go Back to Calendar
      </Button>
    </div>
  )
}
