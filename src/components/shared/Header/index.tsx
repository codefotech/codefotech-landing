"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Career", href: "/career" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-331 mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="CodeFoTech"
            width={180}
            height={50}
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-text-dark hover:text-primary transition-colors font-medium text-[17px]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Get Started Button */}
        <Link
          href="/get-started"
          className="hidden lg:block bg-gradient-to-b from-[#3659f5] to-[#2a8afa] hover:from-primary hover:to-secondary text-white px-10 py-3 rounded-full font-medium transition-colors shadow-[0px_4px_4px_0px_rgba(0,0,0,0.32)] text-[17px]"
          style={{
            boxShadow:
              "inset 0px 2px 12px 0px rgba(0,0,0,0.32), 0px 4px 4px 0px rgba(0,0,0,0.32)",
          }}
        >
          Get Started
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-text-dark"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-text-dark hover:text-primary transition-colors font-medium py-2 text-[17px]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/get-started"
              onClick={() => setIsMenuOpen(false)}
              className="bg-gradient-to-b from-[#3659f5] to-[#2a8afa] hover:from-primary hover:to-secondary text-white px-8 py-3 rounded-full font-medium transition-colors text-center shadow-[0px_4px_4px_0px_rgba(0,0,0,0.32)] text-[17px]"
              style={{
                boxShadow:
                  "inset 0px 2px 12px 0px rgba(0,0,0,0.32), 0px 4px 4px 0px rgba(0,0,0,0.32)",
              }}
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
