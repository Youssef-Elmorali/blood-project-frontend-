import Link from "next/link"
import { Clock, MapPin, Briefcase, ChevronRight } from "lucide-react"
import Header from "../components/header"
import Footer from "../components/footer"

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary bg-opacity-5 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Join Our Mission</h1>
              <p className="text-gray-600 mb-8">
                Build a career with purpose. Help us save lives through blood donation.
              </p>
            </div>
          </div>
        </section>

        {/* Why Work With Us Section */}
        <section className="container mx-auto px-4 md:px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-6">Why Work With Us</h2>
              <p className="text-gray-600 mb-4">
                At Qatrah Hayat, we're more than just a blood donation platform. We're a team of passionate individuals
                dedicated to saving lives and making a difference in our communities.
              </p>
              <p className="text-gray-600 mb-6">
                We offer a collaborative and inclusive work environment where innovation is encouraged, and your
                contributions have a direct impact on our mission.
              </p>

              <h3 className="text-lg font-bold mb-3">Benefits & Perks</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                  <span>Competitive salary and comprehensive health benefits</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                  <span>Flexible work arrangements and generous paid time off</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                  <span>Professional development opportunities and continuing education</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                  <span>Wellness programs and team-building activities</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                  <span>Volunteer opportunities and community engagement</span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Team working together"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        {/* Current Openings Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-12 text-center">Current Openings</h2>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  title: "Medical Coordinator",
                  department: "Medical Operations",
                  location: "New York, NY",
                  type: "Full-time",
                },
                {
                  title: "Mobile App Developer",
                  department: "Technology",
                  location: "Remote",
                  type: "Full-time",
                },
                {
                  title: "Community Outreach Specialist",
                  department: "Community Engagement",
                  location: "Chicago, IL",
                  type: "Full-time",
                },
                {
                  title: "Blood Drive Coordinator",
                  department: "Operations",
                  location: "Los Angeles, CA",
                  type: "Full-time",
                },
                {
                  title: "Marketing Specialist",
                  department: "Marketing",
                  location: "Remote",
                  type: "Full-time",
                },
                {
                  title: "Donor Relations Associate",
                  department: "Donor Services",
                  location: "Boston, MA",
                  type: "Part-time",
                },
              ].map((job, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Briefcase className="h-4 w-4 mr-1" />
                        <span className="text-sm">{job.department}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{job.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="text-sm">{job.type}</span>
                      </div>
                    </div>
                    <Link href={`/careers/${job.title.toLowerCase().replace(/\s+/g, "-")}`}>
                      <button className="text-primary font-medium flex items-center">
                        View Details <ChevronRight className="h-4 w-4 ml-1" />
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Don't see a position that matches your skills?</p>
              <Link href="/contact">
                <button className="bg-primary text-white rounded-md px-6 py-3 font-medium">Send Us Your Resume</button>
              </Link>
            </div>
          </div>
        </section>

        {/* Our Hiring Process Section */}
        <section className="container mx-auto px-4 md:px-6 py-16">
          <h2 className="text-2xl font-bold mb-12 text-center">Our Hiring Process</h2>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>

              <div className="space-y-12">
                <div className="relative">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center z-10 relative">
                        1
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-lg font-medium mb-2">Application Review</h3>
                      <p className="text-gray-600">
                        Our recruitment team reviews all applications and selects candidates whose qualifications and
                        experience align with the position requirements.
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
                      <h3 className="text-lg font-medium mb-2">Initial Interview</h3>
                      <p className="text-gray-600">
                        Selected candidates are invited for an initial interview, which may be conducted virtually or in
                        person, to discuss their experience, skills, and interest in the role.
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
                      <h3 className="text-lg font-medium mb-2">Skills Assessment</h3>
                      <p className="text-gray-600">
                        Depending on the role, candidates may be asked to complete a skills assessment or practical
                        exercise to demonstrate their abilities.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center z-10 relative">
                        4
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-lg font-medium mb-2">Team Interview</h3>
                      <p className="text-gray-600">
                        Successful candidates meet with potential team members and supervisors to assess cultural fit
                        and discuss the role in more detail.
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
                      <h3 className="text-lg font-medium mb-2">Offer & Onboarding</h3>
                      <p className="text-gray-600">
                        Selected candidates receive a job offer, and upon acceptance, begin our comprehensive onboarding
                        process to set them up for success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

