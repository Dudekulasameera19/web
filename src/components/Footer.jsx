import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 py-4">
      <div className="container">
        <div className="row">

          <div className="col-md-4">
            <h5>MyWebsite</h5>
            <p>Your one-stop shop for the best products.</p>
          </div>

          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link className="text-white text-decoration-none" to="/">Home</Link></li>
              <li><Link className="text-white text-decoration-none" to="/product">Products</Link></li>
              <li><Link className="text-white text-decoration-none" to="/cart">Cart</Link></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5>Contact</h5>
            <p>Email: info@mywebsite.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>

        </div>

        <hr className="border-light" />

        <div className="text-center">
          <small>© 2026 MyWebsite. All Rights Reserved.</small>
        </div>
      </div>
    </footer>
  );
};