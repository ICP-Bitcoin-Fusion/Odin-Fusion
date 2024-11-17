function TeamSection({ team }) {
  return (
    <section className="text-gray-600 body-font ">
      <div className="container px-5 py-24 mx-auto border-b-2 border-light-font bg-hero-bg bg-cover bg-center">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-5xl font-medium title-font text-light-font underline">
            The Team{" "}
          </h1>
        </div>
        <div className="flex flex-wrap justify-evenly">
          {team.map(({ member, image, bio }, idx) => {
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
          src="https://dummyimage.com/1203x503"
        />
      </div>
      <h2 className="text-5xl font-medium title-font mt-5">{member}</h2>
      <p className="text-base leading-relaxed mt-2">{bio}</p>
    </div>
  );
};

export default TeamSection;
