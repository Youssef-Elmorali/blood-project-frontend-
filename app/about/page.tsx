import Link from "next/link"
import { Heart, Users, Award } from "lucide-react"
import Header from "../components/header"
import Footer from "../components/footer"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary bg-opacity-5 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h1>
              <p className="text-gray-600 mb-8">
                Learn about our mission, vision, and the team behind Qatrah Hayat's life-saving work.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
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
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-600 mb-4">
                We envision a world where blood is readily available to anyone who needs it, regardless of location,
                socioeconomic status, or other barriers.
              </p>
              <p className="text-gray-600">
                By building a global community of regular donors and leveraging technology to streamline the donation
                and distribution process, we aim to eliminate preventable deaths caused by blood shortages.
              </p>
            </div>
          </div>
        </section>

        {/* History Timeline Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-12 text-center">Our Journey</h2>

            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform -translate-x-1/2"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                <div className="relative">
                  <div className="md:flex items-center">
                    <div className="md:w-1/2 pr-8 md:text-right">
                      <h3 className="text-xl font-bold text-primary">2015</h3>
                      <h4 className="text-lg font-medium mb-2">Foundation</h4>
                      <p className="text-gray-600">
                        Qatrah Hayat was founded by a group of medical professionals who witnessed firsthand the
                        critical need for a more efficient blood donation system.
                      </p>
                    </div>
                    <div className="hidden md:block absolute left-1/2 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center transform -translate-x-1/2">
                      <span className="font-bold">1</span>
                    </div>
                    <div className="md:w-1/2 pl-8 mt-4 md:mt-0">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="text-sm text-gray-600 italic">
                          "We started with a simple goal: to save lives by making blood donation easier and more
                          accessible."
                        </p>
                        <p className="text-sm font-medium mt-2">- Dr. Ahmed Hassan, Founder</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="md:flex items-center">
                    <div className="md:w-1/2 pr-8 md:text-right">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="text-sm text-gray-600 italic">
                          "The launch of our mobile app was a game-changer, connecting donors and recipients in
                          real-time."
                        </p>
                        <p className="text-sm font-medium mt-2">- Sarah Johnson, Tech Lead</p>
                      </div>
                    </div>
                    <div className="hidden md:block absolute left-1/2 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center transform -translate-x-1/2">
                      <span className="font-bold">2</span>
                    </div>
                    <div className="md:w-1/2 pl-8 mt-4 md:mt-0">
                      <h3 className="text-xl font-bold text-primary">2018</h3>
                      <h4 className="text-lg font-medium mb-2">Digital Transformation</h4>
                      <p className="text-gray-600">
                        We launched our digital platform, making it easier for donors to schedule appointments and for
                        patients to find blood when they need it most.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="md:flex items-center">
                    <div className="md:w-1/2 pr-8 md:text-right">
                      <h3 className="text-xl font-bold text-primary">2020</h3>
                      <h4 className="text-lg font-medium mb-2">National Expansion</h4>
                      <p className="text-gray-600">
                        We expanded our operations nationwide, partnering with hospitals, blood banks, and community
                        organizations to reach more donors and recipients.
                      </p>
                    </div>
                    <div className="hidden md:block absolute left-1/2 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center transform -translate-x-1/2">
                      <span className="font-bold">3</span>
                    </div>
                    <div className="md:w-1/2 pl-8 mt-4 md:mt-0">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="text-sm text-gray-600 italic">
                          "Despite the challenges of the pandemic, we saw an unprecedented surge in community support
                          and donations."
                        </p>
                        <p className="text-sm font-medium mt-2">- Michael Chen, Operations Director</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="md:flex items-center">
                    <div className="md:w-1/2 pr-8 md:text-right">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="text-sm text-gray-600 italic">
                          "Today, we're proud to have facilitated over 100,000 successful donations, but our work is far
                          from over."
                        </p>
                        <p className="text-sm font-medium mt-2">- Aisha Patel, CEO</p>
                      </div>
                    </div>
                    <div className="hidden md:block absolute left-1/2 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center transform -translate-x-1/2">
                      <span className="font-bold">4</span>
                    </div>
                    <div className="md:w-1/2 pl-8 mt-4 md:mt-0">
                      <h3 className="text-xl font-bold text-primary">Today</h3>
                      <h4 className="text-lg font-medium mb-2">Ongoing Impact</h4>
                      <p className="text-gray-600">
                        Today, Qatrah Hayat continues to innovate and expand, with a focus on reaching underserved
                        communities and improving the blood donation experience for everyone involved.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="container mx-auto px-4 md:px-6 py-16">
          <h2 className="text-2xl font-bold mb-12 text-center">Our Core Values</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Compassion</h3>
              <p className="text-sm text-gray-600">
                We approach our work with empathy and understanding, recognizing the human impact of every donation and
                transfusion.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Excellence</h3>
              <p className="text-sm text-gray-600">
                We strive for the highest standards in everything we do, from donor care to blood handling and
                distribution.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Community</h3>
              <p className="text-sm text-gray-600">
                We believe in the power of community and work to build connections between donors, recipients, and
                healthcare providers.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Join Our Mission</h2>
            <p className="text-white text-opacity-90 max-w-2xl mx-auto mb-8">
              Whether you're a donor, volunteer, or supporter, there are many ways to get involved and make a
              difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/donate">
                <button className="bg-white text-primary rounded-md px-6 py-3 font-medium">Donate Blood</button>
              </Link>
              <Link href="/team">
                <button className="bg-transparent text-white border border-white rounded-md px-6 py-3 font-medium">
                  Meet Our Team
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

