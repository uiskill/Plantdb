import React from 'react';
import CountUp from 'react-countup';

const CounterComponent = () => {
    return (
        <div className="container-fluid facts my-5 py-5" data-parallax="scroll" data-image-src="img/carousel-1.jpg">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
                        <h1 className="display-4 text-white">
                            <CountUp end={1234} duration={3} />
                        </h1>
                        <span className="fs-5 fw-semi-bold text-light">Happy Clients</span>
                    </div>
                    <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
                        <h1 className="display-4 text-white">
                            <CountUp end={1234} duration={3} />
                        </h1>
                        <span className="fs-5 fw-semi-bold text-light">Gardens Completed</span>
                    </div>
                    <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
                        <h1 className="display-4 text-white">
                            <CountUp end={1234} duration={3} />
                        </h1>
                        <span className="fs-5 fw-semi-bold text-light">Dedicated Staff</span>
                    </div>
                    <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
                        <h1 className="display-4 text-white">
                            <CountUp end={1234} duration={3} />
                        </h1>
                        <span className="fs-5 fw-semi-bold text-light">Awards Achieved</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CounterComponent;
