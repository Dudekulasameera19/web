import { Routes, Route } from "react-router-dom";
import { routes } from "../data/Routes";

export const AppRoutes = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.id}
          path={route.path}
          element={route.element}
        />
      ))}
    </Routes>
  );
};