import { Skeleton } from "../components/ui/skeleton"
import Header from "../components/header"
import Footer from "../components/footer"

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section Skeleton */}
        <section className="bg-primary bg-opacity-5 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <Skeleton className="h-10 w-48 mx-auto mb-4" />
              <Skeleton className="h-4 w-full mx-auto mb-2" />
              <Skeleton className="h-4 w-3/4 mx-auto" />
            </div>
          </div>
        </section>

        {/* Support Options Skeleton */}
        <section className="container mx-auto px-4 md:px-6 py-16">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md text-center">
                <Skeleton className="h-16 w-16 rounded-full mx-auto mb-4" />
                <Skeleton className="h-6 w-32 mx-auto mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-4" />
                <Skeleton className="h-4 w-24 mx-auto" />
              </div>
            ))}
          </div>

          {/* Common Issues Skeleton */}
          <div className="max-w-3xl mx-auto">
            <Skeleton className="h-8 w-48 mx-auto mb-8" />

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="border-b p-6 last:border-b-0">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4 mb-4" />
                  <Skeleton className="h-4 w-32" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

