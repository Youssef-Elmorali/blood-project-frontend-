"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Navigation links array for DRY code
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/donate", label: "Donate" },
    { href: "/find-blood", label: "Find Blood" },
    { href: "/register", label: "Register Now" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Toggle body scroll lock
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const isActive = (path:string) => pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-white/95 shadow-lg py-2"
          : "bg-white/80 py-4"
      } backdrop-blur-md`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full" />
          </div>
          <span className="text-lg font-bold text-primary leading-tight">
            Qatrah
            <span className="block text-sm">Hayat</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200 ${
                isActive(link.href) ? "text-primary" : ""
              }`}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right Section (Theme Toggle, Login, Menu Button) */}
        <div className="flex items-center gap-4 z-50">
          <Link
            href="/login"
            className={`hidden md:inline-flex items-center px-4 py-2 text-sm font-medium rounded-md border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 ${
              isActive("/login")
                ? "bg-primary text-white"
                : ""
            }`}
            aria-current={isActive("/login") ? "page" : undefined}
          >
            Log In
          </Link>
          <button
            type="button"
            className="md:hidden p-1"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-white md:hidden z-40 transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center justify-center min-h-screen gap-6 py-20 bg-white">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xl font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-primary"
                    : "text-gray-700 hover:text-primary"
                }`}
                onClick={toggleMobileMenu}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/login"
              className="mt-4 inline-flex items-center px-8 py-3 text-lg font-medium rounded-md bg-primary text-white hover:bg-primary/90 transition-all duration-200"
              onClick={toggleMobileMenu}
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
