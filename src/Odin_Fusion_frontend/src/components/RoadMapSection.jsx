import Feat from "./Feat";
import Project from "./Project";
import SectionCTA from "./SectionCTA";

import paste from "/images/assets/Group6.png";
import person from "/images/assets/person.png";

function RoadMapSection({ milestones, projects }) {
  return (
    <>
      <section id="roadmap" className="relative z-30 ">
        <div className="bg-mid-bg bg-cover bg-no-repeat opacity-50 w-full aspect-[1.5] absolute top-44 rounded-br-[200px] -z-30"></div>

        {/* <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-5xl font-medium title-font text-light-font underline my-20">
            Roadmap{" "}
          </h1>
        </div>
        <div className="container mx-auto grid grid-cols-2 grid-rows-2 place-content-center gap-y-52 bg-roadmap-bg bg-contain bg-no-repeat bg-center">
          {milestones.map(({ icon, heading, text }, idx) => {
            return (
              <div className="w-full justify-center flex" key={idx}>
                <Feat icon={icon} heading={heading} text={text} />
              </div>
            );
          })}
        </div> */}
      </section>

      <section className="mt-20 z-30 relative" id="projects">
        <div className="flex flex-col text-center w-full my-10">
          <h1 className="text-5xl font-medium title-font text-light-font underline">
            Projects{" "}
          </h1>
        </div>

        <div className="container px-5 mx-auto">
          <SubSection heading={"LIVE PROJECTS"} projects={projects.live} />
          <SubSection
            heading={"FULLY FUNDED PROJECTS"}
            projects={projects.funded}
          />

          <SubSection
            heading="PROJECTS COMING ON SOON"
            projects={[]}
            note="Projects in This Section Will Be Available Soon"
          />
        </div>

        <SectionCTA text="View Available Projects" icon={paste} />
      </section>

      <section>
        <div className="container mx-auto">
          <p className="text-light-font text-5xl leading-relaxed">
            "I've been using Odin Fusion for a while now, and I absolutely love
            its unique features and smooth interface. Kudos to the team for
            their incredible work!"
          </p>
          <div className="text-light-font flex gap-5 items-center mt-10">
            <img src={person} alt="person_img" />
            <p className="text-3xl">Sophia</p>
            <p className="uppercase">dd/mm/yy</p>
          </div>
        </div>
      </section>
    </>
  );
}

const SubSectionHeding = ({ text }) => {
  return (
    <h2 className="text-[rgba(255,255,255,0.6)] text-base font-semibold my-5">
      {text}
    </h2>
  );
};

const SubSection = ({ heading, projects, note = "" }) => {
  return (
    <>
      <SubSectionHeding text={heading} />
      <h3 className="text-light-font text-2xl mb-5 font-light">{note}</h3>
      <div className="flex flex-wrap -m-4 mb-16">
        {projects.map(({ image, projectName, live, author, goal }, idx) => {
          return (
            <Project
              image={image}
              projectName={projectName}
              live={live}
              author={author}
              goal={goal}
              key={idx}
            />
          );
        })}
      </div>
    </>
  );
};

export default RoadMapSection;
