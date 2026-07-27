import Timeline from "./Timeline";

export default function Experience() {
  return (
    <section className="bg-white pt-24 md:pt-32 lg:pt-36 pb-20 md:pb-28">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Hero Section */}

        <div className="text-center">

          <p className="uppercase tracking-[0.35em] text-[#D63384] font-semibold text-sm md:text-base">
            
          </p>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-bold text-[#172033] leading-tight">
         
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-base sm:text-lg lg:text-xl leading-8 lg:leading-9 text-gray-600">
           
          </p>

        </div>

        {/* Timeline */}

        <div className="mt-20 md:mt-24 lg:mt-32">
          <Timeline />
        </div>

      </div>

    </section>
  );
}