function TeamSection({ team }) {
  return (
    <section class="text-gray-600 body-font ">
      <div class="container px-5 py-24 mx-auto border-b-2 border-light-font bg-hero-bg bg-cover bg-center">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-5xl font-medium title-font text-light-font underline">
            The Team{" "}
          </h1>
        </div>
        <div class="flex flex-wrap justify-evenly">
          {team.map(({ member, image, bio }) => {
            return <TeamMemeber member={member} image={image} bio={bio} />;
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
    <div class="p-4 w-80 text-light-font">
      <div class="rounded-3xl h-80 aspect-square overflow-hidden">
        <img
          alt="content"
          class="object-cover object-center h-full w-full border-2 border-main-accent rounded-3xl"
          src="https://dummyimage.com/1203x503"
        />
      </div>
      <h2 class="text-5xl font-medium title-font mt-5">{member}</h2>
      <p class="text-base leading-relaxed mt-2">{bio}</p>
    </div>
  );
};

export default TeamSection;
