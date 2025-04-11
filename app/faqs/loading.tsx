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
              <Skeleton className="h-10 w-64 mx-auto mb-4" />
              <Skeleton className="h-4 w-full mx-auto mb-2" />
              <Skeleton className="h-4 w-3/4 mx-auto" />
            </div>
          </div>
        </section>

        {/* FAQ Categories Skeleton */}
        <section className="container mx-auto px-4 md:px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                  <Skeleton className="h-6 w-32 mx-auto mb-2" />
                  <Skeleton className="h-4 w-full mx-auto" />
                </div>
              ))}
            </div>

            {/* FAQ Sections Skeleton */}
            {[...Array(3)].map((_, i) => (
              <div key={i} className="mb-12">
                <Skeleton className="h-8 w-40 mb-6" />
                <Skeleton className="h-12 w-full mb-6" />
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  {[...Array(5)].map((_, j) => (
                    <div key={j} className="border-b last:border-b-0 p-4">
                      <Skeleton className="h-6 w-full mb-2" />
                      {j === 0 && (
                        <>
                          <Skeleton className="h-4 w-full mb-1" />
                          <Skeleton className="h-4 w-full mb-1" />
                          <Skeleton className="h-4 w-3/4" />
                        </>
                      )}
                    </div>
                  ))}
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

