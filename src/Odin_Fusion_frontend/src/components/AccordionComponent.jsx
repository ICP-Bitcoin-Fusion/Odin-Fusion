import { useRef, useState } from "react";

function AccordionComponent({ milestone, subStones, date }) {
  const answerElRef = useRef();
  const [open, setOpen] = useState(false);

  const handleOpenAnswer = () => {
    setOpen(!open);
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b mb-10 "
      onClick={handleOpenAnswer}
    >
      <div className="flex items-start justify-between">
        <h4 className="cursor-pointer pb-10 flex items-center justify-between text-4xl text-light-font font-semibold ">
          {milestone}
        </h4>

        <div className="flex items-start gap-20">
          <p className="text-xl font-semibold">
            {date} <span className="text-4xl text-main-accent"> 2024</span>
          </p>
          <button className="self-center w-8 h-8 bg-light-font rounded-full text-main-font text-2xl">
            {open ? (
              <i className="ri-arrow-up-s-line"></i>
            ) : (
              <i className="ri-arrow-down-s-line"></i>
            )}
          </button>
        </div>
      </div>

      <div
        ref={answerElRef}
        className="duration-300"
        style={open ? {} : { height: "0px" }}
      >
        <ul className="list-disc list-outside px-5 mb-10">
          {subStones.map((stone, idx) => {
            return (
              <li key={idx}>
                <p className="text-light-font mb-2"> {stone}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default AccordionComponent;
