"use client"

import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ViewRunProps {
  onBack: () => void
  date?: string // Optional date parameter
}

export default function ViewRun({ onBack, date = "Monday, 13 May 2025" }: ViewRunProps) {
  // Mock data for a completed run - in a real app this would come from state/API
  const runData = {
    type: "Easy 5km Run",
    distance: "5.2 km",
    duration: "38 minutes",
    pace: "7:15 min/km",
    feeling: "😊 Felt strong",
    notes:
      "Great morning run through the park. Weather was perfect with a slight breeze. Maintained consistent pace throughout and felt energized afterward. Stretched properly after finishing.",
  }

  return (
    <div className="flex flex-col h-full p-5 text-gray-800">
      <div className="flex items-center mb-2">
        <button onClick={onBack} className="mr-2 text-gray-800">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h1 className="text-xl font-bold">Run Summary</h1>
      </div>

      <p className="text-gray-500 mb-6">{date}</p>

      <div className="space-y-4 flex-1">
        <Card className="bg-white rounded-xl shadow-md border border-gray-100">
          <CardContent className="p-4">
            <h2 className="text-sm font-medium text-gray-500">Run Type</h2>
            <p className="text-xl font-bold text-[#3C4DF3]">{runData.type}</p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-white rounded-xl shadow-md border border-gray-100">
            <CardContent className="p-4">
              <h2 className="text-sm font-medium text-gray-500">Distance</h2>
              <p className="text-xl font-bold text-gray-800">{runData.distance}</p>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-xl shadow-md border border-gray-100">
            <CardContent className="p-4">
              <h2 className="text-sm font-medium text-gray-500">Duration</h2>
              <p className="text-xl font-bold text-gray-800">{runData.duration}</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white rounded-xl shadow-md border border-gray-100">
          <CardContent className="p-4">
            <h2 className="text-sm font-medium text-gray-500">Average Pace</h2>
            <p className="text-xl font-bold text-gray-800">{runData.pace}</p>
          </CardContent>
        </Card>

        <Card className="bg-white rounded-xl shadow-md border border-gray-100">
          <CardContent className="p-4">
            <h2 className="text-sm font-medium text-gray-500">How You Felt</h2>
            <p className="text-xl font-bold text-gray-800">{runData.feeling}</p>
          </CardContent>
        </Card>

        <Card className="bg-white rounded-xl shadow-md border border-gray-100">
          <CardContent className="p-4">
            <h2 className="text-sm font-medium text-gray-500">Notes</h2>
            <p className="text-gray-700 mt-2">{runData.notes}</p>
          </CardContent>
        </Card>
      </div>

      <Button
        onClick={onBack}
        variant="outline"
        className="w-full py-5 text-base border-gray-200 text-gray-700 hover:bg-gray-100 rounded-xl mt-4"
      >
        Back
      </Button>
    </div>
  )
}
