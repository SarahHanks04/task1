"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

export default function FAQItem({ question, answer, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState<boolean>(index === 0);

  return (
    <div className="faq-item rounded-sm mb-4 bg-[#F2F4F8]">
      {/* Questions */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left hover:bg-white transition-colors duration-300"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="text-sm md:text-base font-bold text-gray-700">
          <span className="text-[#3C72FC] pr-2">{`${index + 1}.`}</span>{" "}
          {question}
        </span>
        {isOpen ? (
          <Minus className="text-gray-600" size={20} />
        ) : (
          <Plus className="text-gray-600" size={20} />
        )}
      </button>

      {/* Answers */}
      <div
        id={`faq-answer-${index}`}
        className={`faq-answer ${isOpen ? "open" : ""}`}
      >
        <p className="text-sm text-gray-600 p-4">{answer}</p>
      </div>
    </div>
  );
}
