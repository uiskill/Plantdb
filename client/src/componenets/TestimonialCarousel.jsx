import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const TestimonialCarousel = () => {
  return (
    <div className="container-xxl my-5 py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
            <p className="fs-5 fw-bold text-primary">Testimonial</p>
            <h1 className="display-5 mb-5">What Our Clients Say About Us!</h1>
            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo.
            </p>
            <a className="btn btn-primary py-3 px-4" href="">
              See More
            </a>
          </div>
          <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.5s">
            <OwlCarousel
              className="owl-theme"
              loop
              margin={10}
              items={1} // Display one item at a time
              autoplay
              autoplayTimeout={3000}
              autoplayHoverPause
            >
              <div className="testimonial-item text-left">
                <img className="img-fluid rounded mb-3" src="img/testimonial-1.jpg" alt="Testimonial 1" />
                <p className="fs-5">
                  Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.
                </p>
                <h4 class="text-left">Client Name</h4>
                <span class="text-left">Profession</span>
              </div>
              <div className="testimonial-item text-left">
                <img className="img-fluid rounded mb-3" src="img/testimonial-2.jpg" alt="Testimonial 2" />
                <p className="fs-5">
                  Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.
                </p>
                <h4 class="text-left">Client Name</h4>
                <span class="text-left">Profession</span>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
