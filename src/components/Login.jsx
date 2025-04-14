// import React from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { BackGround_Photo, USER_AVTAR } from "../utils/Constants";
import { addUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const displayName = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    // validate the  form data

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;
    // sign in / sign up

    if (!isSignInForm) {
      // Sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: displayName.current.value,
            photoURL: USER_AVTAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //  sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  const toggleSingInform = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="flex flex-col justify-between overflow-x-hidden z-10 bg-cover bg-center bg-black  ">
      <Header />

      <div className="  h-screen w-screen overflow-hidden brightness-50 ">
        <div className="lg:w-screen lg:h-screen hidden bg-black">
          <img src={BackGround_Photo} alt="" />
        </div>
      </div>

      {/* this the login form  */}

      <div className=" mt-[54px]  w-[460px]   absolute top-90 lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-[#FFFFFF] font-semibold flex flex-col p-10 bg-black opacity-75 min-h-auto overflow-hidden ">
        <header className="text-4xl font-bold mb-6">
          <h1> {isSignInForm ? "Sign In" : "Sign Up"}</h1>
        </header>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="  flex flex-col  gap-5 "
        >
          {!isSignInForm ? (
            <input
              ref={displayName}
              type="text"
              placeholder="Enter your Name..."
              className="p-4  min-w-full rounded-sm outline outline-white placeholder-white "
            ></input>
          ) : (
            <h1>WelCome Back</h1>
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email or Phone Number"
            className="p-4  min-w-full rounded-sm outline outline-white placeholder-white "
          ></input>

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 rounded-sm outline outline-white  min-w-full  placeholder-white"
          ></input>
          <button
            className="p-2.5  min-w-full bg-red-700 rounded-sm  hover:bg-amber-800"
            onClick={handleClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
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
        <p className="text-red-600 text-center text-xl">{errorMessage}</p>

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
              <h1 className="text-4xl text-center mb-8 text-red-600">
                Happy to see u again
              </h1>
              <span className="text-center ml-8 ">Have a account - </span>
              <button
                onClick={toggleSingInform}
                className=" ml-1 text-center hover:underline text-red-600"
              >
                Sign In
              </button>
            </div>
          )}
        </footer>
      </div>
      <footer className="w-screen min-h-96 bg-black">
        <h1>hello footer</h1>
      </footer>
    </div>
  );
};

export default Login;
