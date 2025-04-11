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

        {/* Contact Information Skeleton */}
        <section className="container mx-auto px-4 md:px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Skeleton className="h-8 w-48 mb-6" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4 mb-8" />

              <div className="space-y-6">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex">
                    <Skeleton className="h-12 w-12 rounded-full flex-shrink-0" />
                    <div className="ml-4">
                      <Skeleton className="h-6 w-32 mb-1" />
                      <Skeleton className="h-4 w-full mb-1" />
                      <Skeleton className="h-4 w-3/4" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <Skeleton className="h-6 w-48 mb-6" />
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Skeleton className="h-4 w-24 mb-1" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                  <div>
                    <Skeleton className="h-4 w-24 mb-1" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                </div>
                <div className="mb-6">
                  <Skeleton className="h-4 w-24 mb-1" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <div className="mb-6">
                  <Skeleton className="h-4 w-24 mb-1" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <div className="mb-6">
                  <Skeleton className="h-4 w-24 mb-1" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <div className="mb-6">
                  <Skeleton className="h-4 w-24 mb-1" />
                  <Skeleton className="h-32 w-full" />
                </div>
                <Skeleton className="h-12 w-full" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

