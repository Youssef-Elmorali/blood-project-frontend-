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

        {/* Team Members Skeleton */}
        <section className="container mx-auto px-4 md:px-6 py-16">
          <Skeleton className="h-8 w-48 mx-auto mb-12" />

          <div className="grid md:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Skeleton className="w-full h-64" />
                <div className="p-6">
                  <Skeleton className="h-6 w-40 mb-1" />
                  <Skeleton className="h-4 w-32 mb-3" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4 mb-4" />
                  <div className="flex space-x-3">
                    <Skeleton className="h-5 w-5" />
                    <Skeleton className="h-5 w-5" />
                    <Skeleton className="h-5 w-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

