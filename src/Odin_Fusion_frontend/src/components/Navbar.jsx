import Logo from "/images/Upper corner.png";
import AccentButton from "./AccentButton";

export default function Navbar({ navLinks }) {
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
          {navLinks.map(({ title, location }, idx) => {
            return (
              <a className="mr-5 text-light-font " href={location} key={idx}>
                {title}
              </a>
            );
          })}
        </nav>
        <AccentButton text="Launch App" func={() => {}} />
      </div>
    </header>
  );
}
