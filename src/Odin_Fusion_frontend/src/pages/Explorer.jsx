import { useRef, useState } from "react";

import logo from "/images/Upper corner.png";
import coin from "/images/icons/coin.png";
import bitcoin from "/images/assets/Btc logo.png";
import person from "/images/icons/person.png";
import search from "/images/icons/search.png";
import textBubble from "/images/icons/text-bubble.png";
import chart from "/images/Group 18.png";

// side bar
import dash from "/images/icons/ic_outline-space-dashboard.png";
import nfts from "/images/icons/healthicons_market-stall-outline.png";
import support from "/images/icons/mdi_support.png";
import earn from "/images/icons/arcticons_nokia-learn.png";
import stats from "/images/icons/lets-icons_stat.png";
import trade from "/images/icons/arcticons_freetrade.png";
import settings from "/images/icons/gala_settings.png";
import wall from "/images/icons/mdi_wallet-outline.png";
import line from "/images/assets/Rectangle54.png";

import deposit from "/images/assets/ph_hand-deposit-duotone.png";
import wallet from "/images/assets/catppuccin_folder-assets.png";
import APY from "/images/assets/arcticons_mytherapy.png";
import AccentButton from "../components/AccentButton";

import first from "/images/assets/download 3.png";
import second from "/images/assets/images 2.png";
import third from "/images/assets/download 4.png";

function Explorer() {
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("1");
  const [page, setPage] = useState(<Dashboard />);

  function setNewPage({ id, page }) {
    setActive(id);
    setPage(page);
  }

  return (
    <main className="black-gradient min-h-screen">
      <Layout hidden={hidden}>
        <Content>{page}</Content>
      </Layout>
      <SideBar
        hidden={hidden}
        setNewPage={setNewPage}
        content={{ id: active, page }}
      />
    </main>
  );
}

function SideBar({ hidden, setNewPage, content }) {
  const nav = [
    {
      image: dash,
      text: "Dashboard",
      elem: <Dashboard />,
      id: "1",
    },
    {
      image: trade,
      text: "Trade",
      elem: "",
      id: "2",
    },
    {
      image: nfts,
      text: "NFTs",
      elem: <Dashboard />,
      id: "3",
    },
    {
      image: earn,
      text: "Earn",
      elem: "",
      id: "4",
    },
    {
      image: stats,
      text: "Stats",
      elem: "",
      id: "5",
    },
  ];

  const nav2 = [
    {
      image: support,
      text: "Support",
      elem: "",
      id: "5",
    },
    {
      image: settings,
      text: "Settings",
      elem: "",
      id: "6",
    },
    {
      image: wall,
      text: "wfghasjdks32jjd338uk...",
      elem: "",
      id: "7",
    },
  ];
  return (
    <div
      data-visible={hidden}
      className="min-h-screen border-gradient border-r-4 fixed top-0 left-0 side"
    >
      <div className="px-10 py-20 w-full self-start border-b-2 border-main-accent rounded-br-3xl">
        <img src={logo} alt="odin-fusion-logo" />
      </div>
      <div className="rounded-r-3xl border-y-2 border-main-accent pb-52">
        {nav.map(({ image, text, elem, id }, idx) => {
          return (
            <button
              key={idx}
              onClick={() => setNewPage({ id, page: elem })}
              className="border-b-2 border-main-accent text-light-font flex items-center w-full px-10 py-5 gap-10 relative overflow-hidden"
            >
              {content.id === id ? (
                <img src={line} className="w-2 h-full absolute left-0" />
              ) : null}

              <img src={image} alt="icon" className="w-8 h-8" />
              <p className="text-xl font-semibold">{text}</p>
            </button>
          );
        })}
      </div>
      <div className="rounded-r-3xl border-r-2 border-t-2 border-main-accent">
        {nav2.map(({ image, text, elem, active }, idx) => {
          return (
            <button
              key={idx}
              className="border-b-2 border-main-accent text-light-font flex items-center w-full px-10 py-5 gap-10 relative overflow-hidden"
            >
              {active ? (
                <img src={line} className="w-2 h-full absolute left-0" />
              ) : null}
              <img src={image} alt="icon" className="w-8 h-8" />
              <p className="text-xl font-semibold">{text}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Layout({ children, hidden }) {
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
    <div className="w-full top-0 left-0 flex text-light-font">
      <div data-visible={hidden} className={"h-full p-20 inside"}></div>
      <div className="grow">
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

        <div className="flex items-center w-full justify-between">
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
          {/* dynamic */}
          <div className="flex gap-5 px-10">
            <AccentButton text="Launch pad" />
            <AccentButton text="Deposit" />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

function Content({ children }) {
  return <main className="w-full mt-10">{children}</main>;
}

const Dashboard = () => {
  const collect = [
    {
      image: first,
      colName: "Kanpai Pandas",
      floorPrice: "0.4329",
      owners: "200",
    },
    {
      image: second,
      colName: "Kanpai Pandas",
      floorPrice: "0.4329",
      owners: "200",
    },

    {
      image: third,
      colName: "Kanpai Pandas",
      floorPrice: "0.4329",
      owners: "200",
    },
  ];
  const token = [];

  for (let i = 0; i < 15; i++) {
    token.push({
      image: bitcoin,
      coinName: "Bitcoin",
      balance: "1.234546",
      total: "$90,921.33",
    });
  }

  return (
    <>
      <div className="flex w-full px-10 gap-10 items-baseline">
        <div className="space-y-10">
          <h4 className="underline text-xl">Portfolio Performance</h4>
          <img src={chart} alt="thf" className="h-full" />
        </div>
        <div className="">
          <div className="border-2 border-main-accent rounded-3xl p-1 max-w-[450px] mx-auto">
            <div className="border-y-2 border-[#260469] flex gap-10 px-10 items-center justify-evenly py-5 w-full">
              <h4 className="underline text-2xl">VIEW COLLECTION</h4>
              <img src={coin} alt="share" className="w-8 h-8" />
            </div>
            {collect.map(({ image, colName, floorPrice, owners }, idx) => {
              return (
                <div
                  key={idx}
                  className="border-y-2 border-main-accent flex gap-10 px-10 items-center justify-evenly py-5 w-full"
                >
                  <img
                    src={image}
                    alt="collection-image"
                    className="w-10 h-10"
                  />
                  <div className="space-y-2">
                    <p className="text-xs">{colName}</p>
                    <p className="text-[8px] font-light">
                      {owners + " OWNERS 30%"}
                    </p>
                  </div>{" "}
                  <div className="space-y-2">
                    <p className="text-[8px] tracking-widest font-light">
                      FLOOR PRICE
                    </p>
                    <p>{floorPrice}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border-4 border-[#260469] bg-main-font px-8 py-5 mx-10 mt-10 ">
        <div className="rounded-3xl border-2 border-[#260469] bg-main-font flex p-4 mb-7">
          <div className="rounded-2xl border-2 border-[#260469] bg-main-font py-2 w-1/2 text-center">
            Token
          </div>
          <div className="bg-main-font py-2 w-1/2 text-center">NFTs</div>
        </div>
        <div className="flex justify-between item-center px-10">
          <p>Name</p>
          <p>Balance</p>
          <p>Total Value</p>
        </div>
        {token.map(({ image, coinName, total, balance }, idx) => {
          return (
            <div
              key={idx}
              className="flex justify-between item-center pt-7 px-8"
            >
              <div className="flex items-center gap-4 w-max">
                <img src={image} alt="token" className="w-7 h-7" />
                <p>{coinName}</p>
              </div>
              <p className="mr-8">{balance}</p>
              <p>{total}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Explorer;
