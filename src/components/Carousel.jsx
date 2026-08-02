import React from "react";
import "./Carousel.css";

export const Carousel = () => {
    return (
        <div
            id="homeCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
        >

            {/* Indicators */}
            <div className="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#homeCarousel"
                    data-bs-slide-to="0"
                    className="active"
                ></button>

                <button
                    type="button"
                    data-bs-target="#homeCarousel"
                    data-bs-slide-to="1"
                ></button>

                <button
                    type="button"
                    data-bs-target="#homeCarousel"
                    data-bs-slide-to="2"
                ></button>
            </div>


            {/* Slides */}
            <div className="carousel-inner">

                <div className="carousel-item active">
                    <img
                        src="https://picsum.photos/1200/500?random=1"
                        className="d-block w-100"
                        alt="First slide"
                    />

                    <div className="carousel-caption">
                        <h2>Welcome to MyWebsite</h2>
                        <p>Explore our latest products.</p>
                        <button className="btn btn-primary">
                            Shop Now
                        </button>
                    </div>
                </div>


                <div className="carousel-item">
                    <img
                        src="https://picsum.photos/1200/500?random=2"
                        className="d-block w-100"
                        alt="Second slide"
                    />

                    <div className="carousel-caption">
                        <h2>New Collection</h2>
                        <p>Find amazing products at best prices.</p>
                    </div>
                </div>


                <div className="carousel-item">
                    <img
                        src="https://picsum.photos/1200/500?random=3"
                        className="d-block w-100"
                        alt="Third slide"
                    />

                    <div className="carousel-caption">
                        <h2>Special Offers</h2>
                        <p>Grab exciting discounts today.</p>
                    </div>
                </div>

            </div>


            {/* Previous Button */}
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#homeCarousel"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon"></span>
            </button>


            {/* Next Button */}
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#homeCarousel"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon"></span>
            </button>

        </div>
    );
};