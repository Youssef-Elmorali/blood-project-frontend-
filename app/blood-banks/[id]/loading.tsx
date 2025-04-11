import { Skeleton } from "../../components/ui/skeleton"
import Header from "../../components/header"
import Footer from "../../components/footer"

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <Skeleton className="h-8 w-40 mb-6" />

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Skeleton className="h-64 w-full" />

            <div className="p-6">
              <Skeleton className="h-8 w-1/2 mb-4" />

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-4" />

                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Skeleton className="h-5 w-5 mr-2 shrink-0 mt-0.5" />
                      <Skeleton className="h-4 w-full" />
                    </div>
                    <div className="flex items-start">
                      <Skeleton className="h-5 w-5 mr-2 shrink-0 mt-0.5" />
                      <Skeleton className="h-4 w-full" />
                    </div>
                    <div className="flex items-start">
                      <Skeleton className="h-5 w-5 mr-2 shrink-0 mt-0.5" />
                      <Skeleton className="h-4 w-full" />
                    </div>
                  </div>
                </div>

                <div>
                  <Skeleton className="h-6 w-40 mb-3" />
                  <div className="space-y-2">
                    {[...Array(6)].map((_, index) => (
                      <div key={index} className="flex items-center">
                        <Skeleton className="h-2 w-2 rounded-full mr-2" />
                        <Skeleton className="h-4 w-full" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <Skeleton className="h-6 w-48 mb-4" />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[...Array(8)].map((_, index) => (
                    <Skeleton key={index} className="h-24 w-full rounded-md" />
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <Skeleton className="h-12 w-full sm:w-1/2" />
                  <Skeleton className="h-12 w-full sm:w-1/2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

