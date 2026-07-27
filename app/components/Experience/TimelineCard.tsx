type Props = {
  experience: {
    year: string;
    company: string;
    title: string;
    category: string;
    achievements: string[];
  };
};

export default function TimelineCard({ experience }: Props) {
  return (
    <div className="relative flex gap-10">

      {/* Timeline Dot */}

      <div className="relative z-10 flex-shrink-0">

        <div className="w-5 h-5 rounded-full bg-pink-500 border-4 border-white shadow-lg" />

      </div>

      {/* Content */}

      <div className="pb-10">

        <p className="text-pink-500 font-semibold mb-2">
          {experience.year}
        </p>

        <h2 className="text-3xl font-bold mb-1">
          {experience.title}
        </h2>

        <p className="text-gray-500 mb-4">
          {experience.company}
        </p>

        <span className="inline-block rounded-full bg-pink-50 text-pink-600 px-4 py-1 text-sm mb-6">
          {experience.category}
        </span>

        <ul className="space-y-3">
          {experience.achievements.map((achievement) => (
            <li
              key={achievement}
              className="flex items-start gap-3 text-gray-700"
            >
              <span className="text-pink-500 mt-1">●</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>

      </div>

    </div>
  );
}