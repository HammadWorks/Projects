import React, { useState } from "react";
import SocialIcons from "../SocialIcons/SocialIcons";

function SignForm({ pageRequest = "signIn" }) {
  const [formType, setFormType] = useState(pageRequest);
  const [animate, setAnimate] = useState("");
  const [Content, setContent] = useState({
    heading: "Welcome Back!",
    subHeading: "Enter your personel details to use all of sites feature",
    btnText: "Sign In",
  });

  const sideContent = [
    {
      heading: "Hello, Friends!",
      subHeading:
        "register with your personel details to use all of sites feature",
      btnText: "Sign Up",
    },
    {
      heading: "Welcome Back!",
      subHeading: "Enter your personel details to use all of sites feature",
      btnText: "Sign In",
    },
  ];

  const handleChangeForm = () => {
    if (formType === "signIn") {
      setContent(sideContent[0]);
      setFormType("signUp");
      setAnimate("-translate-x-full rounded-l-[inherit] rounded-r-[20%]");
    } else if (formType === "signUp") {
      setFormType("signIn");
      setAnimate("rounded-r-[inherit] rounded-l-[20%]");
      setContent(sideContent[1]);
    }
  };

  return (
    <main className="relative top-0 flex justify-center items-center h-screen bg-[url('/images/sign_cover.webp')] bg-cover">
      <section className="flex lg:w-[50vw]  h-[60vh] sm:w-[80vw] w-[90vw] rounded-2xl bg-white cursor-default">
        
        {formType === "signIn" ? (
          <div className="w-1/2 rounded-l-[inherit] flex justify-center items-center flex-col gap-3">
            <h2 className="text-2xl font-semibold ">Sign In</h2>
            <SocialIcons />
            <p className="text-gray-700">or use email or password</p>
            <form
              className="flex justify-center items-center flex-col gap-3"
              action="/"
            >
              <input
                type="text"
                placeholder="Email"
                className="bg-zinc-100 sm:px-4 px-3 py-2 rounded-lg shadow-md"
              />
              <input
                type="password"
                placeholder="Password"
                className="bg-zinc-100 sm:px-4 px-3 py-2 rounded-lg shadow-md"
              />
              <p className="text-custom-link-blue text-sm cursor-pointer mt-10">
                forget password?
              </p>
              <button className="bg-green-300 py-1 px-10 rounded-xl drop-shadow-lg font-medium hover:scale-105 hover:border hover:border-black">
                Sign In
              </button>
            </form>
          </div>
        ) : (
          <div className="translate-x-full w-1/2 rounded-l-[inherit] flex justify-center items-center flex-col gap-3">
            <h2 className="text-2xl font-semibold ">Create Account</h2>
            <SocialIcons />
            <p className="text-gray-700 sm:w-fit w-[12rem] text-center">
              or use your email for registration
            </p>
            <form
              className="flex justify-center items-center flex-col gap-3"
              // action="/"
            >
              <input
                type="text"
                placeholder="Name"
                className="bg-zinc-100 sm:px-4 px-3 py-2 rounded-lg shadow-md"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-zinc-100 sm:px-4 px-3 py-2 rounded-lg shadow-md"
              />
              <input
                type="password"
                placeholder="Password"
                className="bg-zinc-100 sm:px-4 px-3 py-2 rounded-lg shadow-md"
              />
              <button className="bg-green-300 py-1 px-10 rounded-xl drop-shadow-lg font-medium hover:scale-105 hover:border hover:border-black">
                Sign Up
              </button>
            </form>
          </div>
        )}

        <div className="absolute bottom-0 left-0 p-6 text-sm w-full sm:text-xl text-center text-white bg-black bg-opacity-30">
          All Rights Reserved | abc@google.com
        </div>

        <div
          className={`w-1/2 rounded-[inherit] rounded-l-[20%] flex justify-center flex-col items-center bg-[url('/images/sign_image2.webp')] text-white gap-3 transition-all duration-700 ${animate}`}
        >
          <h3 className="text-2xl font-bold ">{Content.heading}</h3>
          <p className="text-center w-[70%]">{Content.subHeading}</p>
          <button
            onClick={handleChangeForm}
            className="bg-white bg-opacity-20 py-1 px-10 rounded-xl drop-shadow-lg font-medium hover:scale-105 hover:border hover:border-black"
          >
            {Content.btnText}
          </button>
        </div>
      </section>
    </main>
  );
}

export default SignForm;
