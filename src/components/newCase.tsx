"use client";

import { caseStudies } from "@/data/caseStudies";
import { CaseStudy } from "@/types/caseStudy";
import Image from "next/image";
import Section from "./ui/section";


export default function NewCase() {
  return (
    <Section className="bg-[#F2F4F8] pt-[5rem] md:pt-[6rem] pb-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          NEW CASE STUDIES
        </h2>
        <p className="text-[#726F84] pt-3 mb-14">
          We help our clients renew their business
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {caseStudies.map((study: CaseStudy, index: number) => (
            <div
              key={index}
              className="case-study-card rounded-md w-[280px] h-[22rem] shadow-md bg-white cursor-pointer overflow-hidden"
            >
              <div className="flex flex-col items-center justify-start text-white h-full">
                <div className="card-content pt-[10rem] w-full h-full bg-[#726F84] flex flex-col items-center">
                  <div className="relative w-10 h-10 mb-6">
                    <Image
                      src={study.icon}
                      alt={`${study.title} icon`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-[10px] uppercase tracking-widest">
                    {study.subtitle}
                  </p>
                  <h3 className="text-[18px] md:text-[30px] font-bold">
                    {study.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
