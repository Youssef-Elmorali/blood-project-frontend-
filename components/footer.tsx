import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">About</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/about" className="text-base text-gray-300 hover:text-white">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-base text-gray-300 hover:text-white">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-base text-gray-300 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-base text-gray-300 hover:text-white">
                  Impact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Help</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/faqs" className="text-base text-gray-300 hover:text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-base text-gray-300 hover:text-white">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/documentation" className="text-base text-gray-300 hover:text-white">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-base text-gray-300 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/terms" className="text-base text-gray-300 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-base text-gray-300 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Connect</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-500 text-center">
            &copy; {new Date().getFullYear()} My Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

