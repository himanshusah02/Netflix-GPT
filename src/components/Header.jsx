import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/Constants";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  // console.log(user);
  const handleClick = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoUR: photoURL,
          })
        );
        navigate("/browse");

        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGptSearchClick=()=>{
    dispatch(toggleGptSearchView())
  }

  return (
    <div>
      <div className=" fixed top-0 left-0  w-full bg-transparent max-h-20 z-10 flex flex-row justify-between ">
        <img className="w-60  ml-14 px-8 py-2 opacity-100" src={LOGO} alt="" />
        {user && (
          <div className="flex flex-row text-white ">
            <button className="m-4 p-3 bg-purple-500 rounded-4xl" onClick={handleGptSearchClick

            }>
              GPT Search
            </button>

            <img
              className="w-20 mr-10 p-3.5 opacity-100 rounded-full"
              src={user?.photoURL}
              alt=""
            />
            <button
              className="m-3 w-20 font-bold text-center rounded-4xl bg-red-600"
              onClick={handleClick}
            >
              Signout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
