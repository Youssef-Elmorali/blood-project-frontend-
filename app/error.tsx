"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="relative mx-auto w-24 h-24">
            <div className="absolute inset-0 rounded-full bg-red-100 animate-pulse"></div>
            <div className="absolute inset-4 rounded-full bg-red-200 animate-pulse delay-300"></div>
            <div className="absolute inset-8 rounded-full bg-red-300 animate-pulse delay-500"></div>
            <div className="absolute inset-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white text-xl font-bold">!</span>
            </div>
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
        <p className="text-gray-600 mb-8">
          We apologize for the inconvenience. Please try again or return to the home page.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => reset()} className="bg-primary text-white rounded-md px-6 py-3 font-medium">
            Try again
          </button>
          <Link href="/">
            <button className="bg-white border border-primary text-primary rounded-md px-6 py-3 font-medium">
              Return to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

