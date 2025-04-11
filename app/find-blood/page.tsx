import Link from "next/link"
import { ChevronDown, MapPin, Phone, Clock, Search } from "lucide-react"
import Header from "../components/header"
import Footer from "../components/footer"

export default function FindBloodPage() {
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
                Find Blood
                <br />
                Save Lives
              </h1>
              <p className="text-sm text-gray-600 max-w-md">
                Finding the right blood type quickly can be critical in emergency situations. Use our platform to locate
                blood donors and blood banks near you, or request blood for those in need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#search">
                  <button className="bg-black text-white rounded-md px-6 py-3 font-medium">Find Donors</button>
                </Link>
                <Link href="#emergency">
                  <button className="bg-white border border-black text-black rounded-md px-6 py-3 font-medium">
                    Request Blood
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section id="search" className="container mx-auto px-4 md:px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Find Blood Near You</h2>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium">Blood Group</label>
                  <div className="flex border rounded-md">
                    <select className="w-full p-3 bg-transparent appearance-none focus:outline-none">
                      <option>Any Blood Group</option>
                      <option>A+</option>
                      <option>A-</option>
                      <option>B+</option>
                      <option>B-</option>
                      <option>AB+</option>
                      <option>AB-</option>
                      <option>O+</option>
                      <option>O-</option>
                    </select>
                    <div className="flex items-center px-3">
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium">Location</label>
                  <div className="flex border rounded-md">
                    <input
                      type="text"
                      placeholder="Enter city or zip code"
                      className="w-full p-3 bg-transparent focus:outline-none"
                    />
                    <div className="flex items-center px-3">
                      <MapPin className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium">Distance</label>
                  <div className="flex border rounded-md">
                    <select className="w-full p-3 bg-transparent appearance-none focus:outline-none">
                      <option>5 miles</option>
                      <option>10 miles</option>
                      <option>25 miles</option>
                      <option>50 miles</option>
                      <option>100 miles</option>
                    </select>
                    <div className="flex items-center px-3">
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <button className="flex items-center gap-2 bg-primary text-white rounded-md px-8 py-3 font-medium">
                  <Search className="h-4 w-4" />
                  Search
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Blood Banks Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-12 text-center">Nearby Blood Banks</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Central Blood Bank",
                  address: "123 Medical Center Drive, City, State 12345",
                  phone: "(123) 456-7890",
                  hours: "Open 24 hours",
                  distance: "2.3 miles away",
                  stocks: {
                    "A+": "High",
                    "B+": "Medium",
                    "O-": "Low",
                  },
                },
                {
                  name: "University Hospital Blood Center",
                  address: "456 College Ave, University District",
                  phone: "(123) 789-0123",
                  hours: "8:00 AM - 8:00 PM",
                  distance: "3.5 miles away",
                  stocks: {
                    "A-": "Medium",
                    "AB+": "High",
                    "O+": "Medium",
                  },
                },
                {
                  name: "Community Donation Center",
                  address: "789 Main Street, Downtown",
                  phone: "(123) 321-6540",
                  hours: "9:00 AM - 5:00 PM",
                  distance: "4.1 miles away",
                  stocks: {
                    "B-": "Low",
                    "AB-": "Low",
                    "O+": "High",
                  },
                },
              ].map((bank, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="h-40 bg-gray-200 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">Map Preview</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium mb-2">{bank.name}</h3>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span>{bank.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span>{bank.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span>{bank.hours}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2">Blood Stock Availability:</h4>
                      <div className="grid grid-cols-3 gap-2">
                        {Object.entries(bank.stocks).map(([type, level]) => (
                          <div key={type} className="text-center">
                            <div
                              className={`text-xs font-bold rounded-full w-8 h-8 mx-auto flex items-center justify-center ${
                                level === "High"
                                  ? "bg-green-100 text-green-800"
                                  : level === "Medium"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-red-100 text-red-800"
                              }`}
                            >
                              {type}
                            </div>
                            <span
                              className={`text-xs mt-1 ${
                                level === "High"
                                  ? "text-green-600"
                                  : level === "Medium"
                                    ? "text-yellow-600"
                                    : "text-red-600"
                              }`}
                            >
                              {level}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm">{bank.distance}</span>
                      <Link href={`/blood-banks/${index + 1}`}>
                        <button className="text-primary font-medium text-sm">View Details</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link href="/blood-banks">
                <button className="text-primary font-medium">View All Blood Banks</button>
              </Link>
            </div>
          </div>
        </section>

        {/* Blood Compatibility Section */}
        <section className="container mx-auto px-4 md:px-6 py-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Blood Type Compatibility</h2>

          <div className="max-w-3xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border p-3 bg-gray-100 text-left">Blood Type</th>
                    <th className="border p-3 bg-gray-100 text-left">Can Donate To</th>
                    <th className="border p-3 bg-gray-100 text-left">Can Receive From</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3 font-medium">A+</td>
                    <td className="border p-3">A+, AB+</td>
                    <td className="border p-3">A+, A-, O+, O-</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">A-</td>
                    <td className="border p-3">A+, A-, AB+, AB-</td>
                    <td className="border p-3">A-, O-</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">B+</td>
                    <td className="border p-3">B+, AB+</td>
                    <td className="border p-3">B+, B-, O+, O-</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">B-</td>
                    <td className="border p-3">B+, B-, AB+, AB-</td>
                    <td className="border p-3">B-, O-</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">AB+</td>
                    <td className="border p-3">AB+ only</td>
                    <td className="border p-3">All blood types</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">AB-</td>
                    <td className="border p-3">AB+, AB-</td>
                    <td className="border p-3">A-, B-, AB-, O-</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">O+</td>
                    <td className="border p-3">A+, B+, AB+, O+</td>
                    <td className="border p-3">O+, O-</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">O-</td>
                    <td className="border p-3">All blood types</td>
                    <td className="border p-3">O- only</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 text-sm text-gray-600">
              <p>O- is the universal donor: people with O- blood can donate red blood cells to anyone.</p>
              <p>
                AB+ is the universal recipient: people with AB+ blood can receive red blood cells from any blood type.
              </p>
            </div>
          </div>
        </section>

        {/* Emergency Request Section */}
        <section id="emergency" className="bg-primary bg-opacity-10 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Emergency Blood Request</h2>
              <p className="text-gray-600 mb-8">
                Need blood urgently? Submit an emergency request and we'll help connect you with available donors in
                your area.
              </p>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1 text-left">Patient Name</label>
                      <input type="text" className="w-full p-3 border rounded-md" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1 text-left">Hospital/Location</label>
                      <input type="text" className="w-full p-3 border rounded-md" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1 text-left">Blood Type Needed</label>
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
                      </select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1 text-left">Contact Person</label>
                      <input type="text" className="w-full p-3 border rounded-md" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1 text-left">Phone Number</label>
                      <input type="tel" className="w-full p-3 border rounded-md" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1 text-left">Units Required</label>
                      <select className="w-full p-3 border rounded-md">
                        <option>Select Units</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5+</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium mb-1 text-left">Additional Information</label>
                  <textarea className="w-full p-3 border rounded-md h-24"></textarea>
                </div>

                <div className="mt-6 flex items-center">
                  <input type="checkbox" id="urgent" className="mr-2" />
                  <label htmlFor="urgent" className="text-sm">
                    This is an urgent request (needed within 24 hours)
                  </label>
                </div>

                <div className="mt-8">
                  <button className="w-full bg-primary text-white rounded-md py-3 font-medium">
                    Submit Emergency Request
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

