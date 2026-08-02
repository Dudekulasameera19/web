import { Link, Outlet } from "react-router-dom";

export const Cart = () => {
  return (
    <div className="container mt-4">
      <div className="row">

        <div className="col-md-3">
          <div className="list-group">
            <Link to="profile" className="list-group-item">
              Profile
            </Link>

            <Link to="orders" className="list-group-item">
              Orders
            </Link>

            <Link to="wishlist" className="list-group-item">
              Wishlist
            </Link>

            <Link to="settings" className="list-group-item">
              Settings
            </Link>
          </div>
        </div>

        <div className="col-md-9">
          <div className="border rounded p-3">
            <Outlet />
          </div>
        </div>

      </div>
    </div>
  );
};