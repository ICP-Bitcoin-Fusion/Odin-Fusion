import logo from "/images/Upper corner.png";
import googleIMG from "/images/icons/image8-21.png";
import line from "/images/icons/line.png";

function SignIn() {
  return (
    <main className="flex w-full angular-gradient h-full">
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
  return (
    <div className="space-y-16">
      <div className="text-light-font text-center">
        <h1 className="text-4xl font-semibold mb-3 tracking-wide">
          Sign Up For Free
        </h1>
        <p className="font-extralight">
          Become an Odin today, fuse the future.
        </p>
      </div>
      <AuthButton
        image={googleIMG}
        text="Sign Up With Google"
        func={() => {}}
      />
      <div className="w-max mx-auto text-center">
        <p className="text-light-font text-xl font-semibold mb-7">OR</p>
        <img src={line} />
      </div>
      <AuthButton
        image={googleIMG}
        text="Sign Up With Google"
        func={() => {}}
      />{" "}
      <AuthButton
        image={googleIMG}
        text="Sign Up With Google"
        func={() => {}}
      />{" "}
      <AuthButton
        image={googleIMG}
        text="Sign Up With Google"
        func={() => {}}
      />
      <p className="text-light-font font-semibold text-center text-xl">
        Already have an account?{" "}
        <span className="cursor-pointer text-main-accent">Sign In</span>
      </p>
    </div>
  );
};

const AuthButton = ({ image, text, func }) => {
  return (
    <button
      className="border-4 border-main-accent rounded-3xl mx-auto px-20 py-5 flex gap-10 items-center text-light-font bg-[#1A1722] w-full max-w-[630] justify-center"
      onClick={func}
    >
      <img src={googleIMG} alt="/auth-mode" />
      <p className="text-xl font-semibold">{text}</p>
    </button>
  );
};

export default SignIn;
