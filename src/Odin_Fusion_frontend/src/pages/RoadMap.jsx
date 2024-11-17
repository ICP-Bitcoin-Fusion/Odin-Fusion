import parallelogram from "/images/assets/Rectangle54.png";
import AccordionComponent from "../components/AccordionComponent";
import { useRef } from "react";

const arr = [];

for (let i = 0; i < 14; i++) {
  arr.push({
    milestone: "Development started",
    date: "NOV",
    subStones: [
      "Odin Fusion goes open source",
      "Odin Fusion published",
      "Professional website redesign",
      "SNS1 airdrop to 2000 OF OGs",
      "System architecture published",
      "Professional app redesign",
      "Search group messages by @usernames",
    ],
  });
}

function RoadMap() {
  const milestones = useRef(arr);
  return (
    <main className="black-gradient">
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
        <div className="container mx-auto mt-20">
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
