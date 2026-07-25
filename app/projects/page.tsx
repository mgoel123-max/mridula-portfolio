import Navbar from "../components/Navbar/Navbar";

export default function Projects() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#FFF8FA] pt-40 px-10">

        <h1 className="text-6xl font-bold">
          Projects
        </h1>

        <p className="mt-8 text-xl text-gray-600">
          A selection of analytics,
          AI and strategy projects.
        </p>

      </main>

    </>
  );
}