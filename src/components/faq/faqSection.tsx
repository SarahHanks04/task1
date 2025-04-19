"use client";

import { faqData } from "@/data/faqData";
import { Faq } from "@/types/faq";
import { Check } from "lucide-react";
import FAQItem from "./faqItem";
import { infoPoints } from "@/data/infoPoints";
import { InfoPoint } from "@/types/infoPoint";

export default function FAQSection() {
  return (
    <section className="bg-white py-20 w-full">
      <main className="container mx-auto px-4 md:px-14 w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold uppercase text-[#0F0D1D] mb-4">
            Question & Answer
          </h2>
          <p className="text-lg text-gray-600">
            We help our clients renew their business
          </p>
        </div>

        {/* Main Accordion */}
        <div className="flex flex-col md:flex-row gap-2">
          {/* Accordion */}
          <div className="md:w-3/5">
            <div className="p-6 md:p-10">
              {faqData.map((faq: Faq, index: number) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  index={index}
                />
              ))}
            </div>
          </div>

          <div className="md:w-3/5 flex flex-col md:flex-row mt-0 md:mt-[16rem] gap-6">
            {/* Info Points */}
            <div className="p-6">
              <ul className="space-y-4">
                {infoPoints.map((point: InfoPoint, index: number) => (
                  <li key={index} className="flex items-start">
                    <Check
                      className="text-[#3C72FC] mr-2 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-sm text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card */}
            <div className="self-start md:self-end px-6 md:px-0 mb-0 md:pb-8">
              <div className="bg-[#3C72FC] text-white text-center p-6 mb-[2rem]">
                <p className="text-3xl font-bold">30</p>
                <p className="text-[14px]">
                  Years of <br /> Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
