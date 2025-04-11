import { Skeleton } from "../components/ui/skeleton"
import Header from "../components/header"
import Footer from "../components/footer"

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gray-50">
        <section className="bg-primary bg-opacity-5 py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <Skeleton className="h-10 w-3/4 mx-auto mb-4" />
              <Skeleton className="h-4 w-full mx-auto mb-8" />

              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <Skeleton className="h-12 w-full" />
                  </div>
                  <div className="flex-1">
                    <Skeleton className="h-12 w-full" />
                  </div>
                  <Skeleton className="h-12 w-32" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 md:px-6 py-12">
          <div className="mb-8 flex justify-between items-center">
            <Skeleton className="h-8 w-40" />
            <Skeleton className="h-8 w-32" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Skeleton className="h-40 w-full" />
                <div className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-4" />
                  <div className="space-y-2 mb-4">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                  </div>

                  <div className="mb-4">
                    <Skeleton className="h-4 w-1/2 mb-2" />
                    <div className="flex gap-2">
                      <Skeleton className="h-6 w-12 rounded-full" />
                      <Skeleton className="h-6 w-12 rounded-full" />
                      <Skeleton className="h-6 w-12 rounded-full" />
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-8 w-24" />
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

