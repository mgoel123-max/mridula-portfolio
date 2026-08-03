import Image from "next/image";
import Link from "next/link";

export default function BengaluruHistory() {
  return (
    <main className="bg-white min-h-screen pt-28 md:pt-36 pb-24">

      {/* Article Header */}
      <article className="max-w-5xl mx-auto px-5 md:px-8">

        {/* Back to Insights */}
        <Link
          href="/insights"
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-[#D63384] transition-colors"
        >
          ← Back to Insights
        </Link>

        {/* Category */}
        <div className="mt-12">
          <span className="uppercase tracking-[0.3em] text-[#D63384] font-semibold text-sm">
            History & Innovation
          </span>
        </div>

        {/* Title */}
        <h1
          className="
            mt-6
            text-4xl
            md:text-6xl
            lg:text-7xl
            font-bold
            tracking-tight
            leading-[1.05]
            text-gray-900
            max-w-5xl
          "
        >
          Before Silicon Valley:
          <br />
          The Industrial Story That Built Bengaluru
        </h1>
{/* HERO IMAGE — PUT IT HERE */}

<div className="mt-12">
  <Image
    src="/images/bengaluru-history.jpg"
    alt="Historic Bengaluru"
    width={1600}
    height={900}
    priority
    className="w-full rounded-3xl shadow-xl"
  />
</div>
        {/* Subtitle */}
        <p
          className="
            mt-8
            text-xl
            md:text-2xl
            leading-9
            text-gray-600
            max-w-4xl
          "
        >
          Long before Infosys, Wipro and India's IT revolution, Bengaluru was
          becoming a city of engineers, scientists, factories and aerospace
          pioneers.
        </p>

        {/* Byline */}
        <div className="mt-8 pb-10 border-b border-gray-200">
          <p className="text-sm text-gray-500">
            By <span className="font-semibold text-gray-800">Mridula Goel</span>
            {" "} | Bengaluru
          </p>
        </div>

       
        {/* Article Content */}
        <div
          className="
            mt-14
            max-w-3xl
            mx-auto
            text-gray-700
            text-lg
            md:text-xl
            leading-9
          "
        >

          <p>
            When we talk about the history of Bengaluru, the story usually
            begins with <strong>Kempe Gowda</strong>, moves through the
            <strong> Mysore royal family</strong>, and then to the
            <strong> British Cantonment</strong>.
          </p>

          <p className="mt-8">
            But while exploring the city's history, I found myself struck by
            something else: the extraordinary presence of India's defence,
            aerospace and scientific institutions across Bengaluru.
          </p>

          <p className="mt-8">
            Why did a city that is now synonymous with software, startups and
            artificial intelligence become such an important centre for
            aerospace and defence in the first place?
          </p>

          <p className="mt-8">
            The answer lies in a chapter of Bengaluru's history that is often
            overshadowed by its famous IT revolution.
          </p>

          {/* Pull Quote */}
          <blockquote
            className="
              my-14
              border-l-4
              border-[#D63384]
              pl-6
              md:pl-8
              text-2xl
              md:text-3xl
              font-semibold
              leading-10
              text-gray-900
            "
          >
            Bengaluru's technology story didn't begin with the IT boom.
          </blockquote>

          <p>
            It began decades earlier, with industrialization, scientific
            research, engineering, manufacturing, aerospace and a deliberate
            effort by the Mysore state to build the foundations of a modern
            economy.
          </p>

          {/* Section */}
          <h2 className="mt-16 text-3xl md:text-4xl font-bold text-gray-900">
            A Different Kind of Economic Vision
          </h2>

          <p className="mt-8">
            At the beginning of the 20th century, Mysore was still predominantly
            an agricultural economy.
          </p>

          <p className="mt-8">
            But its rulers were thinking beyond agriculture.
          </p>

          <p className="mt-8">
            <strong>Krishnaraja Wadiyar IV</strong>, who became ruler as a
            teenager and formally took over in 1902, presided over a period of
            significant investment in education, infrastructure, electricity,
            irrigation, banking and industry.
          </p>

          <p className="mt-8">
            During his reign, Bengaluru received electric lighting in 1905.
            The Mysore state also became an important supporter of the
            institution that would become the Indian Institute of Science.
          </p>

          <blockquote
            className="
              my-12
              rounded-3xl
              bg-pink-50
              px-7
              py-8
              md:px-10
              md:py-10
              text-xl
              md:text-2xl
              font-semibold
              text-gray-900
            "
          >
            Don't wait for businesses to create an economy. Build the
            capabilities that allow businesses to emerge.
          </blockquote>

          <p>
            Instead of simply waiting for private companies to arrive, the
            state itself became an engine of economic development.
          </p>

          {/* Section */}
          <h2 className="mt-16 text-3xl md:text-4xl font-bold text-gray-900">
            The Visvesvaraya Blueprint
          </h2>

          <p className="mt-8">
            If one person deserves special attention in this story, it is
            <strong> Sir M. Visvesvaraya</strong>.
          </p>

          <p className="mt-8">
            An engineer by training, Visvesvaraya became Diwan of Mysore in
            1912.
          </p>

          <p className="mt-8">
            His economic philosophy could almost be expressed as a simple
            development model: education, technical skills, infrastructure,
            industry, jobs and higher incomes.
          </p>

          <p className="mt-8">
            He believed Mysore needed to industrialize rather than remain
            primarily dependent on agriculture.
          </p>

          <p className="mt-8">
            But industrialization created a classic chicken-and-egg problem.
            There were few factories to create demand for infrastructure. At
            the same time, businesses were reluctant to establish factories
            without reliable infrastructure.
          </p>

          <p className="mt-8">
            Mysore's answer was essentially to <strong>build the
            infrastructure first.</strong>
          </p>

          <p className="mt-8">
            The state invested in electricity, dams, irrigation, railways,
            roads, education, technical training and banking.
          </p>

          <p className="mt-8">
            The objective was to create an environment in which businesses
            could operate and grow.
          </p>

          {/* Section */}
          <h2 className="mt-16 text-3xl md:text-4xl font-bold text-gray-900">
            1909: The Institution That Helped Build Bengaluru's Talent
          </h2>

          <p className="mt-8">
            One of the most important pieces of this story was the
            establishment of the <strong>Indian Institute of Science in
            Bengaluru in 1909.</strong>
          </p>

          <p className="mt-8">
            IISc wasn't a business in the traditional sense.
          </p>

          <p className="mt-8">
            But economically, it may have been one of Bengaluru's most
            important institutions.
          </p>

          <p className="mt-8">
            It helped create a long-term concentration of scientists,
            engineers and technical expertise.
          </p>

          <p className="mt-8">
            That matters because Bengaluru's later aerospace, electronics and
            technology industries didn't emerge from nowhere.
          </p>

          <p className="mt-8">
            <strong>The talent ecosystem was already being built.</strong>
          </p>

          {/* Section */}
          <h2 className="mt-16 text-3xl md:text-4xl font-bold text-gray-900">
            From Industrial Vision to Execution
          </h2>

          <p className="mt-8">
            Visvesvaraya resigned as Diwan in 1918, but the industrialization
            agenda continued.
          </p>

          <p className="mt-8">
            <strong>Sir Mirza Ismail</strong>, who became Diwan in 1926,
            continued the development philosophy while bringing his own
            strengths in administration, commercialization and execution.
          </p>

          <p className="mt-8">
            Visvesvaraya represented engineering, infrastructure and
            industrial vision.
          </p>

          <p className="mt-8">
            Mirza Ismail brought administration, commercialization and
            execution.
          </p>

          <p className="mt-8">
            Together with the broader policies of the Mysore state, this helped
            create an environment where public and private industry could grow.
          </p>

          <p className="mt-8">
            Bengaluru's economy was no longer simply about being an
            administrative or military centre.
          </p>

          <p className="mt-8">
            <strong>It was becoming an industrial city.</strong>
          </p>

          {/* Section */}
          <h2 className="mt-16 text-3xl md:text-4xl font-bold text-gray-900">
            The Industries Before the IT Industry
          </h2>

          <p className="mt-8">
            Long before Bengaluru became India's software capital, the city
            had developed businesses and institutions in textiles,
            manufacturing, consumer goods, brewing and engineering.
          </p>

          <p className="mt-8">
            Textile mills became important employers.
          </p>

          <p className="mt-8">
            Government-backed industrial enterprises sought to turn Mysore's
            natural resources into manufactured products.
          </p>

          <p className="mt-8">
            The underlying principle was consistent: move from raw materials
            to higher-value production.
          </p>

          {/* Section */}
          <h2 className="mt-16 text-3xl md:text-4xl font-bold text-gray-900">
            1940: Bengaluru Takes to the Skies
          </h2>

          <p className="mt-8">
            Then came the development that perhaps best connects old Bengaluru
            to modern Bengaluru.
          </p>

          <p className="mt-8">
            In <strong>1940, Hindustan Aircraft Limited was established in
            Bengaluru by industrialist Walchand Hirachand.</strong>
          </p>

          <p className="mt-8">
            The company eventually became <strong>Hindustan Aeronautics
            Limited, or HAL.</strong>
          </p>

          <p className="mt-8">
            This was a significant shift.
          </p>

          <p className="mt-8">
            The city was no longer simply a centre for textiles and traditional
            manufacturing.
          </p>

          <p className="mt-8">
            It was developing capabilities in aerospace engineering.
          </p>

          <p className="mt-8">
            Aerospace created demand for precision manufacturing, electronics,
            advanced research, materials science and defence technology.
          </p>

          <p className="mt-8">
            That made aerospace much more than another industry.
          </p>

          <p className="mt-8">
            <strong>It helped create an ecosystem.</strong>
          </p>

          {/* Section */}
          <h2 className="mt-16 text-3xl md:text-4xl font-bold text-gray-900">
            The City That Built India's Engineers
          </h2>

          <p className="mt-8">
            After independence in 1947, India didn't abandon the industrial
            and scientific foundations that had developed in Bengaluru.
          </p>

          <p className="mt-8">
            It expanded them.
          </p>

          <p className="mt-8">
            Over the following decades, the city became home to major
            institutions and enterprises across aerospace, electronics,
            defence, research and engineering.
          </p>

          <p className="mt-8">
            HAL became a major aerospace institution. Bharat Electronics
            contributed to the city's electronics and defence capabilities.
            ISRO strengthened Bengaluru's position as a centre for space
            research and engineering. DRDO organizations and other research
            institutions added further depth to the city's scientific
            ecosystem.
          </p>

          <p className="mt-8">
            Together, these organizations created something that would prove
            invaluable when the software industry arrived.
          </p>

          <p className="mt-8 text-2xl md:text-3xl font-semibold text-gray-900">
            A city full of engineers.
          </p>

          {/* Section */}
          <h2 className="mt-16 text-3xl md:text-4xl font-bold text-gray-900">
            Then Came the IT Revolution
          </h2>

          <p className="mt-8">
            By the 1980s and 1990s, companies such as
            <strong> Infosys and Wipro</strong> were beginning to grow,
            followed by multinational technology companies.
          </p>

          <p className="mt-8">
            The world began to associate Bengaluru with software.
          </p>

          <p className="mt-8">
            The city's narrative transformed from industrial and engineering
            excellence to information technology, global outsourcing and
            eventually startups.
          </p>

          <p className="mt-8">
            But by then, Bengaluru had already spent decades accumulating the
            things technology companies needed most.
          </p>

          <p className="mt-8 font-semibold text-gray-900">
            Talent. Research. Engineering expertise. Institutions. Industry.
            Infrastructure.
          </p>

          {/* Final Section */}
          <h2 className="mt-16 text-3xl md:text-4xl font-bold text-gray-900">
            The IT Revolution Wasn't the Beginning
          </h2>

          <p className="mt-8">
            The conventional narrative is simple.
          </p>

          <p className="mt-8">
            Bengaluru became India's technology capital because of the IT
            revolution of the 1990s.
          </p>

          <p className="mt-8">
            But perhaps the more interesting story is that Bengaluru was
            preparing to become a technology capital long before the world
            called it one.
          </p>

          <p className="mt-8">
            The city's technology ecosystem wasn't built in a decade.
          </p>

          <p className="mt-8">
            <strong>It was accumulated over generations.</strong>
          </p>

          <p className="mt-8">
            The Mysore state's investment in infrastructure and industry,
            Krishnaraja Wadiyar IV's developmental vision, Visvesvaraya's
            engineering-led industrialization, Mirza Ismail's administrative
            execution, IISc's scientific ecosystem, and eventually HAL and
            India's post-independence aerospace and electronics institutions
            all contributed to creating a city unusually rich in technical
            talent.
          </p>

          <p className="mt-8">
            When the IT revolution arrived, it didn't have to build that
            ecosystem from scratch.
          </p>

          <p className="mt-8 text-2xl md:text-3xl font-semibold text-gray-900">
            It inherited it.
          </p>

          {/* Closing */}
          <div className="mt-16 mb-20 border-t border-gray-200 pt-12">

            <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-10">
              India's Silicon Valley was being built long before Silicon Valley
              became the city's identity.
            </p>

          </div>

          {/* Back */}
          <div className="pb-10">
            <Link
              href="/insights"
              className="
                inline-flex
                items-center
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
              ← Back to Insights
            </Link>
          </div>

        </div>
      </article>
    </main>
  );
}