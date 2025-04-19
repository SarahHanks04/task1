"use client";

import Image from "next/image";
import Section from "./ui/section";
import ProgressBar from "./ui/progress-bar";
import { SUPPORT_PHONE } from "@/config";
import { leadingCards } from "@/data/leadingCard";
import { LeadingCard } from "@/types/leadingCard";

export default function Leading() {
  return (
    <Section className="relative bg-white pt-12 w-full">
      {/* Main Content */}
      <main className="w-full">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 flex items-center justify-center">
            <div className="relative w-3/4 h-[20rem] rounded-lg overflow-hidden">
              <div className="relative w-full h-full">
                <button
                  className="absolute top-[11%] left-[10%] transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#3C72FC] flex items-center justify-center transition-transform duration-300 hover:scale-110"
                  aria-label="Play video"
                >
                  <div className="text-white flex items-center justify-center">
                    <Image
                      src="/assets/icons/PlayIcon.svg"
                      alt="Play Video"
                      width={10}
                      height={10}
                      className="text-white object-cover"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 flex flex-col gap-4 pt-0 md:pt-12 px-4 md:px-0">
            <h2 className="text-3xl md:text-4xl font-bold uppercase text-[#0F0D1D]">
              We’re Leading in <br />
              the Market
            </h2>
            <p className="text-base text-[#726F84] pt-2">
              Lorem ipsum is simply free text dolor sit amet, consectetur notted
              adipisicing elit sed do eiusmod tempor incididunt ut labore et
              doloremagna aliqua lonm andhn.We have 35+ years of experience. We
              offer marketing and consulting services.
            </p>
            <p className="text-lg pt-3 font-semibold text-[#3C72FC]">
              We have 35+ years of experience. We offer marketing and consulting
              services.
            </p>
            <div className="space-y-4 pt-2.5">
              <ProgressBar label="Consulting" percentage={85} />
              <ProgressBar label="Advices" percentage={65} />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 p-2 bg-[#EBF1FF] flex items-center">
                <Image
                  src="/assets/icons/phoneCall.svg"
                  alt="Phone Icon"
                  width={15}
                  height={15}
                />
              </div>
              <div>
                <p className="text-sm pt-6 text-[#726F84]">
                  Have any question? Give us a call{" "}
                </p>
                <a
                  href={`tel:${SUPPORT_PHONE}`}
                  className="font-medium hover:underline text-[#0F0D1D]"
                  aria-label={`Call us at ${SUPPORT_PHONE}`}
                >
                  {SUPPORT_PHONE}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row pt-12 md:pt-16">
          {leadingCards.map((card: LeadingCard) => (
            <div key={card.id} className="flex-1 bg-white shadow-lg p-6">
              <div className="flex items-center gap-4">
                <span className="text-[14px] font-bold text-[#3C72FC] bg-[#EBF1FF] p-1">
                  {card.id}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-[#0F0D1D] uppercase">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Section>
  );
}
