import React, { useState, useRef } from "react";
import { addUser } from "../utils/userSlice";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { USER_AVATAR } from "../utils/constant";

const Login = () => {
  const [isSingInForm, setIsSingInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSingInForm(!isSingInForm);
  };

  const isName = useRef(null);
  const isEmail = useRef(null);
  const isPassword = useRef(null);

  const handleButtonClick = () => {
    // validate the form data

    const name = isName?.current?.value;
    const email = isEmail.current.value;
    const password = isPassword.current.value;
    // console.log(name, email, password);

    const message = checkValidData(name, email, password);
    setErrorMessage(message);

    if (message) return;

    if (!isSingInForm) {
      //signUp form logic
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name,
            photoURL: USER_AVATAR,
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
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "----" + errorMessage);
        });
    } else {
      //signIn form logic
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "----" + errorMessage);
        });
    }
  };

  return (
    <div className="relative h-screen w-full">
      <Header />
      <div className="absolute inset-0 -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/US-en-20241008-TRIFECTA-perspective_428ffa03-8f7f-42b1-9739-f2cd5b7311a6_large.jpg"
          className="w-full h-full object-cover"
          alt="Background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-10 bg-black bg-opacity-80 w-96 text-white rounded-lg shadow-lg"
      >
        <h1 className="font-bold text-3xl text-center pb-6">
          {isSingInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSingInForm && (
          <input
            ref={isName}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full text-white bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        )}
        <input
          ref={isEmail}
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full text-white bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <input
          ref={isPassword}
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full text-white bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <p className="py-2 text-sm text-red-500">{errorMessage}</p>
        <button
          className="p-4 mt-4 bg-red-600 hover:bg-red-700 w-full rounded-md font-semibold text-lg transition duration-300"
          onClick={handleButtonClick}
        >
          {isSingInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          onClick={toggleSignInForm}
          className="text-sm text-gray-300 mt-4 text-center cursor-pointer hover:underline"
        >
          {isSingInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
