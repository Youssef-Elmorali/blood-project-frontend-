import Link from "next/link"
import { Heart, Users, Globe, Award, BarChart } from "lucide-react"
import Header from "../components/header"
import Footer from "../components/footer"

export default function ImpactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary bg-opacity-5 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h1>
              <p className="text-gray-600 mb-8">
                See how Qatrah Hayat is making a difference in communities and saving lives through blood donation.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Stats Section */}
        <section className="container mx-auto px-4 md:px-6 py-16">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-2">100,000+</h3>
              <p className="text-gray-600">Successful Donations</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-2">300,000+</h3>
              <p className="text-gray-600">Lives Saved</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-2">50+</h3>
              <p className="text-gray-600">Cities Served</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-2">95%</h3>
              <p className="text-gray-600">Donor Satisfaction</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Making a Difference</h2>
            <p className="text-gray-600 mb-8">
              Since our founding, we've been committed to increasing blood donation rates and ensuring that blood is
              available to anyone who needs it. Our platform has helped connect thousands of donors with recipients,
              streamlining the donation process and saving countless lives.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-64 bg-gray-100 rounded-md mb-4 flex items-center justify-center">
                <BarChart className="h-16 w-16 text-gray-400" />
                <span className="sr-only">Impact growth chart</span>
              </div>
              <p className="text-sm text-gray-500">
                Year-over-year growth in donations and lives saved through our platform
              </p>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-12 text-center">Success Stories</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah M.",
                  story:
                    "After a serious car accident, I needed multiple blood transfusions. Thanks to Qatrah Hayat's network of donors, the hospital had the blood I needed. I'm alive today because someone took the time to donate.",
                  image: "/placeholder.svg?height=300&width=300",
                },
                {
                  name: "Ahmed K.",
                  story:
                    "My daughter was diagnosed with leukemia and required regular blood transfusions during her treatment. The consistent supply of blood made possible by Qatrah Hayat's donors was crucial to her recovery.",
                  image: "/placeholder.svg?height=300&width=300",
                },
                {
                  name: "Maria L.",
                  story:
                    "As a regular blood donor, I never knew who received my donations until I joined a donor recognition event. Meeting recipients and hearing their stories made me realize the true impact of this simple act.",
                  image: "/placeholder.svg?height=300&width=300",
                },
              ].map((story, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <img
                        src={story.image || "/placeholder.svg"}
                        alt={story.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <h3 className="font-bold">{story.name}</h3>
                    </div>
                    <p className="text-gray-600 italic">"{story.story}"</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/stories">
                <button className="bg-primary text-white rounded-md px-6 py-3 font-medium">Read More Stories</button>
              </Link>
            </div>
          </div>
        </section>

        {/* Community Initiatives Section */}
        <section className="container mx-auto px-4 md:px-6 py-16">
          <h2 className="text-2xl font-bold mb-12 text-center">Community Initiatives</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-3">Blood Donation Awareness Campaigns</h3>
              <p className="text-gray-600 mb-4">
                We regularly organize awareness campaigns in schools, colleges, and community centers to educate people
                about the importance of blood donation and dispel common myths.
              </p>
              <img
                src="/placeholder.svg?height=200&width=400"
                alt="Blood donation awareness campaign"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <Link href="/initiatives">
                <button className="text-primary font-medium">Learn More</button>
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-3">Mobile Blood Drives</h3>
              <p className="text-gray-600 mb-4">
                Our mobile blood drives bring donation opportunities directly to communities, making it easier for
                people to donate, especially in underserved areas with limited access to blood banks.
              </p>
              <img
                src="/placeholder.svg?height=200&width=400"
                alt="Mobile blood drive"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <Link href="/initiatives">
                <button className="text-primary font-medium">Learn More</button>
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-3">Emergency Response Network</h3>
              <p className="text-gray-600 mb-4">
                Our emergency response network quickly mobilizes donors during crises and natural disasters, ensuring
                that blood supplies remain adequate when they're needed most.
              </p>
              <img
                src="/placeholder.svg?height=200&width=400"
                alt="Emergency response network"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <Link href="/initiatives">
                <button className="text-primary font-medium">Learn More</button>
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-3">Donor Recognition Program</h3>
              <p className="text-gray-600 mb-4">
                We celebrate and recognize our regular donors through various programs, including milestone
                acknowledgments, donor appreciation events, and opportunities to meet recipients.
              </p>
              <img
                src="/placeholder.svg?height=200&width=400"
                alt="Donor recognition program"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <Link href="/initiatives">
                <button className="text-primary font-medium">Learn More</button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Be Part of Our Impact</h2>
            <p className="text-white text-opacity-90 max-w-2xl mx-auto mb-8">
              Whether you're donating blood, volunteering your time, or spreading awareness, you can help us save more
              lives and make a positive impact in your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/donate">
                <button className="bg-white text-primary rounded-md px-6 py-3 font-medium">Donate Blood</button>
              </Link>
              <Link href="/volunteer">
                <button className="bg-transparent text-white border border-white rounded-md px-6 py-3 font-medium">
                  Volunteer With Us
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

