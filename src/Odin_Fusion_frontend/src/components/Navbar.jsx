import Logo from "/images/Upper corner.png";
import AccentButton from "./AccentButton";
import { useRef } from "react";

export default function Navbar() {
  const navLinks = useRef([
    { title: "Features", location: "#features" },
    { title: "Projects", location: "#projects" },
    { title: "Roadmap", location: "/roadmap" },
    { title: "Whitepaper", location: "#" },
    { title: "Blog", location: "#" },
    { title: "FAQs", location: "#" },
  ]);
  return (
    <header className="text-gray-600 body-font sticky top-0 border-b-2 my-head z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          className="flex title-font font-medium items-center text-light-font mb-4 md:mb-0"
          href="/"
        >
          <img src={Logo} alt="odin-fusion-logo" />
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {navLinks.current.map(({ title, location }, idx) => {
            return (
              <a className="mr-5 text-light-font " href={location} key={idx}>
                {title}
              </a>
            );
          })}
        </nav>
        <a href="/auth">
          <AccentButton text="Launch App" func={() => {}} />
        </a>
      </div>
    </header>
  );
}
