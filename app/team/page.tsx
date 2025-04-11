import Link from "next/link"
import { Mail, Linkedin, Twitter } from "lucide-react"
import Header from "../components/header"
import Footer from "../components/footer"

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary bg-opacity-5 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h1>
              <p className="text-gray-600 mb-8">
                Meet the dedicated professionals working to make blood donation more accessible and efficient.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="container mx-auto px-4 md:px-6 py-16">
          <h2 className="text-2xl font-bold mb-12 text-center">Leadership Team</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Ahmed Hassan",
                role: "Founder & CEO",
                bio: "Dr. Hassan is a hematologist with over 15 years of experience. He founded Qatrah Hayat after witnessing firsthand the critical need for a more efficient blood donation system.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Aisha Patel",
                role: "Chief Operations Officer",
                bio: "With a background in healthcare administration, Aisha oversees the day-to-day operations of Qatrah Hayat, ensuring that our services run smoothly and efficiently.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Michael Chen",
                role: "Director of Operations",
                bio: "Michael brings extensive experience in logistics and supply chain management, helping to optimize our blood collection and distribution processes.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Sarah Johnson",
                role: "Chief Technology Officer",
                bio: "Sarah leads our technology team, developing innovative solutions to connect donors with recipients and streamline the donation process.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Dr. Fatima Al-Mansoori",
                role: "Medical Director",
                bio: "Dr. Al-Mansoori ensures that all our medical protocols meet the highest standards of safety and quality, protecting both donors and recipients.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "James Wilson",
                role: "Community Engagement Director",
                bio: "James works to build partnerships with community organizations, businesses, and schools to increase awareness about blood donation.",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-gray-500 hover:text-primary">
                      <Mail className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-primary">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-primary">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Medical Advisory Board */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-12 text-center">Medical Advisory Board</h2>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  name: "Dr. Emily Rodriguez",
                  specialty: "Hematology",
                  affiliation: "National Medical University",
                },
                {
                  name: "Dr. Raj Patel",
                  specialty: "Transfusion Medicine",
                  affiliation: "Central Hospital",
                },
                {
                  name: "Dr. Lisa Wong",
                  specialty: "Public Health",
                  affiliation: "Global Health Institute",
                },
                {
                  name: "Dr. Omar Al-Farsi",
                  specialty: "Emergency Medicine",
                  affiliation: "City Medical Center",
                },
                {
                  name: "Dr. John Smith",
                  specialty: "Oncology",
                  affiliation: "Cancer Research Center",
                },
                {
                  name: "Dr. Maria Gonzalez",
                  specialty: "Pediatric Hematology",
                  affiliation: "Children's Hospital",
                },
                {
                  name: "Dr. David Kim",
                  specialty: "Immunology",
                  affiliation: "University Research Hospital",
                },
                {
                  name: "Dr. Amina Hassan",
                  specialty: "Obstetrics & Gynecology",
                  affiliation: "Women's Health Center",
                },
              ].map((advisor, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-bold mb-1">{advisor.name}</h3>
                  <p className="text-primary text-sm mb-1">{advisor.specialty}</p>
                  <p className="text-gray-500 text-sm">{advisor.affiliation}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team Section */}
        <section className="container mx-auto px-4 md:px-6 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
            <p className="text-gray-600 mb-8">
              We're always looking for passionate individuals to join our mission of saving lives through blood
              donation. Check out our current openings or send us your resume.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/careers">
                <button className="bg-primary text-white rounded-md px-6 py-3 font-medium">View Open Positions</button>
              </Link>
              <Link href="/contact">
                <button className="bg-white border border-gray-300 text-gray-700 rounded-md px-6 py-3 font-medium">
                  Contact Us
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

