import { useRef } from "react";

import logo from "/images/Upper corner.png";
import coin from "/images/icons/coin.png";
import person from "/images/icons/person.png";
import search from "/images/icons/search.png";
import textBubble from "/images/icons/text-bubble.png";

import deposit from "/images/assets/ph_hand-deposit-duotone.png";
import wallet from "/images/assets/catppuccin_folder-assets.png";
import APY from "/images/assets/arcticons_mytherapy.png";

function Explorer() {
  return (
    <main className="black-gradient min-h-screen">
      <TopBar />
      <SideBar />
    </main>
  );
}

function SideBar() {
  return (
    <div className="w-1/5 min-h-screen border-gradient border-r-4 fixed top-0"></div>
  );
}

function TopBar() {
  const userControls = useRef([
    {
      image: search,
      func: () => {},
    },
    {
      image: textBubble,
      func: () => {},
    },
    {
      image: person,
      func: () => {},
    },
  ]);

  const userDetails = useRef([
    { detail: "Total Assets", image: wallet, value: "$12,456.98" },
    { detail: "Total Deposits", image: deposit, value: "$1,000" },
    { detail: "APY", image: APY, value: "+30.58%" },
  ]);
  return (
    <div className="w-full relative fixed top-0 left-0 flex text-light-font">
      <div className="px-10 py-20 w-1/5 self-start border-b-2 border-main-accent rounded-br-[50px]">
        <img src={logo} alt="odin-fusion-logo" />
      </div>
      <div className="w-4/5">
        <div className="flex items-center justify-between w-full px-10 py-20">
          <div className="inline-flex items-center text-3xl font-bold gap-10">
            <h2>Welcome Back, Odin</h2>
            <img src={coin} alt="coin-image" />
          </div>
          <div className="flex gap-10">
            {userControls.current.map(({ image, func }, idx) => {
              return (
                <button key={idx} onClick={func} className="w-10 h-10">
                  <img src={image} alt="user-control-icon" />
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex gap-10 px-10">
          {userDetails.current.map(({ detail, image, value }, idx) => {
            return (
              <div key={idx} className="flex items-center gap-2">
                <div>
                  <img src={image} alt="detail-image" />
                </div>
                <div>
                  <h4>{value}</h4>
                  <p>{detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Explorer;
