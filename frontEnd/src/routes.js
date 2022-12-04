import { useRoutes } from "react-router-dom";
import AddClient from "./pages/AddClient";
import AddProduct from "./pages/AddProduct";
import HomePage from "./pages/HomePage";
import ShoppingCart from "./pages/ShoppingCart";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },

    {
      path: "/addProduct",
      element: <AddProduct />,
    },

    {
      path: "/addClient",
      element: <AddClient />,
    },
    {
      path: "/panier",
      element: <ShoppingCart />,
    },
  ]);
}
