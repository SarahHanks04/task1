export interface FooterLink {
  label: string;
  href: string;
}

export interface SocialLink {
  src: string;
  alt: string;
  href: string;
}

export interface FooterData {
  exploreLinks: FooterLink[];
  servicesLinks: FooterLink[];
  socialLinks: SocialLink[];
}
