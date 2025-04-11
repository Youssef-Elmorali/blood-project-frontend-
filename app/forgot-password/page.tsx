"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Header from "../components/header"
import Footer from "../components/footer"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate password reset process
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      <main className="flex-1 bg-gray-50">
        <section className="container mx-auto px-4 md:px-6 py-12">
          <div className="max-w-md mx-auto">
            {!isSubmitted ? (
              <>
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold mb-2">Forgot Password</h1>
                  <p className="text-gray-600">
                    Enter your email address and we'll send you a link to reset your password
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md">
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Email Address</label>
                        <input
                          type="email"
                          required
                          className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-primary text-white rounded-md py-3 font-medium flex items-center justify-center"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          "Send Reset Link"
                        )}
                      </button>
                    </div>
                  </form>

                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                      Remember your password?{" "}
                      <Link href="/login" className="text-primary font-medium">
                        Log In
                      </Link>
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
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
                    className="h-8 w-8 text-green-600"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-4">Check Your Email</h2>
                <p className="text-gray-600 mb-6">
                  We've sent a password reset link to <span className="font-medium">{email}</span>. Please check your
                  email and follow the instructions to reset your password.
                </p>
                <div className="flex flex-col gap-3">
                  <Link href="/login">
                    <button className="w-full bg-primary text-white rounded-md py-3 font-medium">
                      Return to Login
                    </button>
                  </Link>
                  <button onClick={handleSubmit} className="text-primary font-medium">
                    Didn't receive the email? Resend
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

