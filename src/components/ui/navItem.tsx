import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { usePathname } from "next/navigation";
import { DropdownItem, NavLink } from "@/types/navLink";

interface NavItemProps {
  link: NavLink;
  dropdownItems?: DropdownItem[];
  isMobile?: boolean;
}

export default function NavItem({
  link,
  dropdownItems = [],
  isMobile = false,
}: NavItemProps) {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  if (!link.hasDropdown) {
    return (
      <Link
        href={link.href}
        className={`block ${
          pathname === link.href ? "text-white" : "text-white"
        }`}
      >
        {link.name}
      </Link>
    );
  }

  return (
    <div className={isMobile ? "space-y-2" : "relative group"}>
      <button
        onClick={() => isMobile && setDropdownOpen(!dropdownOpen)}
        onMouseEnter={() => !isMobile && setDropdownOpen(true)}
        onMouseLeave={() => !isMobile && setDropdownOpen(false)}
        className={`flex items-center uppercase ${isMobile ? "w-full text-left" : ""} ${
          pathname === link.href ? "text-blue-600" : "text-white"
        }`}
      >
        {link.name}
        {dropdownOpen ? (
          <ChevronUp className="ml-2 h-4 w-4 text-blue" />
        ) : (
          <ChevronDown className="ml-2 h-4 w-4 text-blue" />
        )}
      </button>
      {dropdownOpen && (
        <div
          className={
            isMobile
              ? "ml-4"
              : "absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md"
          }
        >
          {dropdownItems.map((item: DropdownItem) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block px-4 py-2 ${
                pathname === item.href ? "text-white" : "text-gray-700"
              } ${!isMobile ? "hover:bg-gray-200" : ""}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
