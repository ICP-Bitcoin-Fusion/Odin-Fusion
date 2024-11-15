import Feat from "./Feat";
import arrow from "/images/assets/Arrow Icon.png";

export default function FeatureSection({ features }) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 mx-auto border-b-2 border-light-font">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-5xl font-medium title-font text-light-font underline">
            Features{" "}
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {features.map(({ icon, heading, text }) => {
            return <Feat icon={icon} heading={heading} text={text} />;
          })}
        </div>
        <button className="flex items-center gap-3 text-light-font border border-transparent hover:border-light-font rounded-2xl duration-300 px-5 py-2 w-max mx-auto my-20">
          <p>View Features</p>
          <img src={arrow} alt="arrow-btn" />
        </button>
      </div>
    </section>
  );
}
