import Navbar from "../components/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Insights() {
  return (
    <>
      <Navbar />

      <main className="bg-white min-h-screen pt-28 md:pt-36 lg:pt-40 pb-20">
        <section className="max-w-7xl mx-auto px-8">

          {/* Page Heading */}

          <h1 className="text-6xl font-bold text-[#222]">
            
          </h1>

          <p className="mt-8 text-xl text-gray-600 max-w-3xl leading-9">
          
          </p>

          {/* Featured Blog */}

<div className="grid lg:grid-cols-12 gap-20 mt-20 items-center">
  {/* Article Content */}

  <div className="lg:col-span-5 max-w-xl">

    <span className="text-[#D63384] uppercase tracking-widest font-semibold">
      Featured Article
    </span>

    <h2 className="text-5xl font-bold mt-6 text-[#222]">
      The Curious Mind
    </h2>

    <p className="mt-8 text-lg text-gray-600 leading-9">
      How does technology reshape consumer behaviour?
      How does public policy influence innovation?
      How does culture affect marketing?
    </p>

    <p className="mt-6 text-lg text-gray-600 leading-9">
      Through this blog, I explore the fascinating
      connections between business strategy,
      marketing, economics, public policy, and technology.
      I also write about food, travel and everyday life.
    </p>
<Link
  href="/insights/bengaluru-history"
  className="
    inline-flex
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
</Link>

  </div>

  {/* Image */}

 <div className="lg:col-span-7 flex justify-end">

 <div className="bg-white rounded-3xl p-4 md:p-6 max-w-2xl w-full">

      <Image
        src="/images/blog_page_image.png"
        alt="The Curious Mind"
        width={1300}
        height={1000}
        className="rounded-3xl w-full h-auto"
        priority
      />

    </div>
  </div>

</div>
        </section>
      </main>
    </>
  );
}