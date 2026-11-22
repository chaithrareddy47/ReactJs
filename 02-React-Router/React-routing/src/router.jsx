import App from "./App";
import Home from "./Home";
import Vans from "./Vans";

import About from "./About";
import { createBrowserRouter } from "react-router-dom";
import VanDetails from "./VanDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/vans",
        element: <Vans />,
      },
      {
        path: "/vans/:id",
        element:<VanDetails/>
      }
    ],
  },
]);

export default router;
