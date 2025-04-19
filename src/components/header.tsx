"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Search } from "lucide-react";
import { navLinks, serviceDropdownItems } from "@/data/navLinks";
import NavItem from "./ui/navItem";
import SocialLinks from "./ui/socialLinks";
import { SUPPORT_PHONE } from "@/config";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="header fixed w-full z-50 bg-[#707070] border-b border-gray-400 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="relative text-white overflow-hidden">
          <h1>CreativeLogo</h1>
        </div>
        <span className="h-12 w-px bg-gray-300" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center uppercase space-x-4">
          {navLinks.map((link) => (
            <NavItem
              key={link.name}
              link={link}
              dropdownItems={
                link.hasDropdown ? serviceDropdownItems : undefined
              }
            />
          ))}
        </nav>

        {/* Social Media, Search, Contact */}
        <div className="hidden md:flex items-center space-x-4">
          <SocialLinks />
          <span className="h-12 w-px bg-gray-300 mx-4" />

          {/* Static Search Icon */}
          <div className="relative">
            <Search className="h-5 w-5 text-white hover:text-[#3C72FC]" />
          </div>

          <span className="h-12 w-px bg-gray-300 mx-2" />
          <div className="text-white font-medium text-[16px]">
            <p className="text-white font-medium text-[16px]">Need help? </p>
            <a
              href={`tel:${SUPPORT_PHONE}`}
              className="hover:underline text-sm"
            >
              {SUPPORT_PHONE}
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="mobile-menu md:hidden bg-[#707070] text-white p-4">
          <div className="space-y-4">
            {navLinks.map((link) => (
              <NavItem
                key={link.name}
                link={link}
                dropdownItems={
                  link.hasDropdown ? serviceDropdownItems : undefined
                }
                isMobile
              />
            ))}
            <div className="pt-4 space-y-2 text-center">
              <SocialLinks className="justify-center" />
              <hr />
              {/* Add Static Search Icon for Mobile */}
              <div className="flex justify-center">
                <Search className="h-5 w-5 text-white hover:text-[#3C72FC]" />
              </div>
              <p className="text-white font-medium">
                Need help?{" "}
                <a
                  href={`tel:${SUPPORT_PHONE}`}
                  className="hover:underline text-sm"
                >
                  {SUPPORT_PHONE}
                </a>
              </p>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
