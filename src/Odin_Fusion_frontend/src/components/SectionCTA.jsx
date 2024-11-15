function SectionCTA({ text, icon }) {
  return (
    <button className="flex items-center gap-3 text-light-font border border-transparent hover:border-light-font rounded-2xl duration-300 px-5 py-2 w-max mx-auto my-20">
      <p>{text}</p>
      <img src={icon} alt="arrow-btn" />
    </button>
  );
}

export default SectionCTA;
