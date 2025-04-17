"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search } from "lucide-react";
import { navLinks, serviceDropdownItems } from "@/data/navLinks";
import NavItem from "./ui/navItem";
import SocialLinks from "./ui/socialLinks";
import { SUPPORT_PHONE } from "@/config";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const pathname = usePathname();
  const router = useRouter();

  const searchablePages = [...navLinks, ...serviceDropdownItems];

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const matchedPage = searchablePages.find((page) =>
      page.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (matchedPage) {
      router.push(matchedPage.href);
      setSearchQuery("");
      setSearchOpen(false);
    }
  };

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

          {/* Search Icon with Dropdown */}
          <div className="relative">
            <button
              aria-label="Search"
              onClick={() => setSearchOpen((prev) => !prev)}
            >
              <Search className="h-5 w-5 text-white hover:text-blue" />
            </button>
            {searchOpen && (
              <div className="dropdown absolute right-0 mt-2 w-64 shadow-md rounded-md p-2">
                <form onSubmit={handleSearch}>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search pages..."
                    className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-0"
                    autoFocus
                  />
                </form>
                {searchQuery &&
                  !searchablePages.some((page) =>
                    page.name.toLowerCase().includes(searchQuery.toLowerCase())
                  ) && (
                    <p className="text-blue mt-2">
                      No match found for {searchQuery}
                    </p>
                  )}
              </div>
            )}
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
