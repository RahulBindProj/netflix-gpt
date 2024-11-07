import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSingInForm, setIsSingInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSingInForm(!isSingInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="
https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/US-en-20241008-TRIFECTA-perspective_428ffa03-8f7f-42b1-9739-f2cd5b7311a6_large.jpg"
        />
      </div>
      <form className="absolute  p-12 bg-black w-3/12 right-0 left-0 mx-auto my-36 text-white bg-opacity-70">
        <h1 className="font-bold text-4xl py-4">
          {isSingInForm ? "SignIn" : "SignUp"}
        </h1>
        {!isSingInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full text-{#ffffffb3} bg-gray-600 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email Address "
          className="p-4 my-4 w-full text-{#ffffffb3} bg-gray-600 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password "
          className="p-4 my-4 w-full bg-gray-600 rounded-lg"
        />
        <button className="p-4 my-4 bg-red-700 block w-full rounded-lg">
          {isSingInForm ? "SignIn" : "SignUp"}
        </button>
        <p onClick={toggleSignInForm} className="cursor-pointer">
          {isSingInForm
            ? "New to Netflix ? Signup Now"
            : "Already Registered ... SignIn Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
