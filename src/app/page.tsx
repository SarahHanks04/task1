import FAQSection from "@/components/faq/faqSection";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Leading from "@/components/leading";
import Mission from "@/components/mission";
import NewCase from "@/components/newCase";
import Experience from "@/components/real-experience/experience";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Experience />
      <Leading />
      <NewCase />
      <Mission />
      <FAQSection />
    </div>
  );
}
