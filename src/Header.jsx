import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "./utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
 const user = useSelector(store => store.user);
  const handleClick = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div>
      <div className="absolute w-full bg-transparent max-h-20 z-1 flex flex-row justify-between">
        <img
          className="w-60  ml-14 px-8 py-2 opacity-100"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt=""
        />

        <div className="flex flex-row ">
          <img
            className="w-20 mr-10 p-3.5 opacity-100 "
            src=""
            alt={user.photoURL}
          />
          <button
            className="m-3 w-20 font-bold text-center bg-red-600"
            onClick={handleClick}
          >
            Signout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
