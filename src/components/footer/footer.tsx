"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { footerData } from "@/data/footerData";
import FooterLinkColumn from "./footerLinkColumn";

interface NewsletterFormData {
  email: string;
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormData>();
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);

  const onSubmit = (data: NewsletterFormData) => {
    setMessage({
      text: "Thank you for subscribing to our newsletter!",
      type: "success",
    });
    reset();
  };

  return (
    <footer className="bg-[#0F0D1D] text-white py-12">
      <main className="container mx-auto px-[3.5rem]">
        {/* Top Section */}
        <div className="footer-section grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="footer-item pt-0 md:pt-16">
            <h2 className="pl-0 md:pl-10 text-[16px] font-semibold">
              CreativeLogo
            </h2>
            <p className="mt-1 text-gray-400 py-4 border-b text-[14px] border-gray-700">
              Welcome to our consultancy agency. Lorem simply text amet cing
              elit.
            </p>

            <p className="mt-4 text-gray-400 flex items-center">
              <Image
                src="/assets/icons/IconPhone.svg"
                alt="Phone Number"
                width={16}
                height={16}
              />
              <a
                href="tel:+926668880000"
                className="ml-2 text-gray-400 text-[14px] hover:text-white hover:underline"
              >
                +92 666 888 0000
              </a>
            </p>
            <p className="mt-4 text-gray-400 flex items-center">
              <Image
                src="/assets/icons/IconEmail.svg"
                alt="Email Address"
                width={16}
                height={16}
              />
              <span className="ml-2 text-[14px]">needhelp@company.com</span>
            </p>
            <p className="mt-4 text-gray-400 flex items-center">
              <Image
                src="/assets/icons/map.svg"
                alt="Address Location"
                width={16}
                height={16}
              />
              <span className="ml-2 text-sm">
                66 Brooklyn Street New York, USA
              </span>
            </p>
          </div>

          {/* Explore Links */}
          <FooterLinkColumn title="Explore" links={footerData.exploreLinks} />

          {/* Services Links */}
          <FooterLinkColumn title="Services" links={footerData.servicesLinks} />

          {/* Newsletter Subscription Form */}
          <div className="footer-item pt-[3.6rem]">
            <h3 className="text-[16px] font-semibold">Newsletter</h3>
            <p className="mt-8 text-gray-400 text-[14px]">
              Subscribe for the latest articles and resources
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-4 relative flex flex-col"
            >
              <div className="relative flex items-center">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-white text-black px-4 py-2 rounded w-full pr-24 focus:outline-none"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                <button
                  type="submit"
                  className="absolute right-2 bg-[#3C72FC] text-sm text-white px-4 py-1 rounded hover:bg-blue-700"
                >
                  Register
                </button>
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
              {message && (
                <p
                  className={`text-sm mt-1 ${
                    message.type === "success"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {message.text}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-section mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="footer-item text-gray-400 text-sm">
            © Copyright {currentYear} Company
          </p>
          <div className="footer-item flex space-x-6 mt-4 md:mt-0">
            {footerData.socialLinks.map((social) => (
              <Link
                key={social.alt}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${social.alt}`}
              >
                <Image
                  src={social.src}
                  alt={social.alt}
                  width={20}
                  height={20}
                  className="hover:scale-110 transition-transform"
                />
              </Link>
            ))}
          </div>
        </div>
      </main>
    </footer>
  );
}
