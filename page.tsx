import Link from 'next/link'
import { Mic, Camera, Search } from 'lucide-react'

export default function Home() {
  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <Link
          href="/translator"
          className="p-6 bg-[--card] rounded-2xl card-shadow flex flex-col items-center text-center"
        >
          <Mic className="w-8 h-8 text-[--primary] mb-3" />
          <span className="text-[--primary] font-medium">Voice Translator</span>
        </Link>
        <Link
          href="/object-detection"
          className="p-6 bg-[--card] rounded-2xl card-shadow flex flex-col items-center text-center"
        >
          <Camera className="w-8 h-8 text-[--primary] mb-3" />
          <span className="text-[--primary] font-medium">Object Detection</span>
        </Link>
        <Link
          href="/search"
          className="p-6 bg-[--card] rounded-2xl card-shadow flex flex-col items-center text-center col-span-2"
        >
          <Search className="w-8 h-8 text-[--primary] mb-3" />
          <span className="text-[--primary] font-medium">Visual Search</span>
        </Link>
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="Type Something..."
          className="w-full p-4 pl-12 rounded-full border-2 border-[--primary] bg-white"
        />
        <Search className="w-5 h-5 text-[--primary] absolute left-4 top-1/2 transform -translate-y-1/2" />
      </div>
    </div>
  )
}

