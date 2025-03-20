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
    <div className="relative w-full">
      <div className="absolute top-0 left-0 w-full px-8 py-3 bg-gradient-to-b from-black z-10 flex items-center justify-between">
        <img className="w-44" src={LOGO} alt="logo" />

        {user && (
          <div className="flex items-center space-x-4">
            <img
              src={user?.photoURL}
              className="w-12 h-12 rounded border-2 border-none"
              alt={user?.displayName}
            />
            <button
              className="text-white font-medium hover:underline"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
