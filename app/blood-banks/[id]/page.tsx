import Link from "next/link"
import { MapPin, Phone, Clock, ArrowLeft, AlertCircle } from "lucide-react"
import Header from "../../components/header"
import Footer from "../../components/footer"

// This would typically come from a database
const bloodBanks = [
  {
    id: 1,
    name: "Central Blood Bank",
    address: "123 Medical Center Drive, City, State 12345",
    phone: "(123) 456-7890",
    hours: "Open 24 hours",
    description:
      "The Central Blood Bank is a state-of-the-art facility providing blood collection, testing, and distribution services to hospitals and medical centers throughout the region. We maintain a comprehensive inventory of all blood types and components to meet emergency and routine transfusion needs.",
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
    services: [
      "Whole Blood Donation",
      "Platelet Donation",
      "Plasma Donation",
      "Double Red Cell Donation",
      "Blood Type Testing",
      "Antibody Screening",
    ],
  },
  {
    id: 2,
    name: "University Hospital Blood Center",
    address: "456 College Ave, University District",
    phone: "(123) 789-0123",
    hours: "8:00 AM - 8:00 PM",
    description:
      "Located within the University Hospital complex, our blood center serves the critical needs of patients in our trauma center, surgical units, and oncology department. We also support medical research and education programs within the university.",
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
    services: [
      "Whole Blood Donation",
      "Platelet Donation",
      "Therapeutic Phlebotomy",
      "Blood Type Testing",
      "Donor Registry",
      "Mobile Blood Drives",
    ],
  },
  {
    id: 3,
    name: "Community Donation Center",
    address: "789 Main Street, Downtown",
    phone: "(123) 321-6540",
    hours: "9:00 AM - 5:00 PM",
    description:
      "Our community-focused donation center makes blood donation accessible and convenient for local residents. We host regular blood drives and educational events to raise awareness about the importance of blood donation in saving lives.",
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
    services: [
      "Whole Blood Donation",
      "Blood Type Testing",
      "Community Education",
      "Group Donation Events",
      "Donor Recognition Programs",
      "First-Time Donor Support",
    ],
  },
]

export default function BloodBankDetailsPage({ params }: { params: { id: string } }) {
  const id = Number.parseInt(params.id)
  const bloodBank = bloodBanks.find((bank) => bank.id === id) || bloodBanks[0]

  // Function to determine the color based on stock level
  const getStockLevelColor = (level: string) => {
    switch (level) {
      case "High":
        return "bg-green-100 text-green-800 border-green-300"
      case "Medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-300"
      case "Low":
        return "bg-red-100 text-red-800 border-red-300"
      default:
        return "bg-gray-100 text-gray-800 border-gray-300"
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <Link href="/find-blood" className="inline-flex items-center text-primary mb-6">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Blood Banks
          </Link>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">Map View</div>
            </div>

            <div className="p-6">
              <h1 className="text-2xl font-bold mb-4">{bloodBank.name}</h1>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-gray-600 mb-4">{bloodBank.description}</p>

                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>{bloodBank.address}</span>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>{bloodBank.phone}</span>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>{bloodBank.hours}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-medium mb-3">Services Offered</h2>
                  <ul className="space-y-2">
                    {bloodBank.services.map((service, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t pt-6">
                <h2 className="text-lg font-medium mb-4">Current Blood Stock Levels</h2>

                {Object.entries(bloodBank.stocks).some(([_, { level }]) => level === "Low") && (
                  <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6 flex items-start">
                    <AlertCircle className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-medium text-red-800">Critical Shortage Alert</h3>
                      <p className="text-sm text-red-700 mt-1">
                        We're experiencing shortages in some blood types. If you're eligible to donate, please consider
                        scheduling an appointment.
                      </p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(bloodBank.stocks).map(([type, { level, units }]) => (
                    <div key={type} className={`border rounded-md p-4 ${getStockLevelColor(level)}`}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-2xl font-bold">{type}</span>
                        <span className="text-sm font-medium px-2 py-1 rounded-full bg-white bg-opacity-50">
                          {level}
                        </span>
                      </div>
                      <div className="flex items-end justify-between">
                        <span className="text-sm">Available Units</span>
                        <span className="text-xl font-semibold">{units}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/donate">
                    <button className="bg-primary text-white rounded-md px-6 py-3 font-medium w-full">
                      Donate Blood
                    </button>
                  </Link>
                  <Link href="/contact">
                    <button className="bg-white border border-primary text-primary rounded-md px-6 py-3 font-medium w-full">
                      Contact This Blood Bank
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-bold mb-6">Other Blood Banks Nearby</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {bloodBanks
                .filter((bank) => bank.id !== id)
                .map((bank) => (
                  <div key={bank.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="p-6">
                      <h3 className="text-lg font-medium mb-2">{bank.name}</h3>
                      <div className="space-y-2 text-sm text-gray-600 mb-4">
                        <div className="flex items-start">
                          <MapPin className="h-5 w-5 text-primary mr-2 shrink-0" />
                          <span>{bank.address}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-medium mb-2">Critical Blood Types:</h4>
                        <div className="flex gap-2">
                          {Object.entries(bank.stocks)
                            .filter(([_, { level }]) => level === "Low")
                            .slice(0, 3)
                            .map(([type, _]) => (
                              <div
                                key={type}
                                className="text-xs font-bold rounded-full bg-red-100 text-red-800 px-2 py-1"
                              >
                                {type}
                              </div>
                            ))}
                        </div>
                      </div>

                      <Link href={`/blood-banks/${bank.id}`}>
                        <button className="text-primary font-medium text-sm">View Details</button>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

