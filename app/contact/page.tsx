import Navbar from "../components/Navbar/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#FFF8FA] pt-40">

        <section className="max-w-5xl pl-20 pr-10">

          <span className="uppercase tracking-[0.35em] text-[#D63384] font-semibold">
            GET IN TOUCH
          </span>

          <h1 className="mt-6 text-6xl font-bold text-[#222]">
            
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-600">
            Whether you'd like to discuss strategy, analytics, consulting,
            product management, or simply exchange ideas, I'd love to hear
            from you.
          </p>

          <div className="mt-16 space-y-8">

            <div>
              <p className="text-sm uppercase tracking-widest text-[#D63384]">
                Email
              </p>

           <a
  href="mailto:mridula.goel@utexas.edu"
  className="mt-8 inline-block max-w-2xl text-xl leading-9 text-gray-600 transition-colors duration-300 hover:text-[#D63384]"
>
  mridula.goel@utexas.edu
</a>
            </div>

            <div>
              <p className="text-sm uppercase tracking-widest text-[#D63384]">
                LinkedIn
              </p>

            <a
  href="https://linkedin.com/in/mridula-goel"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-block max-w-2xl text-xl leading-9 text-gray-600 transition-colors duration-300 hover:text-[#D63384]"
>
  linkedin.com/in/mridula-goel
</a>
            </div>

            <div>
              <p className="text-sm uppercase tracking-widest text-[#D63384]">
                
              </p>

              <a
                href="https://github.com/yourusername"
                target="_blank"
                className="mt-2 inline-block text-2xl font-medium text-[#222] hover:text-[#D63384] transition"
              >
                
              </a>
            </div>

          </div>

        </section>

      </main>
    </>
  );
}