"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Save } from "lucide-react"

interface RunLoggerProps {
  onSave: () => void
}

export default function RunLogger({ onSave }: RunLoggerProps) {
  const [distance, setDistance] = useState("")
  const [hours, setHours] = useState("")
  const [minutes, setMinutes] = useState("")
  const [seconds, setSeconds] = useState("")
  const [heartRate, setHeartRate] = useState("")

  // Calculate pace (min/km) based on time and distance
  const calculatePace = () => {
    if (!distance || !minutes) return "-- : --"

    const totalMinutes = (Number(hours) || 0) * 60 + Number(minutes) + (Number(seconds) || 0) / 60
    const pace = totalMinutes / Number(distance)

    const paceMinutes = Math.floor(pace)
    const paceSeconds = Math.round((pace - paceMinutes) * 60)

    return `${paceMinutes}:${paceSeconds.toString().padStart(2, "0")}`
  }

  return (
    <div className="flex flex-col h-full p-5 text-gray-800">
      <div className="flex items-center mb-6">
        <button onClick={onSave} className="mr-2 text-gray-800">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h1 className="text-xl font-bold">Log Your Run</h1>
      </div>

      <Card className="bg-white rounded-xl shadow-md border border-gray-100 mb-6">
        <CardContent className="p-4">
          <h2 className="text-sm font-medium text-gray-500">Today's Planned Workout</h2>
          <p className="text-lg font-semibold text-[#3C4DF3]">Easy 5km Run</p>
        </CardContent>
      </Card>

      <div className="space-y-5 flex-1 overflow-y-auto pb-4">
        <div className="bg-white p-4 rounded-xl shadow-md">
          <Label htmlFor="distance" className="text-gray-800">
            Distance (km)
          </Label>
          <Input
            id="distance"
            type="number"
            placeholder="0.0"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            className="mt-1 bg-gray-50 border-gray-200"
          />
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md">
          <Label className="text-gray-800">Time</Label>
          <div className="grid grid-cols-3 gap-2 mt-1">
            <Input
              type="number"
              placeholder="hh"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              className="bg-gray-50 border-gray-200"
            />
            <Input
              type="number"
              placeholder="mm"
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
              className="bg-gray-50 border-gray-200"
            />
            <Input
              type="number"
              placeholder="ss"
              value={seconds}
              onChange={(e) => setSeconds(e.target.value)}
              className="bg-gray-50 border-gray-200"
            />
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md">
          <Label htmlFor="heart-rate" className="text-gray-800">
            Heart Rate (bpm)
          </Label>
          <Input
            id="heart-rate"
            type="number"
            placeholder="0"
            value={heartRate}
            onChange={(e) => setHeartRate(e.target.value)}
            className="mt-1 bg-gray-50 border-gray-200"
          />
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md">
          <Label htmlFor="pace" className="text-gray-800">
            Pace (min/km)
          </Label>
          <Input id="pace" value={calculatePace()} readOnly className="mt-1 bg-gray-50 border-gray-200" />
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md">
          <Label htmlFor="feeling" className="text-gray-800">
            How Did It Feel?
          </Label>
          <Select>
            <SelectTrigger className="mt-1 bg-gray-50 border-gray-200">
              <SelectValue placeholder="Select rating" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1: Poor (struggled)</SelectItem>
              <SelectItem value="2">2: Below Average</SelectItem>
              <SelectItem value="3">3: Good</SelectItem>
              <SelectItem value="4">4: Strong</SelectItem>
              <SelectItem value="5">5: Excellent</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md">
          <Label htmlFor="time-of-day" className="text-gray-800">
            Time of Day
          </Label>
          <Select>
            <SelectTrigger className="mt-1 bg-gray-50 border-gray-200">
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="morning">Morning</SelectItem>
              <SelectItem value="afternoon">Afternoon</SelectItem>
              <SelectItem value="evening">Evening</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md">
          <Label htmlFor="notes" className="text-gray-800">
            Notes (Optional)
          </Label>
          <Textarea
            id="notes"
            placeholder="Route, weather, thoughts..."
            className="mt-1 resize-none bg-gray-50 border-gray-200"
            rows={3}
          />
        </div>
      </div>

      <Button
        onClick={onSave}
        className="w-full py-6 text-lg bg-[#3C4DF3] hover:bg-[#3C4DF3]/90 text-white rounded-xl shadow-md mt-4"
      >
        <Save className="mr-2 h-5 w-5" />
        Save Run
      </Button>
    </div>
  )
}
