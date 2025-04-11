import Link from "next/link"
import { ChevronRight } from "lucide-react"
import Header from "../components/header"
import Footer from "../components/footer"

export default function DonatePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 flex flex-col md:flex-row">
            <div className="absolute top-0 left-0 w-full md:w-1/2 h-full">
              <div className="w-full h-full bg-primary transform -skew-x-12 origin-top-right translate-x-[-15%]"></div>
            </div>
            <div className="relative z-10 md:w-1/2 mb-12 md:mb-0">
              {/* This div is just a spacer for the skewed background */}
            </div>
            <div className="relative z-10 md:w-1/2 space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Donate Blood
                <br />
                Save Lives
              </h1>
              <p className="text-sm text-gray-600 max-w-md">
                Your donation can save up to three lives. The donation process is safe, simple, and takes only about an
                hour of your time. Schedule your donation today and make a difference in someone's life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#schedule">
                  <button className="bg-black text-white rounded-md px-6 py-3 font-medium">Schedule Donation</button>
                </Link>
                <Link href="#process">
                  <button className="bg-white border border-black text-black rounded-md px-6 py-3 font-medium">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Donation Process Section */}
        <section id="process" className="container mx-auto px-4 md:px-6 py-16">
          <h2 className="text-2xl font-bold mb-12 text-center">Donation Process</h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-medium mb-2">Registration</h3>
              <p className="text-sm text-gray-600">Complete a donor registration form and show your ID</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-medium mb-2">Health Check</h3>
              <p className="text-sm text-gray-600">Brief physical examination to ensure you're eligible to donate</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-medium mb-2">Donation</h3>
              <p className="text-sm text-gray-600">The actual blood donation takes only 8-10 minutes</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-medium mb-2">Refreshments</h3>
              <p className="text-sm text-gray-600">Rest and enjoy refreshments before leaving</p>
            </div>
          </div>
        </section>

        {/* Eligibility Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-12 text-center">Eligibility Requirements</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-4">Basic Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Be at least 17 years old (16 with parental consent)</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Weigh at least 110 pounds (50 kg)</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Be in good general health and feeling well</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Have not donated whole blood in the last 56 days</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-4">Temporary Deferrals</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Cold, flu, or fever: Wait until symptoms are gone</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Pregnancy: Wait 6 weeks after giving birth</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Tattoos: Wait 3-4 months if not done at a regulated facility</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Travel to malaria-risk areas: Wait 3 months</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600 mb-4">
                Not sure if you're eligible? Contact us for more information.
              </p>
              <Link href="/contact">
                <button className="bg-primary text-white rounded-md px-6 py-3 font-medium">Check Eligibility</button>
              </Link>
            </div>
          </div>
        </section>

        {/* Donation Form Section */}
        <section id="schedule" className="container mx-auto px-4 md:px-6 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Schedule Your Donation</h2>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">First Name</label>
                    <input type="text" className="w-full p-3 border rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input type="email" className="w-full p-3 border rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Blood Type (if known)</label>
                    <select className="w-full p-3 border rounded-md">
                      <option>Select Blood Type</option>
                      <option>A+</option>
                      <option>A-</option>
                      <option>B+</option>
                      <option>B-</option>
                      <option>AB+</option>
                      <option>AB-</option>
                      <option>O+</option>
                      <option>O-</option>
                      <option>Don't Know</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Last Name</label>
                    <input type="text" className="w-full p-3 border rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone</label>
                    <input type="tel" className="w-full p-3 border rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Preferred Date</label>
                    <input type="date" className="w-full p-3 border rounded-md" />
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium mb-1">Preferred Location</label>
                <select className="w-full p-3 border rounded-md">
                  <option>Select Location</option>
                  <option>Main Donation Center</option>
                  <option>North Branch</option>
                  <option>South Branch</option>
                  <option>East Branch</option>
                  <option>West Branch</option>
                </select>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium mb-1">Additional Notes</label>
                <textarea className="w-full p-3 border rounded-md h-24"></textarea>
              </div>

              <div className="mt-6 flex items-center">
                <input type="checkbox" id="terms" className="mr-2" />
                <label htmlFor="terms" className="text-sm">
                  I confirm that I meet the basic eligibility requirements
                </label>
              </div>

              <div className="mt-8">
                <button className="w-full bg-primary text-white rounded-md py-3 font-medium">
                  Schedule Appointment
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

