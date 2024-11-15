export default function Feat({ icon, heading, text }) {
  return (
    <div className="p-4 md:w-1/3 ">
      <div className="flex rounded-2xl h-full bg-light-font p-8 flex-col border border-2 border-main-accent">
        <div className="flex items-center mb-3 gap-5">
          <div className="w-16 h-16  mr-3 inline-flex items-center justify-center rounded-full text-white flex-shrink-0">
            <img src={icon} alt="feature-icon" />
          </div>
          <h2 className="text-2xl title-font text-main-font font-semibold">
            {heading}
          </h2>
        </div>
        <div className="flex-grow">
          <p className="leading-relaxed text-xl text-main-font">{text}</p>
        </div>
      </div>
    </div>
  );
}
