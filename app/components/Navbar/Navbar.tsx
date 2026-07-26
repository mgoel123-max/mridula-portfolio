import Logo from "./Logo";
import Link from "next/link";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Experience",
    href: "/experience",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Insights",
    href: "/insights",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full px-8 py-5">
      <nav
        className="
  mx-auto
  max-w-7xl
  px-8
  py-4
  flex
  items-center
  justify-start
"
      >
        {/* Logo */}
        <Logo />

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-10 ml-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="
                relative
                font-medium
                text-gray-700
                transition-colors
                duration-300
                hover:text-[#D63384]
                group
              "
            >
              {link.name}

              <span
                className="
                  absolute
                  left-0
                  -bottom-1
                  h-[2px]
                  w-0
                  bg-[#D63384]
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </Link>
          ))}
        </div>


      </nav>
    </header>
  );
}