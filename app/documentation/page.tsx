import Link from "next/link"
import { FileText, Book, Search, Download, ChevronRight } from "lucide-react"
import Header from "../components/header"
import Footer from "../components/footer"

export default function DocumentationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary bg-opacity-5 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Documentation</h1>
              <p className="text-gray-600 mb-8">
                Comprehensive guides and resources for donors, recipients, and healthcare partners.
              </p>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="container mx-auto px-4 md:px-6 py-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full p-4 pl-12 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="container mx-auto px-4 md:px-6 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">For Donors</h3>
              <p className="text-gray-600 mb-4">
                Everything you need to know about donating blood, from eligibility requirements to post-donation care.
              </p>
              <ul className="space-y-2 mb-4">
                <li>
                  <Link href="/documentation/donor-eligibility">
                    <span className="text-primary hover:underline flex items-center">
                      Donor Eligibility <ChevronRight className="h-4 w-4 ml-1" />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/documentation/donation-process">
                    <span className="text-primary hover:underline flex items-center">
                      Donation Process <ChevronRight className="h-4 w-4 ml-1" />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/documentation/post-donation-care">
                    <span className="text-primary hover:underline flex items-center">
                      Post-Donation Care <ChevronRight className="h-4 w-4 ml-1" />
                    </span>
                  </Link>
                </li>
              </ul>
              <Link href="/documentation/donors">
                <button className="text-primary font-medium">View All Donor Resources</button>
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <Book className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">For Recipients</h3>
              <p className="text-gray-600 mb-4">
                Guides for patients and families on requesting blood, understanding blood types, and transfusion
                process.
              </p>
              <ul className="space-y-2 mb-4">
                <li>
                  <Link href="/documentation/requesting-blood">
                    <span className="text-primary hover:underline flex items-center">
                      Requesting Blood <ChevronRight className="h-4 w-4 ml-1" />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/documentation/blood-types">
                    <span className="text-primary hover:underline flex items-center">
                      Blood Types & Compatibility <ChevronRight className="h-4 w-4 ml-1" />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/documentation/transfusion-process">
                    <span className="text-primary hover:underline flex items-center">
                      Transfusion Process <ChevronRight className="h-4 w-4 ml-1" />
                    </span>
                  </Link>
                </li>
              </ul>
              <Link href="/documentation/recipients">
                <button className="text-primary font-medium">View All Recipient Resources</button>
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">For Healthcare Partners</h3>
              <p className="text-gray-600 mb-4">
                Resources for healthcare professionals, blood banks, and partner organizations.
              </p>
              <ul className="space-y-2 mb-4">
                <li>
                  <Link href="/documentation/partnership-guidelines">
                    <span className="text-primary hover:underline flex items-center">
                      Partnership Guidelines <ChevronRight className="h-4 w-4 ml-1" />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/documentation/blood-drive-organization">
                    <span className="text-primary hover:underline flex items-center">
                      Blood Drive Organization <ChevronRight className="h-4 w-4 ml-1" />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/documentation/api-integration">
                    <span className="text-primary hover:underline flex items-center">
                      API Integration <ChevronRight className="h-4 w-4 ml-1" />
                    </span>
                  </Link>
                </li>
              </ul>
              <Link href="/documentation/healthcare-partners">
                <button className="text-primary font-medium">View All Partner Resources</button>
              </Link>
            </div>
          </div>
        </section>

        {/* Popular Resources Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-12 text-center">Popular Resources</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Blood Donation Guide",
                  description: "A comprehensive guide to the blood donation process, from preparation to recovery.",
                  type: "PDF",
                  size: "2.4 MB",
                },
                {
                  title: "Blood Type Compatibility Chart",
                  description: "Visual guide to blood type compatibility for transfusions.",
                  type: "PDF",
                  size: "1.2 MB",
                },
                {
                  title: "Donor Eligibility Checklist",
                  description: "A checklist to help determine if you're eligible to donate blood.",
                  type: "PDF",
                  size: "0.8 MB",
                },
                {
                  title: "Post-Donation Care Instructions",
                  description: "Instructions for taking care of yourself after donating blood.",
                  type: "PDF",
                  size: "1.5 MB",
                },
              ].map((resource, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium mb-2">{resource.title}</h3>
                      <p className="text-gray-600 mb-4">{resource.description}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="mr-4">{resource.type}</span>
                        <span>{resource.size}</span>
                      </div>
                    </div>
                    <button className="flex items-center text-primary">
                      <Download className="h-5 w-5 mr-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Tutorials Section */}
        <section className="container mx-auto px-4 md:px-6 py-16">
          <h2 className="text-2xl font-bold mb-12 text-center">Video Tutorials</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "How to Register as a Donor",
                duration: "3:45",
              },
              {
                title: "Navigating the Donor Dashboard",
                duration: "5:12",
              },
              {
                title: "Submitting a Blood Request",
                duration: "4:30",
              },
            ].map((video, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary bg-opacity-90 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/documentation/videos">
              <button className="text-primary font-medium">View All Video Tutorials</button>
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h2>
              <p className="text-gray-600 mb-8">
                Check our frequently asked questions or contact our support team for assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/faqs">
                  <button className="bg-primary text-white rounded-md px-6 py-3 font-medium">View FAQs</button>
                </Link>
                <Link href="/contact">
                  <button className="bg-white border border-gray-300 text-gray-700 rounded-md px-6 py-3 font-medium">
                    Contact Support
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

