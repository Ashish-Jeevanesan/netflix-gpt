import React from "react";
import { auth } from "../utils/firebase";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    //Sign-Out
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="flex w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 justify-between">
      <img
        className=" w-44 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />

      <div className="flex  items-center">
        <img
          className="  rounded-md w-10 h-10"
          src="https://occ-0-4230-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABRhunw1-HwxU3HlvmFM9UycO_VOxatA9nWQ4aaCKTCxOVOv5OchUTFO6RJznhN4G2scAmgXUpHzkkVdq9_8f9ui0RksluPFA3w.png?r=229"
          alt="logo"
        />
        <button
          onClick={handleSignOut}
          className="m-2 p-2  rounded-md font-medium text-white text-sm bg-opacity-65 hover:bg-red-500"
        >
          {!signOut ? "Sign In" : "Sign Out"}
        </button>
      </div>
    </div>
  );
};

export default Header;
