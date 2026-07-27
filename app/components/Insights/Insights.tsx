import Image from "next/image";

export default function Insights() {
  return (
    <main className="bg-white min-h-screen pt-28 md:pt-36 lg:pt-40 pb-20">
      <section className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">

        {/* Page Heading */}

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
        </h1>

        <p className="mt-6 text-base md:text-lg text-gray-600 max-w-3xl leading-8">
        </p>

        {/* Featured Blog */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mt-16 md:mt-20 items-center">

          {/* Content */}

          <div className="lg:col-span-5 max-w-xl">

            <span className="uppercase tracking-[0.3em] text-[#D63384] font-semibold text-sm">
              Featured Article
            </span>

            <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              The Curious Mind
            </h2>

            <p className="mt-6 text-base md:text-lg text-gray-600 leading-8">
              Why does technology reshape consumer behaviour?
              Why do economies influence innovation?
              Why does culture affect marketing?
            </p>

            <p className="mt-6 text-base md:text-lg text-gray-600 leading-8">
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
                  px-7
                  py-3.5
                  text-white
                  font-semibold
                  shadow-md
                  transition-all
                  duration-300
                  hover:bg-[#B5175A]
                  hover:shadow-lg
                "
            >
              Read Article →
            </button>

          </div>

          {/* Image */}

          <div className="lg:col-span-7 flex justify-center lg:justify-end">

            <div className="bg-white rounded-3xl p-4 md:p-6 max-w-2xl w-full">

              <Image
                src="/images/blog_page_image.png"
                alt="The Curious Mind"
                width={1300}
                height={1000}
                priority
                className="w-full h-auto rounded-3xl shadow-xl"
              />

            </div>

          </div>

        </div>

      </section>
    </main>
    
  );
}
