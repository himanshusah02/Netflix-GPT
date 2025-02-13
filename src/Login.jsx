// import React from 'react'

import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSingInform = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="flex flex-col justify-between overflow-x-hidden">
      <Header />

      <div class="h-screen w-screen overflow-hidden brightness-50">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_small.jpg"
          alt=""
        />
      </div>

      {/* this the login form  */}
      <div className=" mt-[54px]  w-[460px]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-[#FFFFFF] font-semibold flex flex-col p-10 bg-black opacity-75 min-h-auto overflow-hidden">
        <header className="text-4xl font-bold mb-6">
          <h1> {isSignInForm ? "Sign In" : "Sign Up"}</h1>
        </header>

        <form className="  flex flex-col  gap-5 ">
          <input
            type="text"
            placeholder="Email or Phone Number"
            className="p-4  min-w-full rounded-sm outline outline-white placeholder-white "
          ></input>

          <input
            type="password"
            placeholder="Password"
            className="p-4 rounded-sm outline outline-white  min-w-full  placeholder-white"
          ></input>
          <button className="p-2.5  min-w-full bg-red-700 rounded-sm  hover:bg-amber-800">
            {isSignInForm ? "Sig In" : "Sing Up"}
          </button>

          <h3 className="min-w-full   text-center">OR</h3>

          <button className="p-2.5 bg-[#414140] hover:bg-[#ffffff] hover:text-black min-w-full rounded-lg ">
            Using a sign code
          </button>
          <a
            className="text-center hover:underline hover:text-gray-400"
            href="#"
          >
            Forget Password
          </a>
        </form>

        <footer className="p-4  min-w-full  flex flex-col gap-3.5 mb-10 mt-10">
          {isSignInForm ? (
            <>
              <div>
                <input type="checkbox" />
                <span> Remember me</span>
              </div>

              <h3 className="text-gray-400">
                New to Netflix?{" "}
                <span className="text-white hover:underline">
                  <a onClick={toggleSingInform}>Sign up now</a>
                </span>
              </h3>

              <p className="font-light text-[12px] ">
                This page is Protected by Google reCAPTCHA to ensure you're not
                a bot.
                <a
                  className="text-[#005CBD] font-bold hover:underline"
                  href="##"
                >
                  Learn more
                </a>
              </p>
            </>
          ) : (
            <div className="items-center m-auto ">
            <h1 className="text-4xl text-center mb-8 text-red-600">Welcome back </h1>
            <span className="text-center ml-8 ">Have a account - </span>
            <button onClick={toggleSingInform} className=" ml-1 text-center hover:underline text-red-600" >Sign In</button>
            </div>
          )}
        </footer>
      </div>
      <footer className="w-screen min-h-96 bg-black">
        <h1>hell footer</h1>
      </footer>
    </div>
  );
};

export default Login;
