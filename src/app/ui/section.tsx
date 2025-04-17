import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

export default function Section({ children, className = "" }: SectionProps) {
  return (
    <section className={`container mx-auto px-4 md:px-14 ${className}`}>
      {children}
    </section>
  );
}
