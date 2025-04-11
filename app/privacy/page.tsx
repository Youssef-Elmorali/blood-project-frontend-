import Link from "next/link"
import Header from "../components/header"
import Footer from "../components/footer"

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary bg-opacity-5 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-gray-600 mb-8">
                We are committed to protecting your privacy and personal information.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="container mx-auto px-4 md:px-6 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="prose max-w-none">
                <h2>1. Introduction</h2>
                <p>
                  At Qatrah Hayat, we respect your privacy and are committed to protecting your personal information.
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
                  use our website, mobile application, and services.
                </p>

                <h2>2. Information We Collect</h2>
                <p>We collect several types of information from and about users of our Platform, including:</p>
                <ul>
                  <li>
                    <strong>Personal Information:</strong> Name, email address, phone number, date of birth, blood type,
                    gender, and location.
                  </li>
                  <li>
                    <strong>Health Information:</strong> For donors, we collect relevant health information to determine
                    eligibility for blood donation.
                  </li>
                  <li>
                    <strong>Usage Data:</strong> Information about how you use our Platform, including your browsing
                    actions and patterns.
                  </li>
                  <li>
                    <strong>Device Information:</strong> Information about your device, IP address, browser type, and
                    operating system.
                  </li>
                </ul>

                <h2>3. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Provide, maintain, and improve our Platform and services</li>
                  <li>Process and manage blood donation appointments and blood requests</li>
                  <li>Communicate with you about our services, updates, and promotions</li>
                  <li>Monitor and analyze usage patterns and trends</li>
                  <li>Protect the security and integrity of our Platform</li>
                  <li>Comply with legal obligations and enforce our terms</li>
                </ul>

                <h2>4. How We Share Your Information</h2>
                <p>We may share your information with:</p>
                <ul>
                  <li>
                    <strong>Healthcare Providers:</strong> To facilitate blood donation and transfusion processes.
                  </li>
                  <li>
                    <strong>Service Providers:</strong> Third-party vendors who perform services on our behalf.
                  </li>
                  <li>
                    <strong>Legal Authorities:</strong> When required by law or to protect our rights.
                  </li>
                </ul>
                <p>We do not sell your personal information to third parties for marketing purposes.</p>

                <h2>5. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information
                  against unauthorized access, alteration, disclosure, or destruction. However, no method of
                  transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute
                  security.
                </p>

                <h2>6. Your Rights</h2>
                <p>
                  Depending on your location, you may have certain rights regarding your personal information,
                  including:
                </p>
                <ul>
                  <li>The right to access and receive a copy of your personal information</li>
                  <li>The right to rectify or update your personal information</li>
                  <li>The right to delete your personal information</li>
                  <li>The right to restrict or object to processing of your personal information</li>
                  <li>The right to data portability</li>
                </ul>

                <h2>7. Children's Privacy</h2>
                <p>
                  Our Platform is not intended for children under 16 years of age. We do not knowingly collect personal
                  information from children under 16. If you are a parent or guardian and believe your child has
                  provided us with personal information, please contact us.
                </p>

                <h2>8. Changes to This Privacy Policy</h2>
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page and updating the "Last updated" date.
                </p>

                <h2>9. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at{" "}
                  <a href="mailto:privacy@qatrah-hayat.com" className="text-primary">
                    privacy@qatrah-hayat.com
                  </a>
                  .
                </p>

                <p className="text-sm text-gray-600 mt-8">Last updated: April 4, 2025</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link href="/terms">
                <button className="text-primary font-medium">View Terms and Conditions</button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

