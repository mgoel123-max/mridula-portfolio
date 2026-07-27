import { experiences } from "@/data/experience";
import TimelineCard from "./TimelineCard";

export default function Timeline() {
  return (
    <div className="relative">

      {/* Vertical Line */}

      <div className="absolute left-6 top-0 h-full w-[2px] bg-pink-200" />

      <div className="space-y-20">

        {experiences.map((experience, index) => (
          <TimelineCard
            key={index}
            experience={experience}
          />
        ))}

      </div>

    </div>
  );
}