import { Home } from "../pages/Home";
import { Product } from "../pages/Product";
import { Cart } from "../pages/Cart";

export const Products = [
  {
    id: 1,
    path: "/",
    element: <Home />,
  },
  {
    id: 2,
    path: "/product",
    element: <Product />,
  },
  {
    id: 3,
    path: "/cart",
    element: <Cart />,
  },
];