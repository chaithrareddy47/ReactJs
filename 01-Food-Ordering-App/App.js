import React from "react";
import ReactDom from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";

const App = () => {
    return (
        <div>
            <Header />
            <Body/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element:<App/>
    },
    {
        path: "/about",
        element:<About/>
    },
    {
        path: "/contact",
        element:<Contact/>
    }
])


ReactDom.createRoot(document.getElementById("root")).render(<RouterProvider router={appRouter}/>)
