import Link from "next/link"
import { ChevronRight, Heart, Clock, Users } from "lucide-react"
import Header from "./components/header"
import Footer from "./components/footer"

export default function Home() {
  return (
  <>
      <Header />
    <div className="flex flex-col min-h-screen">

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
                Save Lives
                <br />
                Donate Blood
              </h1>
              <p className="text-sm text-gray-600 max-w-md">
                Your donation can save up to three lives. Every two seconds, someone needs blood. Join our community of
                donors and make a difference today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/find-blood">
                  <button className="bg-black text-white rounded-md px-6 py-3 font-medium w-full">Get Blood Now</button>
                </Link>
                <Link href="/donate">
                  <button className="bg-black text-white rounded-md px-6 py-3 font-medium w-full">Donate Now</button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Donate Section */}
        <section className="container mx-auto px-4 md:px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Why Donate Blood?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Blood donation is a simple process that takes about an hour of your time but can make a significant impact
              on someone's life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Save Lives</h3>
              <p className="text-sm text-gray-600">
                A single donation can save up to 3 lives. Blood is essential for surgeries, cancer treatment, chronic
                illnesses, and traumatic injuries.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Quick & Easy</h3>
              <p className="text-sm text-gray-600">
                The donation process takes less than an hour from start to finish. The actual blood draw only takes
                about 8-10 minutes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Community Impact</h3>
              <p className="text-sm text-gray-600">
                Join a community of donors making a difference. Every donation contributes to a healthier, stronger
                community.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Stats Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">Our Impact</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Through the generosity of our donors, we've been able to make a significant impact in our community.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                <p className="text-sm text-gray-600">Donations Collected</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">30,000+</div>
                <p className="text-sm text-gray-600">Lives Saved</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">5,000+</div>
                <p className="text-sm text-gray-600">Regular Donors</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <p className="text-sm text-gray-600">Blood Drives</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="container mx-auto px-4 md:px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At Qatrah Hayat, our mission is to ensure that everyone who needs blood has access to safe and
                sufficient blood supplies. We work tirelessly to connect donors with recipients and promote awareness
                about the importance of blood donation.
              </p>
              <p className="text-gray-600 mb-6">
                We believe that no one should die due to a lack of blood. Through education, community outreach, and
                innovative technology, we're making blood donation more accessible and efficient than ever before.
              </p>
              <Link href="/about">
                <button className="flex items-center text-primary font-medium">
                  Learn more about us <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </Link>
            </div>
            <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
              <span className="text-gray-500">Mission Video</span>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-primary bg-opacity-5 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">How It Works</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Donating blood is a simple and straightforward process. Here's what you can expect.
              </p>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>

              <div className="grid md:grid-cols-4 gap-8 relative z-10">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-primary text-primary flex items-center justify-center mb-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="text-lg font-medium mb-2">Registration</h3>
                  <p className="text-sm text-gray-600">
                    Sign up online or in person and complete a brief health questionnaire
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-primary text-primary flex items-center justify-center mb-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="text-lg font-medium mb-2">Screening</h3>
                  <p className="text-sm text-gray-600">
                    Quick health check including temperature, pulse, blood pressure, and hemoglobin
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-primary text-primary flex items-center justify-center mb-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="text-lg font-medium mb-2">Donation</h3>
                  <p className="text-sm text-gray-600">
                    The actual blood donation takes only 8-10 minutes in a safe, clean environment
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-primary text-primary flex items-center justify-center mb-4 text-xl font-bold">
                    4
                  </div>
                  <h3 className="text-lg font-medium mb-2">Refreshments</h3>
                  <p className="text-sm text-gray-600">
                    Enjoy refreshments and relax for 15 minutes before heading back to your day
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/donate">
                <button className="bg-primary text-white rounded-md px-6 py-3 font-medium">
                  Schedule Your Donation
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container mx-auto px-4 md:px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Donor Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from people whose lives have been touched by blood donation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <h3 className="font-medium">Sarah Johnson</h3>
                  <p className="text-sm text-gray-600">Regular Donor</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 italic">
                "I've been donating blood for over 5 years now. It's such a simple way to make a huge difference. The
                staff are always friendly and the process is quick and easy."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <h3 className="font-medium">Michael Chen</h3>
                  <p className="text-sm text-gray-600">Blood Recipient</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 italic">
                "After my accident, I needed multiple blood transfusions. I'm alive today because strangers took the
                time to donate blood. Now I donate regularly to pay it forward."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <h3 className="font-medium">Aisha Patel</h3>
                  <p className="text-sm text-gray-600">First-Time Donor</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 italic">
                "I was nervous about donating for the first time, but the staff made me feel so comfortable. It was much
                easier than I expected, and knowing I helped save lives made it all worthwhile."
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Blood Drives */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">Upcoming Blood Drives</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Find a blood drive near you and schedule your donation.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-medium">Community Center Drive</h3>
                    <p className="text-sm text-gray-600">123 Main Street</p>
                  </div>
                  <div className="bg-primary bg-opacity-10 text-primary text-sm font-medium px-3 py-1 rounded">
                    Jun 15
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">9:00 AM - 4:00 PM</p>
                <Link href="/donate">
                  <button className="text-primary text-sm font-medium">Schedule Appointment</button>
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-medium">University Campus</h3>
                    <p className="text-sm text-gray-600">456 College Ave</p>
                  </div>
                  <div className="bg-primary bg-opacity-10 text-primary text-sm font-medium px-3 py-1 rounded">
                    Jun 22
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">10:00 AM - 3:00 PM</p>
                <Link href="/donate">
                  <button className="text-primary text-sm font-medium">Schedule Appointment</button>
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-medium">Corporate Office</h3>
                    <p className="text-sm text-gray-600">789 Business Pkwy</p>
                  </div>
                  <div className="bg-primary bg-opacity-10 text-primary text-sm font-medium px-3 py-1 rounded">
                    Jun 30
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">11:00 AM - 5:00 PM</p>
                <Link href="/donate">
                  <button className="text-primary text-sm font-medium">Schedule Appointment</button>
                </Link>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link href="/blood-drives">
                <button className="text-primary font-medium flex items-center mx-auto">
                  View All Blood Drives <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Make a Difference?</h2>
            <p className="text-white text-opacity-90 max-w-2xl mx-auto mb-8">
              Your donation can save up to three lives. Schedule your appointment today or find a blood drive near you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/donate">
                <button className="bg-white text-primary rounded-md px-6 py-3 font-medium">Donate Blood</button>
              </Link>
              <Link href="/find-blood">
                <button className="bg-transparent text-white border border-white rounded-md px-6 py-3 font-medium">
                  Find Blood
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

    </div>
      <Footer />
      </>
  )
}

