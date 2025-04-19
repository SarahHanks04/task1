"use client";

import { useState, useEffect } from "react";

interface BusinessTabProps {
  onTabChange?: (tab: string) => void;
}

export default function BusinessTab({ onTabChange }: BusinessTabProps) {
  const [activeTab, setActiveTab] = useState<string>("Business Growth_0");
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const tabs: string[] = [
    "Business Growth_0",
    "Business Growth_1",
    "Business Growth_2",
  ];

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    onTabChange?.(tab);
  };

  if (!isMounted) return null;

  return (
    <div className="flex justify-center bg-white">
      <div className="flex w-full bg-transparent max-w-4xl">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`flex-1 py-[3rem] px-4 md:px-[4rem] text-sm md:text-lg font-semibold transition-all duration-300 shadow-xl ${
              activeTab === tab
                ? "bg-white text-[#3C72FC]"
                : "bg-[#EBF1FF] text-gray-800"
            } 
            ${index === 0 ? "rounded-l-sm" : ""} 
            ${index === tabs.length - 1 ? "rounded-r-sm" : ""}`}
            aria-selected={activeTab === tab ? "true" : "false"}
            role="tab"
          >
            Business Growth
          </button>
        ))}
      </div>
    </div>
  );
}
