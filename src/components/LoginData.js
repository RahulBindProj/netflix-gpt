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
    <div>
      <Header />
      <div className="absolute">
        <img
          src="
https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/US-en-20241008-TRIFECTA-perspective_428ffa03-8f7f-42b1-9739-f2cd5b7311a6_large.jpg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute  p-12 bg-black w-3/12 right-0 left-0 mx-auto my-36 text-white bg-opacity-70"
      >
        <h1 className="font-bold text-4xl py-4">
          {isSingInForm ? "SignIn" : "SignUp"}
        </h1>
        {!isSingInForm && (
          <input
            ref={isName}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full text-{#ffffffb3} bg-gray-600 rounded-lg"
          />
        )}
        <input
          ref={isEmail}
          type="text"
          placeholder="Email Address "
          className="p-4 my-4 w-full text-{#ffffffb3} bg-gray-600 rounded-lg"
        />
        <input
          ref={isPassword}
          type="password"
          placeholder="Password "
          className="p-4 my-4 w-full bg-gray-600 rounded-lg"
        />
        <p className="py-3 text-lg text-red-500">{errorMessage}</p>
        <button
          className="p-4 my-4 bg-red-700 block w-full rounded-lg"
          onClick={handleButtonClick}
        >
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
