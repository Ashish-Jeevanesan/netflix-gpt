import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          class="concord-img vlv-creative "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4d7bb476-6d8b-4c49-a8c3-7739fddd135c/deecf71d-7a47-4739-9e1a-31b6b0d55be7/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          srcset="https://assets.nflxext.com/ffe/siteui/vlv3/4d7bb476-6d8b-4c49-a8c3-7739fddd135c/deecf71d-7a47-4739-9e1a-31b6b0d55be7/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/4d7bb476-6d8b-4c49-a8c3-7739fddd135c/deecf71d-7a47-4739-9e1a-31b6b0d55be7/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/4d7bb476-6d8b-4c49-a8c3-7739fddd135c/deecf71d-7a47-4739-9e1a-31b6b0d55be7/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
          alt=""
        ></img>
      </div>
      <form className="w-3/12 absolute p-12 bg-black bg-opacity-80 my-36 mx-auto right-0 left-0 text-white rounded-md">
        <h1 className="font-semibold text-3xl py-3">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 bg-slate-700 rounded-sm w-full bg-opacity-80 "
          />
        )}

        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 bg-slate-700 rounded-sm w-full bg-opacity-80 "
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 bg-slate-700 rounded-sm w-full bg-opacity-80"
        />
        <button className="p-2 my-2 px-7 bg-red-500 text-white font-bold rounded-sm w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-3 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now"
            : "Already registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
