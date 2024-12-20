import Feat from "./Feat";
import arrow from "/images/assets/Arrow Icon.png";
import SectionCTA from "./SectionCTA";

export default function FeatureSection({ features }) {
  return (
    <section className="text-gray-600 body-font" id="features">
      <div className="container px-5 mx-auto border-b-2 border-light-font">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-5xl font-medium title-font text-light-font underline">
            Features{" "}
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {features.map(({ icon, heading, text }, idx) => {
            return <Feat icon={icon} heading={heading} text={text} key={idx} />;
          })}
        </div>

        <SectionCTA text="View Features" icon={arrow} />
      </div>
    </section>
  );
}
