import Link from "next/link"
import Header from "../components/header"
import Footer from "../components/footer"

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary bg-opacity-5 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms and Conditions</h1>
              <p className="text-gray-600 mb-8">
                Please read these terms and conditions carefully before using our services.
              </p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="container mx-auto px-4 md:px-6 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="prose max-w-none">
                <h2>1. Introduction</h2>
                <p>
                  Welcome to Qatrah Hayat. These Terms and Conditions govern your use of our website, mobile
                  application, and services. By accessing or using our platform, you agree to be bound by these Terms.
                </p>

                <h2>2. Definitions</h2>
                <p>
                  "Platform" refers to the Qatrah Hayat website, mobile application, and related services. "User" refers
                  to any individual who accesses or uses the Platform. "Donor" refers to any individual who registers to
                  donate blood through our Platform. "Recipient" refers to any individual or organization requesting
                  blood through our Platform.
                </p>

                <h2>3. Account Registration</h2>
                <p>
                  To use certain features of our Platform, you may need to register for an account. You agree to provide
                  accurate, current, and complete information during the registration process and to update such
                  information to keep it accurate, current, and complete.
                </p>
                <p>
                  You are responsible for safeguarding your password and for all activities that occur under your
                  account. You agree to notify us immediately of any unauthorized use of your account.
                </p>

                <h2>4. Blood Donation and Requests</h2>
                <p>
                  <strong>For Donors:</strong> By registering as a donor, you confirm that you meet the eligibility
                  requirements for blood donation. You agree to provide accurate health information and to follow all
                  guidelines and instructions provided by healthcare professionals during the donation process.
                </p>
                <p>
                  <strong>For Recipients:</strong> When requesting blood, you agree to provide accurate information
                  about the patient and the blood requirement. You understand that the availability of blood cannot be
                  guaranteed and depends on various factors including blood type availability and donor eligibility.
                </p>

                <h2>5. Privacy</h2>
                <p>
                  Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your
                  personal information. By using our Platform, you consent to the collection and use of your information
                  as described in our Privacy Policy.
                </p>

                <h2>6. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, Qatrah Hayat shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred
                  directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from
                  your use or inability to use the Platform.
                </p>

                <h2>7. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. If we make changes, we will provide notice by
                  posting the updated Terms on our Platform. Your continued use of the Platform after such notice
                  constitutes your acceptance of the updated Terms.
                </p>

                <h2>8. Contact Us</h2>
                <p>
                  If you have any questions about these Terms, please contact us at{" "}
                  <a href="mailto:legal@qatrah-hayat.com" className="text-primary">
                    legal@qatrah-hayat.com
                  </a>
                  .
                </p>

                <p className="text-sm text-gray-600 mt-8">Last updated: April 4, 2025</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link href="/privacy">
                <button className="text-primary font-medium">View Privacy Policy</button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

