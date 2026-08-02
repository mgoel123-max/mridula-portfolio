"use client";

import { useEffect, useState } from "react";

import {
  TrendingUp,
  BriefcaseBusiness,
  Users,
  ShoppingBag,
  BarChart3,
  MessageSquare,
} from "lucide-react";

const slides = [
  {
    id: 1,
    nav: "Introduction",
    title: "Mridula Goel",
    subtitle: "",
    description: "",
  },
  {
    id: 2,
    nav: "Expertise",
    title: "What I Bring",
    cards: [
      {
        title: "Strategy & Business Insights",
        description:
          "Delivered weekly business reviews to executive leadership to optimize investment of $100M+ promo dollars",
        icon: TrendingUp,
      },
      {
        title: "Program & Transformation",
        description:
          "Leading cross-functional initiatives from user requirements to execution to deliver efficiency and $15M+ annual savings",
        icon: BriefcaseBusiness,
      },
      {
        title: "Cross-functional Leadership",
        description:
          "Building alignment across business, technology, data science and strategy teams",
        icon: Users,
      },
      {
        title: "Customer & Retail Excellence",
        description:
          "Deep expertise in consumer behaviour, retail strategy, ecommerce and marketing effectiveness",
        icon: ShoppingBag,
      },
      {
        title: "Analytics that Drive Growth",
        description:
          "Expertise in applying advanced analytical techniques and AI tools to find actionable, high-impact insights",
        icon: BarChart3,
      },
      {
        title: "Executive Communication",
        description:
          "Presented and delivered complex analyses to executive leadership",
        icon: MessageSquare,
      },
    ],
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section
      className="
        relative
        bg-white
        min-h-screen
        flex
        flex-col
        justify-center
        overflow-hidden
        pt-24
        md:pt-28
        pb-32
      "
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}

      <div
        className="
          flex-1
          w-full
          max-w-7xl
          mx-auto
          px-6
          md:px-10
          lg:px-16
          flex
          items-center
          justify-center
        "
      >
        {/* ---------------- HOME ---------------- */}

        {currentSlide === 0 && (
          <div
            className="
              text-center
              max-w-5xl
              mx-auto
              animate-fade
            "
          >
            <p
              className="
                uppercase
                text-5xl
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
                tracking-[0.35em]
                font-semibold
                text-[#D63384]
                mb-4
              "
            >
              {slides[0].subtitle}
            </p>

            <h1
              className="
                font-bold
                tracking-tight
                text-gray-900
                leading-tight
                text-5xl
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
              "
            >
              Mridula Goel
            </h1>

            <p
              className="
                mt-6
                max-w-2xl
                mx-auto
                text-base
                md:text-lg
                lg:text-xl
                leading-8
                text-gray-600
              "
            >
              {slides[0].description}
            </p>
          </div>
        )}

        {/* ---------------- WHAT I BRING ---------------- */}

        {currentSlide === 1 && (
          <div
            className="
              w-full
              max-w-7xl
              mx-auto
              animate-fade
            "
          >
            <p className="uppercase tracking-[0.35em] text-[#D63384] font-semibold text-center mb-16"></p>

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                gap-6
              "
            >
              {slides[1].cards?.map((card) => {
                const Icon = card.icon;

                return (
                  <div
                    key={card.title}
                    className="
                      group
                      rounded-3xl
                      bg-white
                      p-6
                      border
                      border-pink-100
                      shadow-md
                      transition-all
                      duration-300
                      hover:-translate-y-2
                      hover:shadow-xl
                      hover:border-[#D63384]
                    "
                  >
                    <div
                      className="
                        mb-4
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        bg-pink-50
                        transition-all
                        duration-300
                        group-hover:bg-[#D63384]
                      "
                    >
                      <Icon
                        size={22}
                        className="
                          text-[#D63384]
                          transition-all
                          duration-300
                          group-hover:text-white
                        "
                      />
                    </div>

                    <h3 className="text-lg font-semibold text-[#222] leading-6">
                      {card.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      {card.description}
                    </p>

                    <div
                      className="
                        mt-5
                        h-1
                        w-12
                        rounded-full
                        bg-[#D63384]
                        transition-all
                        duration-300
                        group-hover:w-24
                      "
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}

      <div
        className="
          absolute
          bottom-8
          md:bottom-10
          left-1/2
          -translate-x-1/2
          flex
          gap-5
          md:gap-10
          lg:gap-14
          z-30
        "
      >
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlide(index)}
            className="group flex flex-col items-center"
          >
            <span
              className={`
                text-sm
                md:text-base
                lg:text-lg
                font-medium
                transition-all
                duration-300
                ${
                  currentSlide === index
                    ? "text-[#D63384]"
                    : "text-gray-400 group-hover:text-[#D63384]"
                }
              `}
            >
              {slide.nav}
            </span>

            <span
              className={`
                mt-2
                h-[3px]
                rounded-full
                transition-all
                duration-300
                ${
                  currentSlide === index
                    ? "w-full bg-[#D63384]"
                    : "w-0 bg-[#D63384] group-hover:w-full"
                }
              `}
            />
          </button>
        ))}
      </div>
    </section>
  );
}