import Header from "../components/header"
import Footer from "../components/footer"
import Link from "next/link"
import { Calendar, MapPin, Clock } from "lucide-react"

export default function BloodDrivesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary bg-opacity-5 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Blood Drives</h1>
              <p className="text-gray-600 mb-8">
                Find a blood drive near you and make a difference in your community. Each donation can save up to three
                lives.
              </p>
            </div>
          </div>
        </section>

        {/* Blood Drives List */}
        <section className="container mx-auto px-4 md:px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-medium">
                      {
                        [
                          "Community Center Drive",
                          "University Campus",
                          "Corporate Office",
                          "Public Library",
                          "Shopping Mall",
                          "Medical Center",
                        ][index % 6]
                      }
                    </h3>
                    <div className="bg-primary bg-opacity-10 text-primary text-sm font-medium px-3 py-1 rounded">
                      {["Jun 15", "Jun 22", "Jun 30", "Jul 5", "Jul 12", "Jul 18"][index % 6]}
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>
                        {
                          [
                            "123 Main Street, Downtown",
                            "456 College Ave, University District",
                            "789 Business Pkwy, Financial District",
                            "321 Book Lane, Midtown",
                            "654 Shopping Blvd, Westside",
                            "987 Health Way, Eastside",
                          ][index % 6]
                        }
                      </span>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>
                        {
                          [
                            "9:00 AM - 4:00 PM",
                            "10:00 AM - 3:00 PM",
                            "11:00 AM - 5:00 PM",
                            "12:00 PM - 6:00 PM",
                            "9:00 AM - 2:00 PM",
                            "8:00 AM - 3:00 PM",
                          ][index % 6]
                        }
                      </span>
                    </div>
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>Appointments available</span>
                    </div>
                  </div>

                  <Link href="/donate">
                    <button className="w-full bg-primary text-white rounded-md py-2 font-medium">
                      Schedule Appointment
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Don't see a blood drive near you? Check back later or contact us to organize one in your area.
            </p>
            <Link href="/contact">
              <button className="bg-black text-white rounded-md px-6 py-3 font-medium">Contact Us</button>
            </Link>
          </div>
        </section>

        {/* Host a Blood Drive Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Host a Blood Drive</h2>
              <p className="text-gray-600 mb-8">
                Organizing a blood drive at your workplace, school, or community center is a powerful way to make a
                difference. We'll provide everything you need to make your blood drive a success.
              </p>

              <div className="grid md:grid-cols-3 gap-6 text-left mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-medium mb-2">We Provide</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Professional staff</li>
                    <li>• All necessary equipment</li>
                    <li>• Marketing materials</li>
                    <li>• Online scheduling</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-medium mb-2">You Provide</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Location/venue</li>
                    <li>• Date and time</li>
                    <li>• Volunteer coordinators</li>
                    <li>• Potential donors</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-medium mb-2">Benefits</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Save lives in your community</li>
                    <li>• Team building opportunity</li>
                    <li>• Corporate social responsibility</li>
                    <li>• Community engagement</li>
                  </ul>
                </div>
              </div>

              <Link href="/host-drive">
                <button className="bg-primary text-white rounded-md px-6 py-3 font-medium">Host a Blood Drive</button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

