import Navbar from "../components/Navbar";
import { useRef } from "react";
export default function Layout({ children }) {
  const links = useRef([
    { title: "Features", location: "#features" },
    { title: "Projects", location: "#projects" },
    { title: "Roadmap", location: "/roadmap" },
    { title: "Whitepaper", location: "#" },
    { title: "Blog", location: "#" },
    { title: "FAQs", location: "#" },
  ]);

  return (
    <>
      <Navbar navLinks={links.current} />
      <div>{children}</div>
    </>
  );
}
