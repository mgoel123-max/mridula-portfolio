import { experiences } from "@/data/experience";
import TimelineCard from "./TimelineCard";

export default function Timeline() {
  return (
    <section className="relative max-w-6xl mx-auto">

      {/* Desktop vertical line */}
      <div className="hidden lg:block absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-pink-200" />

      {/* Mobile vertical line */}
      <div className="lg:hidden absolute left-4 top-0 h-full w-[2px] bg-pink-200" />

      <div className="space-y-14 md:space-y-20">
        {experiences.map((experience, index) => (
          <TimelineCard
            key={index}
            experience={experience}
            index={index}
          />
        ))}
      </div>

    </section>
  );
}