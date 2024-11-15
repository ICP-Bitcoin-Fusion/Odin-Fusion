import Feat from "./Feat";
import Project from "./Project";

function RoadMapSection({ milestones, projects }) {
  return (
    <>
      <section>
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-5xl font-medium title-font text-light-font underline my-20">
            Roadmap{" "}
          </h1>
        </div>
        <div className="container mx-auto grid grid-cols-2 grid-rows-2 place-content-center gap-y-52">
          {milestones.map(({ icon, heading, text }) => {
            return (
              <div className="w-full justify-center flex">
                <Feat icon={icon} heading={heading} text={text} />
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-5xl font-medium title-font text-light-font underline my-20">
            Projects{" "}
          </h1>
        </div>

        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {projects.map(({ image, projectName, live, author, goal }) => {
              return (
                <Project
                  image={image}
                  projectName={projectName}
                  live={live}
                  author={author}
                  goal={goal}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default RoadMapSection;
