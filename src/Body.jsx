import React, { useEffect } from "react";
import {  createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  
  const appRoute = createBrowserRouter([
    {
        path:"/",
        element:<Login/>,
    },
    {
        path:"/browse",
        element:<Browse/>
    }
  ]);


  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName, photoURL} = user;
         dispatch(addUser({uid:uid, email:email, displayName:displayName , photoURL:photoURL ? photoURL : "https://occ-0-2483-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"}));
         
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
       
      }
    });
  },[]);
  return <div>
    <RouterProvider router={appRoute}/>
  </div>;
};

export default Body;
