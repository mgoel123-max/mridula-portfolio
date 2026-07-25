"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Mridula Goel",
    subtitle: "Program Manager • Strategy • Analytics",
    description:
      "Helping organizations transform complex business challenges into measurable growth through data, strategy, and cross-functional leadership.",
  },
  {
    id: 2,
    title: "What I Bring",
    cards: [
      "Strategy & Insights",
      "Program Management",
      "Cross-functional Leadership",
      "Customer & Retail Expertise",
      "Problem Solving",
    ],
  },
  {
    id: 3,
    title: "Business Impact",
    subtitle: "Driving measurable outcomes",
    description:
      "From Fortune 500 retailers to global consulting engagements, I transform analytics into business decisions that create lasting impact.",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen bg-[#FFF7FA] overflow-hidden">
      <div className="flex h-full items-center justify-center">

        {currentSlide === 0 && (
          <div className="text-center max-w-4xl px-8 animate-fade">
            <p className="uppercase tracking-[0.4em] text-[#D63384] font-semibold mb-6">
              PROGRAM MANAGER • STRATEGY • ANALYTICS
            </p>

            <h1 className="text-7xl md:text-8xl font-bold text-[#222]">
              Mridula
              <br />
              Goel
            </h1>

            <p className="mt-10 text-xl text-gray-600 leading-9">
              Helping organizations transform complex business challenges into
              measurable growth through strategy, analytics and customer
              insights.
            </p>
          </div>
        )}

        {currentSlide === 1 && (
          <div className="w-full max-w-6xl px-10">
            <h2 className="text-6xl font-bold text-center text-[#222] mb-16">
              What I Bring
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">

              {slides[1].cards?.map((card) => (
                <div
                  key={card}
                  className="rounded-3xl bg-white shadow-xl p-10 hover:scale-105 transition duration-500"
                >
                  <h3 className="text-2xl font-semibold text-[#D63384]">
                    {card}
                  </h3>
                </div>
              ))}

            </div>
          </div>
        )}

        {currentSlide === 2 && (
          <div className="text-center max-w-4xl px-8">

            <p className="uppercase tracking-[0.4em] text-[#D63384] font-semibold mb-6">
              BUSINESS IMPACT
            </p>

            <h2 className="text-6xl font-bold text-[#222]">
              Data → Decisions → Growth
            </h2>

            <p className="mt-10 text-xl leading-9 text-gray-600">
              Helping organizations make smarter decisions through customer
              insights, analytics, experimentation, and strategic program
              leadership.
            </p>

          </div>
        )}

      </div>

      <div className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col gap-5">

        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-[#D63384] scale-150"
                : "bg-pink-200"
            }`}
          />
        ))}

      </div>
    </section>
  );
}