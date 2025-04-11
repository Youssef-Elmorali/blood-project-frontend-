import Link from "next/link"
import Header from "./components/header"
import Footer from "./components/footer"

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8">
              <div className="relative mx-auto w-40 h-40">
                <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse"></div>
                <div className="absolute inset-4 rounded-full bg-primary/20 animate-pulse delay-300"></div>
                <div className="absolute inset-8 rounded-full bg-primary/30 animate-pulse delay-500"></div>
                <div className="absolute inset-12 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">404</span>
                </div>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h1>
            <p className="text-gray-600 mb-8">
              Oops! The page you're looking for seems to have been donated elsewhere.
            </p>

            <div className="mb-12 max-w-md mx-auto">
              <div className="bg-gray-100 rounded-lg p-6">
                <h2 className="text-lg font-medium mb-4">Did you know?</h2>
                <p className="text-gray-600 mb-4">
                  Every 2 seconds, someone in the world needs blood. A single donation can save up to 3 lives.
                </p>
                <div className="flex items-center justify-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <button className="bg-primary text-white rounded-md px-6 py-3 font-medium w-full">
                  Return to Home
                </button>
              </Link>
              <Link href="/donate">
                <button className="bg-white border border-primary text-primary rounded-md px-6 py-3 font-medium w-full">
                  Donate Blood
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold mb-6 text-center">Popular Pages</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/find-blood">
                <div className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow">
                  <h3 className="font-medium mb-2">Find Blood</h3>
                  <p className="text-sm text-gray-600">Search for available blood in your area</p>
                </div>
              </Link>
              <Link href="/register">
                <div className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow">
                  <h3 className="font-medium mb-2">Register as Donor</h3>
                  <p className="text-sm text-gray-600">Join our community of life-savers</p>
                </div>
              </Link>
              <Link href="/blood-drives">
                <div className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow">
                  <h3 className="font-medium mb-2">Blood Drives</h3>
                  <p className="text-sm text-gray-600">Find upcoming blood drives near you</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

