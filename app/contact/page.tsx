import Navbar from "../components/Navbar/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#FFF8FA] pt-40 px-10">

        <h1 className="text-6xl font-bold">
          Contact
        </h1>

        <p className="mt-8 text-xl text-gray-600">
          Let's connect and build something meaningful.
        </p>

      </main>

    </>
  );
}