import React from "react";
import { Link } from "react-router-dom";
import ERROR_404 from "../image/ERROR_404.jpg";

export default function Error_404() {
  return (
    <>

      <div className="container">
      
          <div className="row">
            <div className="col-sm-6">404</div>
            <p className="text-2xl md:text-3xl font-light leading-normal">
              Sorry we couldn't find this page.{" "}
            </p>
            <p className="mb-8">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>

            <Link to="/">
              <button className="btn btn-primary">
                back to homepage
              </button>
            </Link>
          </div>
          <div className="img-fluid col-sm-6">
            <img src={ERROR_404} alt="ERROR_404" class="img-fluid" />
          </div>
        </div>

  
    </>
  );
}
