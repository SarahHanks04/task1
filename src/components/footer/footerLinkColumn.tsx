import { FooterLink } from "@/types/footer";
import Link from "next/link";

interface FooterLinkColumnProps {
  title: string;
  links: FooterLink[];
}

const FooterLinkColumn = ({ title, links }: FooterLinkColumnProps) => (
  <div className="footer-item pt-[3.6rem]">
    <h3 className="text-[16px] font-semibold uppercase">{title}</h3>
    <ul className="mt-8 space-y-2">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className="text-gray-400 text-[14px] hover:text-white hover:underline"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterLinkColumn;
