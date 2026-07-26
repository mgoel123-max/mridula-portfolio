"use client";

import { useEffect, useState } from "react";

import {
  TrendingUp,
  BriefcaseBusiness,
  Users,
  ShoppingBag,
  BarChart3,
} from "lucide-react";

const slides = [
  {
    id: 1,
    nav: "Introduction",
    title: "Mridula Goel",
    subtitle: "PROGRAM MANAGER • CUSTOMER-FOCUSED • ANALYTICS & STRATEGY",
    description:
      "Helping organizations transform complex business challenges into measurable growth through strategy, analytics and customer insights.",
  },
{
  id: 2,
  nav: "What I Bring",
  title: "What I Bring",
  cards: [
    {
      title: "Strategy & Business Insights",
      description:
        "Turning complex data into strategic decisions that accelerate business growth.",
      icon: TrendingUp,
    },
    {
      title: "Program & Transformation",
      description:
        "Leading cross-functional initiatives from strategy through execution.",
      icon: BriefcaseBusiness,
    },
    {
      title: "Cross-functional Leadership",
      description:
        "Building alignment across business, technology and leadership teams.",
      icon: Users,
    },
    {
      title: "Customer & Retail Excellence",
      description:
        "Deep expertise in consumer behaviour, retail strategy and marketing effectiveness.",
      icon: ShoppingBag,
    },
    {
      title: "Analytics that Drive Growth",
      description:
        "Transforming insights into measurable business impact through analytics and experimentation.",
      icon: BarChart3,
    },
  ],
},
  {
    id: 3,
    nav: "Business Impact",
    title: "Data → Decisions → Growth",
    subtitle: "BUSINESS IMPACT",
    description:
      "Helping organizations make smarter decisions through customer insights, analytics, experimentation and strategic program leadership.",
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
      className="relative h-screen bg-[#FFF7FA] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}

      <div className="flex h-full items-center justify-center px-8">

        {/* ---------------- HOME ---------------- */}

        {currentSlide === 0 && (
          <div className="text-center max-w-4xl animate-fade">

            <p
                className="
                  uppercase
                  text-[clamp(0.75rem,1.2vw,1rem)]
                  tracking-[0.35em]
                  font-semibold
                  text-[#D63384]
                  mb-8
                  whitespace-nowrap
                "
              >
                {slides[0].subtitle}
              </p>

          <h1
              className="
                text-[clamp(4rem,8vw,7rem)]
                font-bold
                tracking-tight
                text-[#222]
                leading-none
                whitespace-nowrap
              "
            >
              Mridula Goel
            </h1>

            <p className="mt-10 text-xl leading-9 text-gray-600">
              {slides[0].description}
            </p>

          </div>
        )}

        {/* ---------------- WHAT I BRING ---------------- */}

        {currentSlide === 1 && (
  <div className="w-full max-w-7xl animate-fade">

    <p className="uppercase tracking-[0.35em] text-[#D63384] font-semibold text-center mb-4">
      MY EXPERTISE
    </p>

   <p className="uppercase tracking-[0.35em] text-[#D63384] font-semibold text-center mb-16">

</p>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

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
        {/* ---------------- BUSINESS IMPACT ---------------- */}

        {currentSlide === 2 && (
          <div className="text-center max-w-4xl animate-fade">

            <p className="uppercase tracking-[0.45em] text-[#D63384] font-semibold mb-6">
              {slides[2].subtitle}
            </p>

            <h2 className="text-6xl font-bold text-[#222]">
              {slides[2].title}
            </h2>

            <p className="mt-10 text-xl leading-9 text-gray-600">
              {slides[2].description}
            </p>

          </div>
        )}

      </div>

      {/* Navigation */}

      <div
        className="
          absolute
          bottom-14
          left-1/2
          -translate-x-1/2
          flex
          gap-14
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
                text-lg
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