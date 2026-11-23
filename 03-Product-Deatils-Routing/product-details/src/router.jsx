import { createBrowserRouter } from "react-router-dom";

import App from "./App"
import Home from "./Home"
import Products from "./Products"
import ProductView from "./ProductView";

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
        path: "/product",
        element: <Products />,
      },
      {
        path: "/productview/:id",
        element:<ProductView/>
      }
      
    ],
  },
]);

export default router