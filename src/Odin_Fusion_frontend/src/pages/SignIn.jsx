import logo from "/images/Upper corner.png";
import nf from "/images/icons/nf_id.png";
import internetId from "/images/icons/ICP_LOGO.png";
import stoic from "/images/icons/bitcoin.png";
import { useAuth } from "../auth/use-auth-client";
import { useNavigate } from "react-router";

import { useRef } from "react";

function SignIn() {
  return (
    <main className="flex w-full angular-gradient min-h-screen">
      <div className="w-1/2 flex flex-col justify-between items-start py-20 px-20">
        <img src={logo} alt="/logo" />
        <h2 className="text-5xl font-bold leading-relaxed text-light-font">
          Welcome to ODIN FUSION,
          <br /> Orator of Web 3.
        </h2>
      </div>
      <div className="bg-main-font p-5 w-1/2 py-20 px-16">
        <SignInControls />
      </div>
    </main>
  );
}

const SignInControls = () => {
  const navigate = useNavigate();
  const { loginNFID, login } = useAuth();

  function loginWithNFID() {
    loginNFID(() => {
      navigate("/explore");
    });
  }
  function logingWithII() {
    login(() => {
      navigate("/explore");
    });
  }
  const authMethods = useRef([
    { text: "Connect With NF ID", image: nf, func: loginWithNFID },
    { text: "Connect With Internet ID", image: internetId, func: logingWithII },
    { text: "Connect With Bitcoin", image: stoic, func: () => {} },
  ]);
  return (
    <div className="space-y-16">
      <div className="text-light-font text-center">
        <h1 className="text-4xl font-semibold mb-3 tracking-wide">
          Connect A Wallet
        </h1>
        <p className="font-extralight">
          By connecting a wallet , you agree to the{" "}
          <span className="text-[#5698FC]">Terms of Service</span> from ODIN
          FUSION,
          <br /> and you have read and understood the ODIN FUSION{" "}
          <span className="text-[#5698FC]">disclaimer</span>{" "}
        </p>
      </div>

      {authMethods.current.map(({ text, image, func }, idx) => {
        return <AuthButton image={image} text={text} func={func} key={idx} />;
      })}
    </div>
  );
};

const AuthButton = ({ image, text, func }) => {
  return (
    <button
      className="border border-main-accent rounded-xl mx-auto px-20 py-5 flex gap-10 items-center text-light-font bg-[rgba(217,217,217,0.3)] w-full max-w-[630] justify-center"
      onClick={func}
    >
      <div className="w-2/3 flex gap-10">
        {" "}
        <img src={image} alt="/auth-mode" className="w-10 h-10" />
        <p className="text-xl font-semibold tracking-widest">{text}</p>
      </div>
    </button>
  );
};

export default SignIn;
