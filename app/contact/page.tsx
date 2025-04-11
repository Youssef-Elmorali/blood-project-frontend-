import Link from "next/link"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Header from "../components/header"
import Footer from "../components/footer"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary bg-opacity-5 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
              <p className="text-gray-600 mb-8">
                Have questions or need assistance? We're here to help. Reach out to our team.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="container mx-auto px-4 md:px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Whether you have questions about blood donation, need assistance with our platform, or want to explore
                partnership opportunities, our team is ready to assist you.
              </p>

              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium mb-1">Our Location</h3>
                    <p className="text-gray-600">
                      123 Blood Donation Street
                      <br />
                      New York, NY 10001
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium mb-1">Phone</h3>
                    <p className="text-gray-600">
                      Main:{" "}
                      <a href="tel:+11234567890" className="hover:text-primary">
                        +1 (123) 456-7890
                      </a>
                      <br />
                      Emergency Hotline:{" "}
                      <a href="tel:+18001234567" className="hover:text-primary">
                        +1 (800) 123-4567
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium mb-1">Email</h3>
                    <p className="text-gray-600">
                      General Inquiries:{" "}
                      <a href="mailto:info@qatrah-hayat.com" className="hover:text-primary">
                        info@qatrah-hayat.com
                      </a>
                      <br />
                      Support:{" "}
                      <a href="mailto:support@qatrah-hayat.com" className="hover:text-primary">
                        support@qatrah-hayat.com
                      </a>
                      <br />
                      Media:{" "}
                      <a href="mailto:media@qatrah-hayat.com" className="hover:text-primary">
                        media@qatrah-hayat.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium mb-1">Hours of Operation</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 3:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-6">Send Us a Message</h2>
                <form>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium mb-1">First Name</label>
                      <input
                        type="text"
                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Last Name</label>
                      <input
                        type="text"
                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-1">Phone</label>
                    <input
                      type="tel"
                      className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-1">Subject</label>
                    <select className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary">
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="donation">Blood Donation</option>
                      <option value="request">Blood Request</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-1">Message</label>
                    <textarea
                      className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary h-32"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button type="submit" className="w-full bg-primary text-white rounded-md py-3 font-medium">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8 text-center">Find Us</h2>
            <div className="h-96 bg-gray-300 rounded-lg">
              {/* Map placeholder - would be replaced with actual map integration */}
              <div className="h-full flex items-center justify-center">
                <MapPin className="h-12 w-12 text-gray-500" />
                <span className="sr-only">Map location</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 md:px-6 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 mb-8">
              Find quick answers to common questions about contacting us and our response times.
            </p>
            <Link href="/faqs">
              <button className="bg-primary text-white rounded-md px-6 py-3 font-medium">View All FAQs</button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

