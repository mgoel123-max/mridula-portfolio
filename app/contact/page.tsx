import Navbar from "../components/Navbar/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white pt-28 md:pt-36 lg:pt-40 pb-20">

        <section className="max-w-5xl mx-auto px-5 md:px-8 lg:px-10">

          {/* Heading */}

          <span className="uppercase tracking-[0.3em] text-[#D63384] font-semibold text-sm md:text-base">
            GET IN TOUCH
          </span>

          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Let's Connect
          </h1>

          <p className="mt-6 max-w-3xl text-base md:text-lg text-gray-600 leading-8">
            Whether you'd like to discuss strategy, analytics, consulting,
            program management, product management, or simply exchange ideas,
            I'd love to hear from you.
          </p>

          {/* Contact Cards */}

          <div className="mt-14 grid gap-6">

            {/* Email */}

            <div className="rounded-3xl border border-pink-100 bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300">

              <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#D63384] font-semibold">
                Email
              </p>

              <a
                href="mailto:mridula.goel@utexas.edu"
                className="mt-4 block text-lg md:text-xl text-gray-700 hover:text-[#D63384] transition-colors break-all"
              >
                mridula.goel@utexas.edu
              </a>

            </div>

            {/* LinkedIn */}

            <div className="rounded-3xl border border-pink-100 bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300">

              <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#D63384] font-semibold">
                LinkedIn
              </p>

              <a
                href="https://linkedin.com/in/mridula-goel"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block text-lg md:text-xl text-gray-700 hover:text-[#D63384] transition-colors break-all"
              >
                linkedin.com/in/mridula-goel
              </a>

            </div>

            


          </div>

        </section>

      </main>
    </>
  );
}