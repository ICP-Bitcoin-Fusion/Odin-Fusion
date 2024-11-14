import React from "react";

export default function AccentButton({ text, func }) {
  return (
    <button
      onClick={func}
      className="bg-main-accent text-light-font font-semibold border-0 py-3 px-7 text-base focus:outline-none rounded-2xl mt-4 md:mt-0"
    >
      {text}
    </button>
  );
}
