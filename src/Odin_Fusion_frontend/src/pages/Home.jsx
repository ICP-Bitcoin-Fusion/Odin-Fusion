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

// team members

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

  return (
    <main className="black-gradient">
      <Navbar />
      <Hero />
      <FeatureSection features={features.current} />
      <RoadMapSection milestones={[]} projects={projects.current} />
      <TeamSection />
    </main>
  );
}
