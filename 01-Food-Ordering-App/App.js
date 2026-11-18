import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter } from "react-router-dom";
import { Outlet, RouterProvider } from "react-router";
import RestaurantMenu from "./components/RestaurantMenu";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
        },
        {
            path: "/restaurant/:resId",
            element:<RestaurantMenu/>
      }
    ],
    errorElement: <Error />,
  },
]);

ReactDom.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />,
);
