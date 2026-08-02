import { Link } from "react-router-dom";
import { Carousel } from "../components/Carousel";
import { Card } from "../components/Card";
import { ProductData } from "../data/ProductData";
import { Footer } from "../components/Footer";
import { Cart } from "./Cart";
export const Home = () => {
    return (
        <>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <a className="navbar-brand fw-bold" href="/">
                        MyWebsite
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">
                                    Home
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/product">
                                    product
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/cart">
                                    cart
                                </Link>
                            </li>

                            <li className="nav-item ms-lg-3">
                                <button className="btn btn-light">Login</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Carousel />
            <div className="container mt-5">
                <div className="row">
                    {ProductData.map((item) => (
                        <div className="col-md-4 mb-4" key={item.id}>
                            <Card
                                title={item.title}
                                description={item.description}
                                price={item.price}
                            />
                        </div>
                    ))}
                </div>
            </div>


            <Footer />

        </>
    );
};