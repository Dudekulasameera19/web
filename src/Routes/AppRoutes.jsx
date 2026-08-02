import { Routes, Route } from "react-router-dom";
import { Products } from "../data/Products";


export const AppRoutes = () => {
  return (
    <>
    <Routes>
      {Products.map((page) => (
        <Route
          key={page.id}
          path={page.path}
          element={page.element}
        />
      ))}
    </Routes>
    </>
  );
};