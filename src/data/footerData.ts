import { FooterData } from "@/types/footer";

export const footerData: FooterData = {
  exploreLinks: [
    { label: "About", href: "/about" },
    { label: "Meet our Team", href: "/team" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Latest News", href: "/news" },
    { label: "Contact", href: "/contact" },
  ],
  servicesLinks: [
    { label: "Support", href: "/support" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Privacy & Policy", href: "/privacy" },
    { label: "Help", href: "/help" },
  ],
  socialLinks: [
    {
      src: "/assets/icons/instagramm.svg",
      alt: "Instagram",
      href: "https://www.instagram.com",
    },
    {
      src: "/assets/icons/llinkedin.svg",
      alt: "LinkedIn",
      href: "https://www.linkedin.com",
    },
    {
      src: "/assets/icons/ttwitter.svg",
      alt: "Twitter",
      href: "https://www.twitter.com",
    },
    {
      src: "/assets/icons/facebookk.svg",
      alt: "Facebook",
      href: "https://www.facebook.com",
    },
  ],
};
