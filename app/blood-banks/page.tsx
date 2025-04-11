import Link from "next/link"
import { MapPin, Phone, Clock, Search, Filter } from "lucide-react"
import Header from "../components/header"
import Footer from "../components/footer"

// This would typically come from a database
const bloodBanks = [
  {
    id: 1,
    name: "Central Blood Bank",
    address: "123 Medical Center Drive, City, State 12345",
    phone: "(123) 456-7890",
    hours: "Open 24 hours",
    distance: "2.3 miles away",
    stocks: {
      "A+": { level: "High", units: 125 },
      "A-": { level: "Medium", units: 48 },
      "B+": { level: "Medium", units: 52 },
      "B-": { level: "Low", units: 15 },
      "AB+": { level: "High", units: 35 },
      "AB-": { level: "Low", units: 8 },
      "O+": { level: "Medium", units: 87 },
      "O-": { level: "Low", units: 23 },
    },
  },
  {
    id: 2,
    name: "University Hospital Blood Center",
    address: "456 College Ave, University District",
    phone: "(123) 789-0123",
    hours: "8:00 AM - 8:00 PM",
    distance: "3.5 miles away",
    stocks: {
      "A+": { level: "Medium", units: 78 },
      "A-": { level: "Medium", units: 42 },
      "B+": { level: "Low", units: 31 },
      "B-": { level: "Low", units: 12 },
      "AB+": { level: "High", units: 29 },
      "AB-": { level: "Medium", units: 18 },
      "O+": { level: "Medium", units: 65 },
      "O-": { level: "Low", units: 19 },
    },
  },
  {
    id: 3,
    name: "Community Donation Center",
    address: "789 Main Street, Downtown",
    phone: "(123) 321-6540",
    hours: "9:00 AM - 5:00 PM",
    distance: "4.1 miles away",
    stocks: {
      "A+": { level: "Medium", units: 62 },
      "A-": { level: "Low", units: 21 },
      "B+": { level: "Medium", units: 45 },
      "B-": { level: "Low", units: 9 },
      "AB+": { level: "Low", units: 14 },
      "AB-": { level: "Low", units: 5 },
      "O+": { level: "High", units: 103 },
      "O-": { level: "Medium", units: 37 },
    },
  },
  {
    id: 4,
    name: "Eastside Medical Center",
    address: "321 Healthcare Blvd, Eastside",
    phone: "(123) 555-7890",
    hours: "7:00 AM - 7:00 PM",
    distance: "5.8 miles away",
    stocks: {
      "A+": { level: "High", units: 92 },
      "A-": { level: "Medium", units: 38 },
      "B+": { level: "Medium", units: 47 },
      "B-": { level: "Low", units: 11 },
      "AB+": { level: "Medium", units: 22 },
      "AB-": { level: "Low", units: 7 },
      "O+": { level: "High", units: 115 },
      "O-": { level: "Medium", units: 42 },
    },
  },
  {
    id: 5,
    name: "Westside Blood Donation Facility",
    address: "987 Donor Drive, Westside",
    phone: "(123) 456-3210",
    hours: "8:30 AM - 6:30 PM",
    distance: "6.2 miles away",
    stocks: {
      "A+": { level: "Medium", units: 71 },
      "A-": { level: "Low", units: 19 },
      "B+": { level: "High", units: 83 },
      "B-": { level: "Medium", units: 27 },
      "AB+": { level: "Low", units: 12 },
      "AB-": { level: "Low", units: 4 },
      "O+": { level: "Medium", units: 68 },
      "O-": { level: "Low", units: 15 },
    },
  },
  {
    id: 6,
    name: "North County Blood Center",
    address: "456 North Avenue, North County",
    phone: "(123) 987-6543",
    hours: "9:00 AM - 5:00 PM",
    distance: "8.7 miles away",
    stocks: {
      "A+": { level: "Medium", units: 58 },
      "A-": { level: "Medium", units: 32 },
      "B+": { level: "Low", units: 24 },
      "B-": { level: "Low", units: 8 },
      "AB+": { level: "Medium", units: 19 },
      "AB-": { level: "Low", units: 6 },
      "O+": { level: "High", units: 97 },
      "O-": { level: "Medium", units: 29 },
    },
  },
]

export default function BloodBanksPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gray-50">
        <section className="bg-primary bg-opacity-5 py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl font-bold mb-4 text-center">Blood Banks Directory</h1>
              <p className="text-gray-600 text-center mb-8">
                Find blood banks and donation centers near you with current stock information
              </p>

              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Enter your location"
                        className="w-full p-3 pl-10 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="relative">
                      <select className="w-full p-3 pl-10 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary appearance-none">
                        <option value="">Filter by blood type</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                      </select>
                      <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    </div>
                  </div>
                  <button className="bg-primary text-white rounded-md px-6 py-3 font-medium flex items-center justify-center">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 md:px-6 py-12">
          <div className="mb-8 flex justify-between items-center">
            <h2 className="text-xl font-bold">Blood Banks ({bloodBanks.length})</h2>
            <div className="flex items-center">
              <span className="text-sm text-gray-600 mr-2">Sort by:</span>
              <select className="p-2 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary">
                <option>Distance</option>
                <option>Availability</option>
                <option>Name (A-Z)</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bloodBanks.map((bank) => {
              // Find critical blood types (low level)
              const criticalTypes = Object.entries(bank.stocks)
                .filter(([_, { level }]) => level === "Low")
                .map(([type, _]) => type)

              return (
                <div key={bank.id} className="bg-white rounded-lg shadow-md overflow-hidden">
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

                    {criticalTypes.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-sm font-medium mb-2">Critical Need:</h4>
                        <div className="flex flex-wrap gap-2">
                          {criticalTypes.map((type) => (
                            <div
                              key={type}
                              className="text-xs font-bold rounded-full bg-red-100 text-red-800 px-2 py-1"
                            >
                              {type}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex justify-between items-center">
                      <span className="text-sm">{bank.distance}</span>
                      <Link href={`/blood-banks/${bank.id}`}>
                        <button className="text-primary font-medium text-sm">View Details</button>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Can't find a blood bank near you? Contact us for assistance or to suggest a new location.
            </p>
            <Link href="/contact">
              <button className="bg-primary text-white rounded-md px-6 py-3 font-medium">Contact Us</button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

