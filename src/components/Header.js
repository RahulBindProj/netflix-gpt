import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Cleanup function to prevent memory leaks
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Successfully signed out
      })
      .catch((error) => {
        console.error("Sign-out error:", error);
        navigate("/error");
      });
  };

  return (
    <div className="flex justify-between">
      <div className="header-wrap w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10">
        <img className="w-44" src={LOGO} alt="logo" />
      </div>

      {user && (
        <div className="flex z-50 right-3 absolute py-4">
          <img
            src={user?.photoURL}
            className="w-12 h-12"
            alt={user?.displayName}
          />
          <button className="text-white ml-4" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
