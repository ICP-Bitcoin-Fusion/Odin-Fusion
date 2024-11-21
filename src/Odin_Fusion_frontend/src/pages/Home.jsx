import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import RoadMapSection from "../components/RoadMapSection";
import TeamSection from "../components/TeamSection";

// assets
import openIMG from "/images/assets/Open Source Icon.png";
import reliableIMG from "/images/assets/Reliable Icon.png";
import DaoIMG from "/images/assets/dao.png";
import ProjectBG from "/images/backgrounds/download 1.png";
// utils
import { useRef } from "react";

export default function Home() {
  const features = useRef([
    {
      icon: openIMG,
      heading: "OPEN SOURCE",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      icon: reliableIMG,
      heading: "RELAIBLE",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
    {
      icon: DaoIMG,
      heading: "DAO CONTROLLED",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
  ]);

  const milestones = useRef([
    { icon: "", heading: "", text: "" },
    { icon: "", heading: "", text: "" },
    { icon: "", heading: "", text: "" },
    { icon: "", heading: "", text: "" },
  ]);

  const projects = useRef({
    live: [
      {
        image: ProjectBG,
        projectName: "NFT MOKO",
        goal: "10000.0 GOAL",
        live: "Live now",
        author: "Sukuna Mokoto",
      },
      {
        image: ProjectBG,
        projectName: "NFT MOKO",
        goal: "10000.0 GOAL",
        live: "Live now",
        author: "Sukuna Mokoto",
      },
      {
        image: ProjectBG,
        projectName: "NFT MOKO",
        goal: "10000.0 GOAL",
        live: "Live now",
        author: "Sukuna Mokoto",
      },
    ],
    funded: [
      {
        image: ProjectBG,
        projectName: "NFT MOKO",
        goal: "10000.0 GOAL",
        live: "Live now",
        author: "Sukuna Mokoto",
      },
      {
        image: ProjectBG,
        projectName: "NFT MOKO",
        goal: "10000.0 GOAL",
        live: "Live now",
        author: "Sukuna Mokoto",
      },
      {
        image: ProjectBG,
        projectName: "NFT MOKO",
        goal: "10000.0 GOAL",
        live: "Live now",
        author: "Sukuna Mokoto",
      },
    ],
  });

  const teamMembers = useRef([
    {
      image: "",
      member: "Sukuna",
      bio: "Sukuna is a Software Engineer with over 25 years of experience spanning diverse domains, particularly in web technologies and scalable system architectures. Recently, he has been dedicated to designing and optimizing distributed systems and microservice architectures to support high-performance e-commerce platforms. Sukuna prioritizes building efficient, maintainable, and robust software solutions. He holds a Master’s Degree in Computer Science and Engineering from the Massachusetts Institute of Technology (MIT).",
    },
    {
      image: "",
      member: "Technogodwr",
      bio: "Technogodwr is a Software Engineer with over 25 years of experience spanning diverse domains, particularly in web technologies and scalable system architectures. Recently, he has been dedicated to designing and optimizing distributed systems and microservice architectures to support high-performance e-commerce platforms. Technogodwr prioritizes building efficient, maintainable, and robust software solutions. He holds a Master’s Degree in Computer Science and Engineering from the Massachusetts Institute of Technology (MIT).",
    },
    {
      image: "",
      member: "Daniel",
      bio: "Daniel is a Software Engineer with over 25 years of experience spanning diverse domains, particularly in web technologies and scalable system architectures. Recently, he has been dedicated to designing and optimizing distributed systems and microservice architectures to support high-performance e-commerce platforms. Daniel prioritizes building efficient, maintainable, and robust software solutions. He holds a Master’s Degree in Computer Science and Engineering from the Massachusetts Institute of Technology (MIT).",
    },
  ]);
  return (
    <main className="black-gradient">
      <Navbar />
      <Hero />
      <FeatureSection features={features.current} />
      {/* <RoadMapSection
        milestones={milestones.current}
        projects={projects.current}
      /> */}
      <TeamSection team={teamMembers.current} />
    </main>
  );
}
