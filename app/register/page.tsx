"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff } from "lucide-react"
import Header from "../components/header"
import Footer from "../components/footer"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [userType, setUserType] = useState("donor")
  const [step, setStep] = useState(1)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(2) // Move to success step
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gray-50">
        {step === 1 ? (
          <section className="container mx-auto px-4 md:px-6 py-12">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">Create Your Account</h1>
                <p className="text-gray-600">Join our community and start saving lives today</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex border-b mb-6">
                  <button
                    className={`pb-3 px-4 text-sm font-medium ${userType === "donor" ? "border-b-2 border-primary text-primary" : "text-gray-500"}`}
                    onClick={() => setUserType("donor")}
                  >
                    Register as Donor
                  </button>
                  <button
                    className={`pb-3 px-4 text-sm font-medium ${userType === "recipient" ? "border-b-2 border-primary text-primary" : "text-gray-500"}`}
                    onClick={() => setUserType("recipient")}
                  >
                    Register as Recipient
                  </button>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Date of Birth <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        required
                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Blood Group {userType === "donor" && <span className="text-red-500">*</span>}
                      </label>
                      <select
                        required={userType === "donor"}
                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        <option value="">Select Blood Group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="unknown">Don't Know</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Gender <span className="text-red-500">*</span>
                      </label>
                      <select
                        required
                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Password <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          required
                          className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Password must be at least 8 characters long with a number and special character
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Confirm Password <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="password"
                        required
                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>

                  {userType === "donor" && (
                    <div className="mt-6">
                      <h3 className="font-medium mb-3">Donor Information</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Last Donation Date (if applicable)</label>
                          <input
                            type="date"
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-1">Any Medical Conditions?</label>
                          <textarea
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary h-24"
                            placeholder="Please list any medical conditions that might affect your ability to donate blood"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  )}

                  {userType === "recipient" && (
                    <div className="mt-6">
                      <h3 className="font-medium mb-3">Recipient Information</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Hospital/Medical Facility</label>
                          <input
                            type="text"
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                            placeholder="Name of hospital or medical facility"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-1">Reason for Blood Requirement</label>
                          <textarea
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary h-24"
                            placeholder="Please provide details about why you need blood"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-6">
                    <div className="flex items-start">
                      <input type="checkbox" id="terms" required className="mt-1 mr-2" />
                      <label htmlFor="terms" className="text-sm">
                        I agree to the{" "}
                        <Link href="/terms" className="text-primary">
                          Terms and Conditions
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-primary">
                          Privacy Policy
                        </Link>
                      </label>
                    </div>
                  </div>

                  <div className="mt-8">
                    <button type="submit" className="w-full bg-primary text-white rounded-md py-3 font-medium">
                      Create Account
                    </button>
                  </div>

                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                      Already have an account?{" "}
                      <Link href="/login" className="text-primary font-medium">
                        Log In
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </section>
        ) : (
          <section className="container mx-auto px-4 md:px-6 py-12">
            <div className="max-w-md mx-auto text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10 text-green-600"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>

              <h1 className="text-2xl font-bold mb-4">Registration Successful!</h1>
              <p className="text-gray-600 mb-8">
                Your account has been created successfully. You can now log in to access your account.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/login">
                  <button className="bg-primary text-white rounded-md px-6 py-3 font-medium w-full">Log In</button>
                </Link>
                <Link href="/">
                  <button className="bg-white border border-gray-300 text-gray-700 rounded-md px-6 py-3 font-medium w-full">
                    Back to Home
                  </button>
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}

