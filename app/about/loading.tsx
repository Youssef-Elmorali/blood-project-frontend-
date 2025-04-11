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

        {/* Content Skeleton */}
        <section className="container mx-auto px-4 md:px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Skeleton className="h-8 w-40 mb-6" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4 mb-6" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-2/3" />
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <Skeleton className="h-8 w-40 mb-6" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

