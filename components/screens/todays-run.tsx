"use client"

import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface TodaysRunProps {
  onBack: () => void
  onLogRun: () => void
}

export default function TodaysRun({ onBack, onLogRun }: TodaysRunProps) {
  // Mock data for the workout details
  const workout = {
    type: "Easy 5km Run",
    distance: "5.0 km",
    pace: "6:00 min/km",
    notes:
      "Focus on maintaining a comfortable pace throughout. This is a recovery run, so keep your heart rate low and enjoy the process. Breathe deeply and maintain good form.",
  }

  return (
    <div className="flex flex-col h-full p-5 text-gray-800">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="mr-2 text-gray-800">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h1 className="text-xl font-bold">Today's Run</h1>
      </div>

      <div className="space-y-4 flex-1">
        <Card className="bg-white rounded-xl shadow-md border border-gray-100">
          <CardContent className="p-4">
            <h2 className="text-sm font-medium text-gray-500">Run Type</h2>
            <p className="text-xl font-bold text-[#3C4DF3]">{workout.type}</p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-white rounded-xl shadow-md border border-gray-100">
            <CardContent className="p-4">
              <h2 className="text-sm font-medium text-gray-500">Distance</h2>
              <p className="text-xl font-bold text-gray-800">{workout.distance}</p>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-xl shadow-md border border-gray-100">
            <CardContent className="p-4">
              <h2 className="text-sm font-medium text-gray-500">Target Pace</h2>
              <p className="text-xl font-bold text-gray-800">{workout.pace}</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white rounded-xl shadow-md border border-gray-100">
          <CardContent className="p-4">
            <h2 className="text-sm font-medium text-gray-500">Notes</h2>
            <p className="text-gray-700 mt-2">{workout.notes}</p>
          </CardContent>
        </Card>
      </div>

      <Button
        onClick={onLogRun}
        className="w-full py-6 text-lg bg-[#3C4DF3] hover:bg-[#3C4DF3]/90 text-white rounded-xl shadow-md mt-4"
      >
        Log This Run
      </Button>
    </div>
  )
}
