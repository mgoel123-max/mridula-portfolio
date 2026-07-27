import Navbar from "../components/Navbar/Navbar";

export default function Projects() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white pt-28 md:pt-36 lg:pt-40 pb-20">

        <section className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">

          <span className="uppercase tracking-[0.3em] text-[#D63384] font-semibold text-sm md:text-base">
            PROJECTS
          </span>

          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Projects
          </h1>

          <p className="mt-6 max-w-3xl text-base md:text-lg text-gray-600 leading-8">
            A collection of analytics, AI, data science, consulting,
            program management, and business strategy projects that
            demonstrate how I transform data into measurable business
            outcomes.
          </p>

          {/* Project cards will go here */}

        </section>

      </main>
    </>
  );
}