export default function Logo() {
  return (
    <a href="#" className="flex items-center gap-4">

      <div
        className="
          h-12
          w-12
          rounded-full
          bg-[#D63384]
          text-white
          flex
          items-center
          justify-center
          text-lg
          font-bold
          shadow-lg
          transition-transform
          duration-300
          hover:scale-110
        "
      >
        MG
      </div>

      <div>

        <h1 className="text-lg font-semibold text-[#222]">
          Mridula Goel
        </h1>

        <p className="text-sm text-gray-500">
          
        </p>

      </div>

    </a>
  );
}