import sukuna from "/images/team/Sukuna.jpg";
import tolu from "/images/team/tolu.jpg";
import daniel from "/images/team/daniel.jpg";

function TeamSection() {
  const teamMembers = [
    {
      image: sukuna,
      member: "Sukuna",
      bio: "Sukuna is a Rust developer with extensive experience in software engineering and website creation. Over the years, he has honed his expertise in building scalable and efficient systems, excelling in backend development and server-side programming. Recently, Sukuna has been focused on crafting high-performance, maintainable solutions using Rust to power modern web applications. His deep understanding of system architecture and passion for innovation ensure this project is built on a strong and reliable foundation.",
    },
    {
      image: tolu,
      member: "Toluwalase",
      bio: "Tolu is a frontend developer with a strong grasp of integrating complex backend functions into seamless and interactive user interfaces. With a focus on creating responsive and engaging web applications, he bridges the gap between functionality and design. Tolu brings a wealth of experience in crafting dynamic interfaces that enhance user experiences while maintaining technical precision. His attention to detail and commitment to delivering high-quality work make him an invaluable part of the team.",
    },
    {
      image: daniel,
      member: "Daniel",
      bio: "Daniel is a product designer who specializes in blending aesthetics and functionality to create visually stunning and user-friendly designs. His expertise lies in crafting intuitive interfaces that enhance usability while ensuring a captivating look and feel. With a strong background in user-centered design, Daniel takes pride in understanding user needs and translating them into compelling visuals. His dedication to the project’s beauty and usability ensures a seamless and enjoyable experience for users.",
    },
  ];

  return (
    <section className="text-gray-600 body-font ">
      <div className="container px-5 py-24 mx-auto border-b-2 border-light-font bg-hero-bg bg-cover bg-center">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-5xl font-medium title-font text-light-font underline">
            The Team{" "}
          </h1>
        </div>
        <div className="flex flex-wrap justify-evenly">
          {teamMembers.map(({ member, image, bio }, idx) => {
            return (
              <TeamMemeber member={member} image={image} bio={bio} key={idx} />
            );
          })}
        </div>
      </div>

      <div className="w-max mx-auto py-10">
        <p className="text-2xl text-light-font">
          2024 ODIN FUSION. All Rights Reserved
        </p>
      </div>
    </section>
  );
}

const TeamMemeber = ({ member, image, bio }) => {
  return (
    <div className="p-4 w-80 text-light-font">
      <div className="rounded-3xl h-80 aspect-square overflow-hidden">
        <img
          alt="content"
          className="object-cover object-center h-full w-full border-2 border-main-accent rounded-3xl"
          src={image}
        />
      </div>
      <h2 className="text-5xl font-medium title-font mt-5">{member}</h2>
      <p className="text-base leading-relaxed mt-2">{bio}</p>
    </div>
  );
};

export default TeamSection;
