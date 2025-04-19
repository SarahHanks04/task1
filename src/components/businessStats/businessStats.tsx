"use client";

import { useState } from "react";
import Image from "next/image";
import { statsData } from "@/data/statsData";
import { Stat } from "@/types/stat";
import BusinessTab from "./businessTab";
import TabContent from "./tabContent";


export default function BusinessStats() {
  const [activeTab, setActiveTab] = useState<string>("Business Growth");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <section className="bg-[#0D152E] text-white pt-16">
      <div className="container mx-auto px-4">
        {/* Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center py-10">
          {statsData.map((stat: Stat) => (
            <div key={stat.id} className="flex flex-col items-center">
              {/* Icon */}
              <div className="bg-[#06050C] p-3 flex justify-center items-center">
                <Image
                  src={stat.iconSrc}
                  alt={`${stat.label} icon`}
                  width={30}
                  height={30}
                />
              </div>

              {/* Number */}
              <div className="stat-number text-4xl font-bold mt-2">
                {stat.number}
              </div>
              <p className="text-[10px] mt-2 uppercase pb-10">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Tabbed Section */}
        <div className="w-full mt-[3rem]">
          <BusinessTab onTabChange={handleTabChange} />
        </div>
        <div className="mt-[-3.4rem] w-full">
          <TabContent activeTab={activeTab} />
        </div>
      </div>
    </section>
  );
}
