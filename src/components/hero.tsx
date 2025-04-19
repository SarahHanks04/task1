"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-section relative flex flex-col md:flex-row items-center justify-between w-screen h-[calc(100vh-0rem)] bg-[#707070] text-white px-6 md:px-20 pt-8">
      <div className="left-content text-center md:text-left max-w-lg">
        <p className="text-sm pt-16 md:pt-20 uppercase tracking-widest text-[#FCFCFC] pb-4">
          Welcome to Codeshaper
        </p>
        <h1 className="text-5xl uppercase md:text-6xl font-bold mt-2 leading-tight">
          Consulting <br />
          <span className="inline-block pt-2">for every</span> <br />
          <span className="inline-block pt-2">business</span>
        </h1>
        <Link
          href="/more"
          className="inline-block mt-10 bg-blue-600 text-white px-6 py-3"
          aria-label="Discover More"
        >
          Discover More
        </Link>
      </div>
    </section>
  );
}
