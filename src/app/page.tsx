import BusinessStats from "@/components/businessStats/businessStats";
import FAQSection from "@/components/faq/faqSection";
import Hero from "@/components/hero";
import Leading from "@/components/leading";
import Mission from "@/components/mission";
import NewCase from "@/components/newCase";
import Experience from "@/components/real-experience/experience";
import Testimonials from "@/components/testimonial/testimonial";

export default function Home() {
  return (
    <div>
      <Hero />
      <Experience />
      <Leading />
      <NewCase />
      <Mission />
      <FAQSection />
      <Testimonials />
      <BusinessStats />
    </div>
  );
}
