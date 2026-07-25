import Navbar from "../components/Navbar/Navbar";
import Image from "next/image";

export default function Insights() {
  return (
    <>
      <Navbar />

      <main className="bg-[#FFF8FA] min-h-screen pt-40">
        <section className="max-w-7xl mx-auto px-8">

          {/* Page Heading */}

          <h1 className="text-6xl font-bold text-[#222]">
            Insights
          </h1>

          <p className="mt-8 text-xl text-gray-600 max-w-3xl leading-9">
            Thoughts on business, marketing, economics,
            AI, food, travel and everyday life.
          </p>

          {/* Featured Blog */}

          <div className="grid lg:grid-cols-2 gap-16 mt-20 items-center">

            {/* Image */}

            <div className="bg-[#FFF8FA] rounded-3xl p-6">
              <Image
                src="/images/blog-cover.png"
                alt="The Curious Mind"
                width={700}
                height={500}
                className="rounded-3xl w-full h-auto"
                priority
              />
            </div>

            {/* Article Content */}

            <div>

              <span className="text-[#D63384] uppercase tracking-widest font-semibold">
                Featured Article
              </span>

              <h2 className="text-5xl font-bold mt-6 text-[#222]">
                The Curious Mind
              </h2>

              <p className="mt-8 text-lg text-gray-600 leading-9">
                Why does technology reshape consumer behaviour?
                Why do economies influence innovation?
                Why does culture affect marketing?
              </p>

              <p className="mt-6 text-lg text-gray-600 leading-9">
                Through this blog, I explore the fascinating
                connections between business strategy,
                marketing, economics, technology,
                food, travel and everyday life.
              </p>

              <button
                className="
                  mt-10
                  rounded-full
                  bg-[#D63384]
                  px-8
                  py-4
                  text-white
                  font-semibold
                  shadow-lg
                  transition-all
                  duration-300
                  hover:bg-[#B5175A]
                  hover:scale-105
                "
              >
                Read Article →
              </button>

            </div>

          </div>

        </section>
      </main>
    </>
  );
}