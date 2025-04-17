import { DropdownItem, NavLink } from "@/types/navLink";
import { footerData } from "./footerData";

export const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Pages", href: "/experience" },
  { name: "Case Shop", href: "/new-case" },
  { name: "Blog", href: "/blog" },
  { name: "Content", href: "/content" },
];

export const serviceDropdownItems: DropdownItem[] = [
  // { name: "Leadership", href: "/services/leadership" },
  // { name: "Good collaboration", href: "/services/good-collaboration" },
  // { name: "Free Communication", href: "/services/free-communication" },
];

export const socialLinks = footerData.socialLinks;
