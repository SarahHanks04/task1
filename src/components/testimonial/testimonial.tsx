"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowProps } from "@/types/carouselArrow";
import Slider from "react-slick";
import { testimonialData } from "@/data/testimonialData";
import { Testimonial } from "@/types/testimonial";
import TestimonialCard from "./testimonialCard";

// Arrow
const PrevArrow = ({ onClick }: ArrowProps) => (
  <button
    onClick={onClick}
    className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 mr-4"
    aria-label="Previous testimonial"
  >
    <ArrowLeft className="text-gray-600" size={20} />
  </button>
);

const NextArrow = ({ onClick }: ArrowProps) => (
  <button
    onClick={onClick}
    className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
    aria-label="Next testimonial"
  >
    <ArrowRight className="text-gray-600" size={20} />
  </button>
);

export default function Testimonials() {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Carousel settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-[#F2F4F8] pb-16 pt-[6rem] md:pt-[8rem]">
      <div className="container mx-auto px-[2rem] md:px-[4rem]">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Headings */}
          <div className="md:w-1/3 flex flex-col items-start">
            <h2 className="text-4xl md:text-5xl font-bold uppercase text-[#0F0D1D] mb-4">
              What They Are Talking About?
            </h2>
            <p className="text-xs text-gray-600 mb-6">
              Trusted by more than 4,200 customers
            </p>
            <div className="flex pt-8">
              <PrevArrow onClick={() => sliderRef?.slickPrev()} />
              <NextArrow onClick={() => sliderRef?.slickNext()} />
            </div>
          </div>

          {/* Testimonial Carousel */}
          <div className="md:w-2/3">
            <div className="relative min-h-[350px]">
              {isMounted && (
                <Slider {...settings} ref={setSliderRef}>
                  {testimonialData.map(
                    (testimonial: Testimonial, index: number) => (
                      <TestimonialCard
                        key={index}
                        comment={testimonial.comment}
                        name={testimonial.name}
                        title={testimonial.title}
                      />
                    )
                  )}
                </Slider>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
