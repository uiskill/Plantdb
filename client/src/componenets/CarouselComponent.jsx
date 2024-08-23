import React from 'react';
import { Link} from "react-router-dom";
const CarouselComponent = () => {
    return (
        <div className="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
            <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="w-100" src="img/carousel-1.jpg" alt="Image"/>
                        <div className="carousel-caption">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h1 className="display-1 text-white mb-5 animated slideInDown">Welcome To Plant Database</h1>
                                        <Link to="/contact" className="btn btn-primary py-sm-3 px-sm-4">Explore More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="w-100" src="img/carousel-2.jpg" alt="Image"/>
                        <div className="carousel-caption">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-7">
                                        <h1 className="display-1 text-white mb-5 animated slideInDown">QR-Based Plant Information System</h1>
                                        <Link to="/Faq" className="btn btn-primary py-sm-3 px-sm-4">Explore More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default CarouselComponent
