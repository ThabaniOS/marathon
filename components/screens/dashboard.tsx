"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, Clock, Heart, MapPin } from "lucide-react"

interface DashboardProps {
  onLogRun: () => void
  onViewWorkout: () => void
}

export default function Dashboard({ onLogRun, onViewWorkout }: DashboardProps) {
  // Mock data - in a real app this would come from state/API
  const daysToGo = 173
  const todaysWorkout = "Easy 5km Run"
  const lastRun = {
    distance: "10km",
    pace: "5:12",
    feeling: "Excellent",
  }
  const totalRuns = 24
  const weeklyMileage = 32

  return (
    <div className="flex flex-col h-full p-5 text-gray-800">
      {/* Top Section - Greeting and Days */}
      <div className="mb-10">
        <div className="text-center">
          <p className="text-xl font-medium text-gray-700 mb-2">Hello Thabani</p>
          <div className="flex flex-col items-center justify-center mt-8 mb-4">
            <span className="text-sm text-gray-500">You have</span>
            <span className="text-8xl font-bold text-[#3C4DF3] my-2">{daysToGo}</span>
            <span className="text-sm text-gray-500">days to go</span>
          </div>
        </div>
      </div>

      {/* Today's Workout - pushed down by 20% */}
      <div className="mt-8 mb-6">
        <Card
          className="bg-white rounded-xl shadow-md cursor-pointer hover:shadow-lg transition-shadow border border-gray-100"
          onClick={() => onViewWorkout()}
        >
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-1 text-gray-800">Today's Workout</h2>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold text-[#3C4DF3]">{todaysWorkout}</p>
              <Calendar className="h-6 w-6 text-[#3C4DF3]" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Middle Section - Stats */}
      <div className="space-y-4 mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Your Progress</h2>

        <Card className="bg-white rounded-xl shadow-md border border-gray-100">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Last Run</h3>
                <p className="text-lg font-semibold text-gray-800">
                  {lastRun.distance} | {lastRun.pace} pace
                </p>
                <p className="text-sm text-[#3C4DF3]">Felt {lastRun.feeling}</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-[#3C4DF3]/10 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-[#3C4DF3]" />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-white rounded-xl shadow-md border border-gray-100">
            <CardContent className="p-4">
              <div className="flex flex-col">
                <h3 className="text-sm font-medium text-gray-500">Total Runs</h3>
                <div className="flex items-center mt-1">
                  <p className="text-2xl font-bold text-gray-800">{totalRuns}</p>
                  <Clock className="h-5 w-5 text-[#3C4DF3] ml-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-xl shadow-md border border-gray-100">
            <CardContent className="p-4">
              <div className="flex flex-col">
                <h3 className="text-sm font-medium text-gray-500">Weekly Mileage</h3>
                <div className="flex items-center mt-1">
                  <p className="text-2xl font-bold text-gray-800">{weeklyMileage} km</p>
                  <Heart className="h-5 w-5 text-[#3C4DF3] ml-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Section - CTA */}
      <div className="mt-auto">
        <Button
          onClick={onLogRun}
          className="w-full py-6 text-lg bg-[#3C4DF3] hover:bg-[#3C4DF3]/90 text-white rounded-xl shadow-md"
        >
          Log Today's Run
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
