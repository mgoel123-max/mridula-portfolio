import Image from "next/image";

const topics = [
  "Business Strategy",
  "Marketing",
  "Economics",
  "Consumer Psychology",
  "Technology & AI",
  "Retail",
  "Leadership",
  "Food",
  "Travel",
  "Lifestyle",
];

export default function Insights() {
  return (
    <section
      id="insights"
      className="bg-[#FFF8FA] py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}

        <div className="mb-20 text-center">

          <p className="uppercase tracking-[0.35em] text-[#D63384] font-semibold">
            Insights
          </p>

          <h2 className="text-6xl font-bold text-[#222] mt-5">
            The Curious Mind
          </h2>

          <p className="text-xl text-gray-600 mt-8 max-w-3xl mx-auto leading-9">
            Exploring the intersection of business, marketing,
            economics, technology, food, travel and everyday life.
          </p>

        </div>

        {/* Featured Blog */}

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Image */}

          <div>

            <Image
              src="/images/blog-cover.png"
              alt="The Curious Mind"
              width={900}
              height={700}
              className="rounded-3xl shadow-2xl object-cover"
            />

          </div>

          {/* Content */}

          <div>

            <span className="bg-pink-100 text-[#D63384] px-4 py-2 rounded-full text-sm font-semibold">
              Featured Article
            </span>

            <h3 className="text-5xl font-bold mt-8 text-[#222]">
              How Curiosity Connects Everything
            </h3>

            <p className="mt-8 text-lg text-gray-600 leading-9">

              One of the most fascinating things about the world is that
              nothing exists in isolation.

            </p>

            <p className="mt-6 text-lg text-gray-600 leading-9">

              A new technology changes consumer behaviour.
              Consumer behaviour changes marketing.
              Marketing changes retail.
              Retail transforms supply chains.
              Supply chains influence economies.

            </p>

            <p className="mt-6 text-lg text-gray-600 leading-9">

              Every decision creates another ripple.

              Through this space I explore those connections—
              from consulting, strategy and analytics to food,
              travel, leadership and the ideas that shape the
              future of business.

            </p>

            <button
              className="mt-10 bg-[#D63384] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#B5175A] transition duration-300"
            >
              Read Article →
            </button>

          </div>

        </div>

        {/* Topics */}

        <div className="mt-24">

          <h3 className="text-3xl font-bold text-[#222] mb-10">
            Topics I'll Write About
          </h3>

          <div className="flex flex-wrap gap-4">

            {topics.map((topic) => (

              <div
                key={topic}
                className="
                  px-6
                  py-3
                  rounded-full
                  bg-white
                  border
                  border-pink-100
                  shadow-md
                  hover:bg-[#D63384]
                  hover:text-white
                  transition
                  duration-300
                  cursor-pointer
                "
              >
                {topic}
              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}