import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.userReducer);
  // console.log(user);

  const handleSignOut = () => {
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
    <div className="flex justify-between">
      <div className="header-wrap w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10">
        <img
          className="w-44"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>
      {user && (
        <div className="flex z-50 right-3 absolute py-4">
          <img
            src={user?.photoURL}
            className="w-12 h-12"
            alt={user?.photoURL}
          />

          <button className="text-white" onClick={handleSignOut}>
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
