import MobileApp from "@/components/mobile-app"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md mx-auto">
        <div className="relative">
          {/* Status bar mockup */}
          <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-5 py-2 text-white text-xs">
            <div>9:41</div>
            <div className="flex items-center space-x-1">
              <div className="h-2.5 w-2.5 rounded-full bg-white"></div>
              <div className="h-2.5 w-2.5 rounded-full bg-white"></div>
              <div className="h-2.5 w-2.5 rounded-full bg-white"></div>
            </div>
          </div>
          <MobileApp />
        </div>
      </div>
    </main>
  )
}
