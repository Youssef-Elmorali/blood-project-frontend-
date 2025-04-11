import Link from "next/link"
import { BookOpen, FileText, Video, Download, ExternalLink } from "lucide-react"
import Header from "../components/header"
import Footer from "../components/footer"

export default function EducationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary bg-opacity-5 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Blood Donation Education</h1>
              <p className="text-gray-600 mb-8">
                Learn about blood donation, its importance, and how your contribution can save lives.
              </p>
            </div>
          </div>
        </section>

        {/* Information Cards Section */}
        <section className="container mx-auto px-4 md:px-6 py-16">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Why Donate Blood?</h3>
              <p className="text-gray-600 mb-4">
                Blood donation is essential for surgeries, cancer treatments, chronic illnesses, and traumatic injuries.
                One donation can save up to three lives.
              </p>
              <Link href="#why-donate">
                <button className="text-primary font-medium flex items-center">
                  Learn more <ExternalLink className="h-4 w-4 ml-1" />
                </button>
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Donation Process</h3>
              <p className="text-gray-600 mb-4">
                The donation process is simple, safe, and takes only about an hour. Learn what to expect before, during,
                and after your donation.
              </p>
              <Link href="#donation-process">
                <button className="text-primary font-medium flex items-center">
                  Learn more <ExternalLink className="h-4 w-4 ml-1" />
                </button>
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <Video className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Educational Videos</h3>
              <p className="text-gray-600 mb-4">
                Watch our collection of educational videos about blood donation, blood types, and the impact of your
                donation.
              </p>
              <Link href="#videos">
                <button className="text-primary font-medium flex items-center">
                  Watch videos <ExternalLink className="h-4 w-4 ml-1" />
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Donate Section */}
        <section id="why-donate" className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">Why Blood Donation Matters</h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-medium mb-2">Constant Need</h3>
                  <p className="text-gray-600">
                    Every two seconds, someone in the world needs blood. The need for blood is constant and never goes
                    on holiday. Regular blood donations are needed to ensure that blood is available whenever and
                    wherever it is needed.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-medium mb-2">Limited Shelf Life</h3>
                  <p className="text-gray-600">
                    Blood components have a limited shelf life. Red blood cells can be stored for up to 42 days,
                    platelets for just 5 days, and plasma can be frozen for up to one year. This means a constant supply
                    of fresh blood is needed.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-medium mb-2">No Substitute</h3>
                  <p className="text-gray-600">
                    Despite medical advances, there is still no substitute for human blood. It cannot be manufactured or
                    produced artificially. The only source of blood is from volunteer donors like you.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-medium mb-2">Health Benefits</h3>
                  <p className="text-gray-600">
                    Donating blood can have health benefits for the donor as well. It can help reduce the risk of heart
                    disease, stimulate blood cell production, and provide a free mini health check-up.
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Link href="/donate">
                  <button className="bg-primary text-white rounded-md px-6 py-3 font-medium">
                    Schedule Your Donation
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Donation Process Section */}
        <section id="donation-process" className="container mx-auto px-4 md:px-6 py-16">
          <h2 className="text-2xl font-bold mb-12 text-center">The Donation Process</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>

                <div className="space-y-8">
                  <div className="relative">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center z-10 relative">
                          1
                        </div>
                      </div>
                      <div className="ml-6">
                        <h3 className="text-lg font-medium mb-2">Registration</h3>
                        <p className="text-gray-600">
                          You'll complete a registration form and show identification. This helps us maintain accurate
                          records and ensures your safety.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center z-10 relative">
                          2
                        </div>
                      </div>
                      <div className="ml-6">
                        <h3 className="text-lg font-medium mb-2">Health History</h3>
                        <p className="text-gray-600">
                          You'll answer questions about your health history in a private, confidential setting. This
                          helps determine if you're eligible to donate.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center z-10 relative">
                          3
                        </div>
                      </div>
                      <div className="ml-6">
                        <h3 className="text-lg font-medium mb-2">Mini-Physical</h3>
                        <p className="text-gray-600">
                          We'll check your temperature, pulse, blood pressure, and hemoglobin level to ensure you're
                          healthy enough to donate.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>

                <div className="space-y-8">
                  <div className="relative">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center z-10 relative">
                          4
                        </div>
                      </div>
                      <div className="ml-6">
                        <h3 className="text-lg font-medium mb-2">The Donation</h3>
                        <p className="text-gray-600">
                          The actual blood donation takes only 8-10 minutes. You'll be seated comfortably while a pint
                          of blood is drawn. The entire process is safe and sterile.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center z-10 relative">
                          5
                        </div>
                      </div>
                      <div className="ml-6">
                        <h3 className="text-lg font-medium mb-2">Refreshments</h3>
                        <p className="text-gray-600">
                          After donating, you'll rest and enjoy refreshments for 10-15 minutes. This allows your body to
                          adjust to the slight decrease in fluid volume.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center z-10 relative">
                          6
                        </div>
                      </div>
                      <div className="ml-6">
                        <h3 className="text-lg font-medium mb-2">Post-Donation Care</h3>
                        <p className="text-gray-600">
                          We'll provide instructions on how to care for yourself after donation, including drinking
                          plenty of fluids and avoiding strenuous activities for the rest of the day.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Videos Section */}
        <section id="videos" className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-12 text-center">Educational Videos</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "The Blood Donation Process",
                  description: "A step-by-step guide to what happens when you donate blood.",
                  duration: "4:32",
                },
                {
                  title: "Understanding Blood Types",
                  description: "Learn about different blood types and compatibility for transfusions.",
                  duration: "5:17",
                },
                {
                  title: "The Journey of Donated Blood",
                  description: "Follow the path of donated blood from collection to transfusion.",
                  duration: "6:45",
                },
                {
                  title: "Common Myths About Blood Donation",
                  description: "Debunking misconceptions that prevent people from donating.",
                  duration: "3:58",
                },
                {
                  title: "Preparing for Your Donation",
                  description: "Tips to ensure a successful and comfortable donation experience.",
                  duration: "4:12",
                },
                {
                  title: "Stories of Impact",
                  description: "Real stories from blood recipients whose lives were saved by donors.",
                  duration: "7:23",
                },
              ].map((video, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
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
                    <h3 className="font-medium mb-2">{video.title}</h3>
                    <p className="text-sm text-gray-600">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="container mx-auto px-4 md:px-6 py-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Educational Resources</h2>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium mb-4">Downloadable Materials</h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-md hover:bg-gray-50 transition-colors">
                  <div>
                    <h4 className="font-medium">Blood Donation Guide</h4>
                    <p className="text-sm text-gray-600">Comprehensive guide to blood donation process and benefits</p>
                  </div>
                  <button className="flex items-center text-primary">
                    <Download className="h-5 w-5 mr-1" /> PDF
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-md hover:bg-gray-50 transition-colors">
                  <div>
                    <h4 className="font-medium">Blood Type Compatibility Chart</h4>
                    <p className="text-sm text-gray-600">Visual guide to blood type compatibility for transfusions</p>
                  </div>
                  <button className="flex items-center text-primary">
                    <Download className="h-5 w-5 mr-1" /> PDF
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-md hover:bg-gray-50 transition-colors">
                  <div>
                    <h4 className="font-medium">Post-Donation Care Instructions</h4>
                    <p className="text-sm text-gray-600">Tips for taking care of yourself after donating blood</p>
                  </div>
                  <button className="flex items-center text-primary">
                    <Download className="h-5 w-5 mr-1" /> PDF
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-md hover:bg-gray-50 transition-colors">
                  <div>
                    <h4 className="font-medium">Nutrition for Blood Donors</h4>
                    <p className="text-sm text-gray-600">Dietary recommendations before and after blood donation</p>
                  </div>
                  <button className="flex items-center text-primary">
                    <Download className="h-5 w-5 mr-1" /> PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Make a Difference?</h2>
            <p className="text-white text-opacity-90 max-w-2xl mx-auto mb-8">
              Now that you understand the importance of blood donation, take the next step and schedule your appointment
              today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/donate">
                <button className="bg-white text-primary rounded-md px-6 py-3 font-medium">Donate Blood</button>
              </Link>
              <Link href="/faqs">
                <button className="bg-transparent text-white border border-white rounded-md px-6 py-3 font-medium">
                  Read FAQs
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

