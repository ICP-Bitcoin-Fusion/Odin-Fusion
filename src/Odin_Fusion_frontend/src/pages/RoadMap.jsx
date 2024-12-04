import parallelogram from "/images/assets/Rectangle54.png";
import AccordionComponent from "../components/AccordionComponent";
import Navbar from "../components/Navbar";
import { useRef } from "react";

const arr = [
  {
    milestone: "Team Formation",
    date: "Nov",
    subStones: [
      "Scouting,organisingand management of team",
      "Resolved efficiency time difference among team",
      "Created a structure for team management",
      "Regular checks on team members for proper updates on tasks given",
    ],
  },
  {
    milestone: "Idea and design structure",
    date: "Nov",
    subStones: [
      "Reshaping and sharpening base ideas with the team",
      "Analysing skills for the idea projected",
      "Concluding on a particular idea",
      "Brainstorming designs and page required for project",
      "Task allocations for the frontend,backend and UI design",
    ],
  },
  {
    milestone: "Research and Learning",
    date: "Nov",
    subStones: [
      "Team exposure to ICP terminologies and technologies",
      "Documentation consumption and technology familiarity",
      "Testing with examples what has been learnt",
    ],
  },
  {
    milestone: "Development",
    date: "Nov",
    subStones: [
      "Created new project with DFX",
      "Installed required dependencies and packages",
      "Downloaded the bitcon core for foundation for communication with bitcoin testnet",
      "Created new canister which handles HTTP outcalls to get ICP-USD price",
      "Added necessary crates in the rust canister",
    ],
  },

  {
    milestone: "Future Roadmap",
    date: "Nov",
    subStones: [
      "Fixing of all present bugs",
      "Frontend- backend communication establishment",
      "Integration of NFT mining technology and minting",
      "Update UI for Enhanced User experience",
      "Update http-outcalls to get the data for multiple cryptocurrencies not only ICP",
      "E-COMMERCE beta",
    ],
  },
];

function RoadMap() {
  const milestones = useRef(arr);
  return (
    <main className="black-gradient">
      <Navbar />
      <section className="pt-24 road-hero relative z-30">
        <div className="container mx-auto flex items-center gap-10 text-light-font font-medium">
          <img src={parallelogram} className="self-stretch" />
          <div className="space-y-3">
            <h1 className="text-4xl">ROADMAP</h1>
            <p className="text-xl">
              This is an overview of Odin Fusion's past, present, and future
              developments can be found here. We don't have a set roadmap for
              the future because we want to be adaptable, thus it could alter at
              any time.
            </p>
          </div>
        </div>
      </section>

      <section className="text-light-font relative z-30 mt-20 road">
        <h1 className="text-center text-7xl font-bold leading-relaxed underline">
          Check Our Milestones and <br />
          Progress On-The-Go
        </h1>
        <div className="container mx-auto mt-20 overflow-hidden">
          {milestones.current.map(({ milestone, subStones, date }, idx) => {
            return (
              <AccordionComponent
                milestone={milestone}
                subStones={subStones}
                date={date}
                open={true}
                key={idx}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default RoadMap;
