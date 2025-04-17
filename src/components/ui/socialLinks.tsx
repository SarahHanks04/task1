import Link from "next/link";
import Image from "next/image";
import { SocialLink } from "@/types/footer";
import { footerData } from "@/data/footerData";


interface SocialLinksProps {
  className?: string;
}

export default function SocialLinks({ className = "" }: SocialLinksProps) {
  const socialLinks = footerData.socialLinks;

  return (
    <div className={`flex space-x-5 ${className}`}>
      {socialLinks.map((link: SocialLink, index: number) => (
        <Link
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={link.src} alt={link.alt} width={20} height={20} />
        </Link>
      ))}
    </div>
  );
}
