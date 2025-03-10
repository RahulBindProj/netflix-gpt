import React from "react";
import Login from "./LoginData";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
      {/* <Login />
      <Browse /> */}
    </div>
  );
};

export default Body;
