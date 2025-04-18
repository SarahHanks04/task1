"use client";

import { useState } from "react";

interface BusinessTabProps {
  onTabChange: (tab: string) => void;
}

export default function BusinessTab({ onTabChange }: BusinessTabProps) {
  const [activeTab, setActiveTab] = useState<string>("Business Growth");

  const tabs: string[] = ["Business Growth", "Our Expertise", "Client Success"];

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <div className="flex justify-center">
      <div className="flex w-full bg-transparent max-w-4xl">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`flex-1 py-[3rem] px-4 md:px-[4rem] text-sm md:text-lg font-semibold transition-all duration-300 border-b-4 shadow-xl ${
              activeTab === tab
                ? "bg-white text-[#3C72FC]"
                : "bg-[#EBF1FF] text-gray-800"
            } 
            ${index === 0 ? "rounded-l-sm" : ""} 
            ${index === tabs.length - 1 ? "rounded-r-sm" : ""}`}
            aria-selected={activeTab === tab}
            role="tab"
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}