import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constant";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  console.log(showGptSearch);

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

  const handleGptSearchClick = () => {
    //Toggle Search Button
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
    console.log(e.target.value);
  };

  return (
    <div className="relative w-full">
      <div className="absolute top-0 left-0 w-full px-8 py-3 bg-gradient-to-b from-black z-10 flex items-center justify-between">
        <img className="w-44" src={LOGO} alt="logo" />
        {user && (
          <div className="flex items-center space-x-4">
            {showGptSearch && (
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                <label
                  htmlFor="language"
                  className="block text-lg font-medium text-white mb-2"
                >
                  Select Language:
                </label>
                <select
                  id="language"
                  className="block w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition duration-200 ease-in-out"
                  onChange={handleLanguageChange}
                >
                  {SUPPORTED_LANGUAGES.map((lang, index) => (
                    <option
                      value={lang.identifier}
                      key={index}
                      className="bg-gray-700 text-white"
                    >
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <button
              className="bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
              onClick={handleGptSearchClick}
            >
              {!showGptSearch ? "GPT Search" : "Home"}
            </button>
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
