"use client";

import { experienceCards } from "@/data/experienceCard";
import ExperienceCard from "./experienceCard";
import { ExperienceCard as ExperienceCardType } from "@/types/experience-card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Experience() {
  return (
    <section className="bg-[#0F0D1D] text-white py-[6rem]">
      <div className="container mx-auto px-10">
        {/* Section Header */}
        <div className="text-center py-0 md:py-[3rem]">
          <h2 className="text-4xl font-bold uppercase">
            Real-World Experience
          </h2>
          <p className="mt-2 text-gray-400">
            The best business consulting firm you can count on!
          </p>
        </div>

        {/* Cards */}
        <div className="experience-cards grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {experienceCards.map((card: ExperienceCardType, index: number) => (
            <ExperienceCard
              key={index}
              title={card.title}
              link={card.link}
              className="experience-card"
            />
          ))}
        </div>

        {/* Partners Carousel */}
        <div className="mt-12 py-10">
          <div className="relative flex items-center justify-center px-3">
            <div className="inset-x-0 h-px bg-gray-700 w-full z-10"></div>
            <h3 className="absolute text-center text-sm uppercase leading-1.25 bg-[#0F0D1D] px-4 z-10">
              Meet the Partners
            </h3>
          </div>
          <div className="flex items-center justify-between mt-10">
            <div className="p-[6px] bg-[#3c96fc18]">
              <Image
                src="/assets/icons/arrowLeft.svg"
                alt="Bucket Icon"
                width={14}
                height={14}
              />
            </div>
            <div className="p-[6px] bg-[#3c96fc18]">
              <Image
                src="/assets/icons/arrowRight.svg"
                alt="Bucket Icon"
                width={14}
                height={14}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
