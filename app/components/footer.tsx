"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1e2833] text-white mt-auto">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
              <div className="h-2 w-2 rounded-full bg-[#1e2833]"></div>
            </div>
            <span className="font-bold">Qatrah Hayat</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm">Ready to get started?</span>
            <Link href="/donate">
              <button className="bg-white text-black rounded px-6 py-2 text-sm font-medium hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1e2833]">
                Donate
              </button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8 border-t border-gray-700">
          <div>
            <h3 className="font-medium mb-4">Subscribe to our newsletter</h3>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Email address"
                className="bg-transparent border border-gray-700 rounded-l p-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-white"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="bg-[#ffd2dd] text-black p-2 rounded-r hover:bg-[#ffbfcf] transition-colors focus:outline-none focus:ring-2 focus:ring-[#ffd2dd]"
                aria-label="Subscribe"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Services Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <Link href="/donate" className="hover:text-B32346 transition-colors">
              Blood Donation
            </Link>
            <Link href="/find-blood" className="hover:text-B32346 transition-colors">
              Blood Requests
            </Link>
            <Link href="/blood-drives" className="hover:text-B32346 transition-colors">
              Blood Drives
            </Link>
            <Link href="/education" className="hover:text-B32346 transition-colors">
              Education
            </Link>
          </div>

          {/* About Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">About</h3>
            <Link href="/about" className="hover:text-B32346 transition-colors">
              Our Story
            </Link>
            <Link href="/impact" className="hover:text-B32346 transition-colors">
              Impact
            </Link>
            <Link href="/team" className="hover:text-B32346 transition-colors">
              Team
            </Link>
            <Link href="/careers" className="hover:text-B32346 transition-colors">
              Careers
            </Link>
          </div>

          {/* Help Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Help</h3>
            <Link href="/faqs" className="hover:text-B32346 transition-colors">
              FAQs
            </Link>
            <Link href="/support" className="hover:text-B32346 transition-colors">
              Support
            </Link>
            <Link href="/contact" className="hover:text-B32346 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            <Link href="/terms" className="mr-4 hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1e2833] rounded-full p-1"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1e2833] rounded-full p-1"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1e2833] rounded-full p-1"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 mt-8">
          © {new Date().getFullYear()} Qatrah Hayat. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

