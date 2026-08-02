import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Product } from "../pages/Product";
import { Cart } from "../pages/Cart";

import { Profile } from "../pages/cart/Profile";
import { Orders } from "../pages/cart/Orders";
import { Wishlist } from "../pages/cart/Wishlist";
import { Settings } from "../pages/cart/Settings";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />

      <Route path="/cart" element={<Cart />}>
        {/* Default page when /cart is opened */}
        <Route index element={<Profile />} />

        <Route path="profile" element={<Profile />} />
        <Route path="orders" element={<Orders />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};