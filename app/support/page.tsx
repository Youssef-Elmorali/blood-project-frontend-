import Link from "next/link"
import { MessageSquare, Phone, Mail, FileText, HelpCircle, ExternalLink } from "lucide-react"
import Header from "../components/header"
import Footer from "../components/footer"

export default function SupportPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary bg-opacity-5 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Support Center</h1>
              <p className="text-gray-600 mb-8">
                We're here to help. Find answers to your questions or contact our support team.
              </p>
            </div>
          </div>
        </section>

        {/* Support Options Section */}
        <section className="container mx-auto px-4 md:px-6 py-16">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">
                Chat with our support team in real-time for immediate assistance with your questions.
              </p>
              <button className="text-primary font-medium">Start Chat</button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Phone Support</h3>
              <p className="text-gray-600 mb-4">
                Call our support team for personalized assistance with urgent matters.
              </p>
              <a href="tel:+11234567890" className="text-primary font-medium">
                +1 (123) 456-7890
              </a>
              <p className="text-sm text-gray-500 mt-1">Mon-Fri, 8am-6pm</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">Send us an email and we'll get back to you within 24 hours.</p>
              <a href="mailto:support@qatrah-hayat.com" className="text-primary font-medium">
                support@qatrah-hayat.com
              </a>
            </div>
          </div>

          {/* Common Issues Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Common Issues</h2>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="border-b p-6">
                <h3 className="text-lg font-medium mb-2">I'm having trouble scheduling a donation</h3>
                <p className="text-gray-600 mb-4">
                  If you're experiencing issues with scheduling a blood donation appointment, try the following:
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>Make sure you're logged into your account</li>
                  <li>Check that you've completed all required profile information</li>
                  <li>Ensure you meet the eligibility criteria for donation</li>
                  <li>Try using a different browser or device</li>
                </ul>
                <Link href="/faqs#donation-faqs">
                  <button className="text-primary font-medium mt-4 flex items-center">
                    View related FAQs <ExternalLink className="h-4 w-4 ml-1" />
                  </button>
                </Link>
              </div>

              <div className="border-b p-6">
                <h3 className="text-lg font-medium mb-2">I need to cancel or reschedule my appointment</h3>
                <p className="text-gray-600 mb-4">
                  You can cancel or reschedule your appointment through your account dashboard. Navigate to "My
                  Appointments" and select the appointment you wish to modify. If you're within 24 hours of your
                  appointment, please call us directly.
                </p>
                <Link href="/faqs#donation-faqs">
                  <button className="text-primary font-medium mt-4 flex items-center">
                    View related FAQs <ExternalLink className="h-4 w-4 ml-1" />
                  </button>
                </Link>
              </div>

              <div className="border-b p-6">
                <h3 className="text-lg font-medium mb-2">I need help with a blood request</h3>
                <p className="text-gray-600 mb-4">
                  For assistance with blood requests, especially urgent ones, please call our emergency hotline at +1
                  (123) 456-7890. For non-urgent requests, you can submit a request through your account or contact our
                  support team via email.
                </p>
                <Link href="/faqs#recipient-faqs">
                  <button className="text-primary font-medium mt-4 flex items-center">
                    View related FAQs <ExternalLink className="h-4 w-4 ml-1" />
                  </button>
                </Link>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-medium mb-2">I'm having technical issues with the website or app</h3>
                <p className="text-gray-600 mb-4">
                  If you're experiencing technical difficulties, try clearing your browser cache, updating your app, or
                  using a different browser. If the issue persists, please contact our technical support team with
                  details about the problem, including any error messages you receive.
                </p>
                <Link href="/contact">
                  <button className="text-primary font-medium mt-4 flex items-center">
                    Contact Technical Support <ExternalLink className="h-4 w-4 ml-1" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-12 text-center">Support Resources</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <FileText className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-lg font-medium">Documentation</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Browse our comprehensive documentation for detailed guides on using our platform, donation processes,
                  and more.
                </p>
                <Link href="/documentation">
                  <button className="text-primary font-medium">View Documentation</button>
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <HelpCircle className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-lg font-medium">FAQs</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Find answers to commonly asked questions about blood donation, receiving blood, and our services.
                </p>
                <Link href="/faqs">
                  <button className="text-primary font-medium">View FAQs</button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="container mx-auto px-4 md:px-6 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Still Need Help?</h2>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <form>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input
                      type="text"
                      className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium mb-1">Subject</label>
                  <select className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary">
                    <option value="">Select a subject</option>
                    <option value="account">Account Issues</option>
                    <option value="donation">Donation Process</option>
                    <option value="request">Blood Request</option>
                    <option value="technical">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary h-32"
                    placeholder="Please describe your issue in detail"
                  ></textarea>
                </div>

                <button type="submit" className="w-full bg-primary text-white rounded-md py-3 font-medium">
                  Submit Support Request
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

