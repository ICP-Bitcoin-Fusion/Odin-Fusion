import AccentButton from "./AccentButton";
import HeroImg from "/images/assets/image.png";
import ICPLogo from "/favicon.ico";
export default function Hero() {
  return (
    <section className="text-gray-600 body-font bg-hero-bg bg-no-repeat bg-center">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-start">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center text-light-font">
          <h1 className="title-font sm:text-5xl text-3xl mb-4 font-semibold ">
            ODIN FUSION
          </h1>
          <p className="mb-8 leading-relaxed text-lg font-semibold ">
            Orator of Web3
          </p>
          <p className="leading-relaxed text-4xl font-medium">
            Odin Fusion offers a full-featured conversation application that
            runs entirely on the Internet Computer Blockchain.
          </p>
          <div className="flex justify-center mt-20">
            <AccentButton text="Launch App" func={() => {}} />
          </div>

          <div className="mt-36">
            <div className="flex items-center gap-2">
              <p className="text-xs tracking-[0.3em]">
                100% ON-CHAIN INTERNET COMPUTER{" "}
              </p>
              <img src={ICPLogo} alt="ICP-logo" />
            </div>

            <p className="text-[40px] font-medium leading-relaxed max-w-[606px] mt-20">
              ODIN FUSION subscribers are <br />
              able to interact with one another using tokens such as ckBTC and
              ICP.
            </p>

            <p className="text-base font-medium leading-relaxed max-w-[696px] mt-20">
              ODIN FUSION is administered by the community as a DAO, and it
              issues its own CHAT token. CHAT tokens are distributed as rewards
              to users in order to accelerate growth and build a team of
              millions of advocates, helping ODIN FUSION establish itself as a
              viable contender to centralized big tech opponents!
            </p>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-right rounded ml-auto"
            alt="hero"
            src={HeroImg}
          />
        </div>
      </div>
    </section>
  );
}
