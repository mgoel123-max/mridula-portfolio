type Props = {
  index: number;

  experience: {
    year: string;
    company: string;
    title: string;
    category: string;
    achievements: string[];
  };
};

export default function TimelineCard({
  experience,
  index,
}: Props) {
  const isLeft = index % 2 === 0;

  return (
    <>
      {/* ---------------- Mobile ---------------- */}

      <div className="relative flex gap-6 lg:hidden">

        {/* Dot */}

        <div className="relative z-10 flex-shrink-0">
          <div className="w-5 h-5 rounded-full bg-pink-500 border-4 border-white shadow-md mt-3" />
        </div>

        {/* Card */}

        <div
          className="
            w-full
            rounded-3xl
            bg-white
            p-6
            shadow-lg
            border
            border-pink-100
          "
        >
          <p className="text-pink-500 font-semibold">
            {experience.year}
          </p>

          <h3 className="text-2xl font-bold mt-2">
            {experience.title}
          </h3>

          <p className="text-gray-500 mt-1">
            {experience.company}
          </p>

          <span className="inline-block mt-5 rounded-full bg-pink-50 text-pink-600 px-4 py-1 text-sm">
            {experience.category}
          </span>

          <ul className="mt-6 space-y-3">
            {experience.achievements.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3"
              >
                <span className="text-pink-500 mt-1">●</span>

                <span className="text-gray-700">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ---------------- Desktop ---------------- */}

      <div
        className={`
          hidden
          lg:flex
          items-center
          relative
          ${isLeft ? "justify-start" : "justify-end"}
        `}
      >
        <div
          className={`
            w-[44%]
            rounded-3xl
            bg-white
            p-8
            shadow-lg
            border
            border-pink-100
            transition
            duration-300
            hover:shadow-xl
            ${isLeft ? "mr-auto text-right" : "ml-auto"}
          `}
        >
          <p className="text-pink-500 font-semibold">
            {experience.year}
          </p>

          <h3 className="text-3xl font-bold mt-2">
            {experience.title}
          </h3>

          <p className="text-gray-500 mt-1">
            {experience.company}
          </p>

          <span className="inline-block mt-5 rounded-full bg-pink-50 text-pink-600 px-4 py-1 text-sm">
            {experience.category}
          </span>

          <ul className="mt-6 space-y-3">
            {experience.achievements.map((item) => (
              <li
                key={item}
                className={`
                  flex
                  gap-3
                  ${
                    isLeft
                      ? "justify-end"
                      : "justify-start"
                  }
                `}
              >
                {!isLeft && (
                  <span className="text-pink-500">
                    ●
                  </span>
                )}

                <span>{item}</span>

                {isLeft && (
                  <span className="text-pink-500">
                    ●
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Center Dot */}

        <div
          className="
            absolute
            left-1/2
            -translate-x-1/2
            z-20
          "
        >
          <div className="w-6 h-6 rounded-full bg-pink-500 border-4 border-white shadow-lg" />
        </div>
      </div>
    </>
  );
}