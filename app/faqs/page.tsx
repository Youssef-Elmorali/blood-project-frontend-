"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ChevronUp, Search } from "lucide-react"
import Header from "../components/header"
import Footer from "../components/footer"

// FAQ Item component
const FAQItem = ({
  question,
  answer,
  isOpen,
  toggleOpen,
}: {
  question: string
  answer: string
  isOpen: boolean
  toggleOpen: () => void
}) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-4 text-left font-medium focus:outline-none"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
        )}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-4" : "max-h-0"}`}>
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  )
}

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState("donor")
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const donorFAQs = [
    {
      question: "Who can donate blood?",
      answer:
        "Most healthy adults who are at least 17 years old (16 with parental consent in some states), weigh at least 110 pounds, and are in good health can donate blood. Some medical conditions, medications, or recent travel may temporarily or permanently disqualify you from donating.",
    },
    {
      question: "How often can I donate blood?",
      answer:
        "You can donate whole blood every 56 days (8 weeks). If you donate platelets, you can give every 7 days up to 24 times a year. Plasma donors can donate every 28 days, and double red cell donors can give every 112 days.",
    },
    {
      question: "Does blood donation hurt?",
      answer:
        "Most donors report feeling only a brief pinch when the needle is inserted. Our trained phlebotomists work to make the experience as comfortable as possible. The actual blood donation typically takes only 8-10 minutes.",
    },
    {
      question: "How should I prepare for blood donation?",
      answer:
        "Before donating, make sure to eat a healthy meal, stay hydrated by drinking plenty of water, get a good night's sleep, and wear comfortable clothing with sleeves that can be rolled up. Avoid fatty foods, as they can affect blood tests and potentially prevent donation.",
    },
    {
      question: "How long does the donation process take?",
      answer:
        "The entire process takes about an hour from registration to refreshments. The actual blood donation typically takes only 8-10 minutes, while the rest of the time is spent on registration, health screening, and post-donation recovery.",
    },
    {
      question: "What happens to my blood after donation?",
      answer:
        "After donation, your blood is processed and tested for infectious diseases. It is then separated into components (red cells, platelets, and plasma), stored under appropriate conditions, and distributed to hospitals and medical facilities where it's needed.",
    },
    {
      question: "Will I know my blood type after donating?",
      answer:
        "Yes, first-time donors will be notified of their blood type. Returning donors can access their blood type information through our donor portal or mobile app.",
    },
  ]

  const recipientFAQs = [
    {
      question: "How do I request blood for a patient?",
      answer:
        "Blood requests should be made through the patient's healthcare provider or hospital. In emergency situations, you can contact our emergency hotline. Our team will work with the medical facility to fulfill the request as quickly as possible.",
    },
    {
      question: "What information is needed for a blood request?",
      answer:
        "To process a blood request, we need the patient's name, blood type (if known), the quantity needed, the medical facility where the patient is being treated, and contact information for the healthcare provider and family member.",
    },
    {
      question: "How long does it take to fulfill a blood request?",
      answer:
        "The time to fulfill a blood request depends on the blood type, quantity needed, and current inventory levels. Emergency requests are prioritized and typically fulfilled within hours. Non-emergency requests may take 24-48 hours.",
    },
    {
      question: "What if the specific blood type needed is not available?",
      answer:
        "If the exact blood type is not available, we work with healthcare providers to identify compatible alternatives. In some cases, we may activate our rare blood type donor registry or coordinate with other blood banks to fulfill the request.",
    },
    {
      question: "Is there a cost for receiving blood?",
      answer:
        "While we provide blood to hospitals and medical facilities, the costs associated with blood transfusions are typically handled by the healthcare facility and may be covered by insurance. Please consult with the hospital's billing department for specific information.",
    },
  ]

  const generalFAQs = [
    {
      question: "What are your operating hours?",
      answer:
        "Our main donation center is open Monday through Friday from 8:00 AM to 6:00 PM, and Saturday from 9:00 AM to 3:00 PM. We are closed on Sundays and major holidays. Mobile blood drives and regional centers may have different hours.",
    },
    {
      question: "Do I need an appointment to donate blood?",
      answer:
        "While appointments are recommended to minimize wait times, we do accept walk-in donors. You can schedule an appointment through our website, mobile app, or by calling our donor helpline.",
    },
    {
      question: "How can I host a blood drive?",
      answer:
        "To host a blood drive, contact our Community Engagement team. We'll work with you to plan and execute a successful event, providing all necessary equipment, staff, and promotional materials. Ideal locations include workplaces, schools, places of worship, and community centers.",
    },
    {
      question: "What safety measures are in place for blood donation?",
      answer:
        "We follow strict safety protocols to protect both donors and recipients. All donation equipment is sterile and used only once. Our staff are trained in infection control, and we adhere to all health department guidelines. Additionally, all donated blood undergoes rigorous testing before distribution.",
    },
    {
      question: "How can I volunteer with your organization?",
      answer:
        "We offer various volunteer opportunities, from assisting at blood drives to administrative support and community outreach. Visit our Volunteer page to learn more about current opportunities and to submit an application.",
    },
    {
      question: "Do you offer educational programs about blood donation?",
      answer:
        "Yes, we provide educational programs for schools, businesses, and community organizations. These programs cover the importance of blood donation, the donation process, and blood safety. Contact our Education team to schedule a presentation.",
    },
  ]

  const bloodTypeFAQs = [
    {
      question: "What are the different blood types?",
      answer:
        "There are eight main blood types: A+, A-, B+, B-, AB+, AB-, O+, and O-. These types are determined by the presence or absence of certain antigens on the surface of red blood cells.",
    },
    {
      question: "Why is knowing your blood type important?",
      answer:
        "Knowing your blood type is important for blood transfusions, as receiving incompatible blood can cause serious reactions. It's also useful in emergency situations, pregnancy (due to Rh factor considerations), and for understanding your eligibility to donate to specific recipients.",
    },
    {
      question: "Which blood type is the universal donor?",
      answer:
        "O- (O negative) is considered the universal donor for red blood cells because it lacks the A, B, and Rh antigens, making it compatible with all other blood types in emergency situations.",
    },
    {
      question: "Which blood type is the universal recipient?",
      answer:
        "AB+ (AB positive) is considered the universal recipient because individuals with this blood type can receive red blood cells from any blood type.",
    },
    {
      question: "Are some blood types rarer than others?",
      answer:
        "Yes, some blood types are rarer than others. AB- is the rarest (less than 1% of the population), followed by B- (about 2%). O+ is the most common blood type (about 38% of the population).",
    },
    {
      question: "Can my blood type change?",
      answer:
        "No, your blood type is inherited from your parents and remains the same throughout your life. However, certain medical conditions or treatments (like bone marrow transplants) can sometimes cause temporary changes in blood typing tests.",
    },
  ]

  const activeFAQs =
    activeCategory === "donor"
      ? donorFAQs
      : activeCategory === "recipient"
        ? recipientFAQs
        : activeCategory === "general"
          ? generalFAQs
          : activeCategory === "bloodType"
            ? bloodTypeFAQs
            : []

  const filteredFAQs = searchQuery
    ? activeFAQs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : activeFAQs

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary bg-opacity-5 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h1>
              <p className="text-gray-600 mb-8">
                Find answers to common questions about blood donation, recipient services, and more.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 md:px-6 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <input
                type="text"
                placeholder="Search FAQs..."
                className="w-full p-4 pl-12 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>

            {/* Category Tabs */}
            <div className="flex border-b mb-8 overflow-x-auto">
              <button
                className={`pb-3 px-4 text-sm font-medium whitespace-nowrap ${activeCategory === "donor" ? "border-b-2 border-primary text-primary" : "text-gray-500"}`}
                onClick={() => {
                  setActiveCategory("donor")
                  setOpenIndex(null)
                }}
              >
                For Donors
              </button>
              <button
                className={`pb-3 px-4 text-sm font-medium whitespace-nowrap ${activeCategory === "recipient" ? "border-b-2 border-primary text-primary" : "text-gray-500"}`}
                onClick={() => {
                  setActiveCategory("recipient")
                  setOpenIndex(null)
                }}
              >
                For Recipients
              </button>
              <button
                className={`pb-3 px-4 text-sm font-medium whitespace-nowrap ${activeCategory === "general" ? "border-b-2 border-primary text-primary" : "text-gray-500"}`}
                onClick={() => {
                  setActiveCategory("general")
                  setOpenIndex(null)
                }}
              >
                General Questions
              </button>
              <button
                className={`pb-3 px-4 text-sm font-medium whitespace-nowrap ${activeCategory === "bloodType" ? "border-b-2 border-primary text-primary" : "text-gray-500"}`}
                onClick={() => {
                  setActiveCategory("bloodType")
                  setOpenIndex(null)
                }}
              >
                Blood Types
              </button>
            </div>

            {/* FAQ List */}
            <div className="bg-white rounded-lg shadow-md p-6">
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index}
                    toggleOpen={() => toggleFAQ(index)}
                  />
                ))
              ) : (
                <p className="text-center text-gray-500 py-4">
                  No FAQs match your search. Try different keywords or browse by category.
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Still Have Questions Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-gray-600 mb-8">
                If you couldn't find the answer you were looking for, our team is here to help.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold mb-3">Contact Us</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Reach out to our support team for personalized assistance.
                  </p>
                  <Link href="/contact">
                    <button className="text-primary font-medium">Get in Touch</button>
                  </Link>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold mb-3">Live Chat</h3>
                  <p className="text-sm text-gray-600 mb-4">Chat with our representatives during business hours.</p>
                  <button className="text-primary font-medium">Start Chat</button>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold mb-3">Educational Resources</h3>
                  <p className="text-sm text-gray-600 mb-4">Browse our library of articles and guides.</p>
                  <Link href="/education">
                    <button className="text-primary font-medium">View Resources</button>
                  </Link>
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
              Whether you're donating blood or seeking assistance, we're here to support you every step of the way.
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

      <Footer />
    </div>
  )
}

