
import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";

import jsonData from '../data.json';
const ProjectsComponent = () => {
    const items = jsonData?.items || [];


 
    return (

        <div className="container-fluid py-5" style={{ background: "#F3f3f3" }}>
            <div className="container">
                <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>

                    <h1 className="display-5 mb-5 text-center">PLANT DATABASE</h1>
                </div>
               
                <div className="row g-4 portfolio-container">



                 {items.map(item => (


                        <div className="col-lg-3 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.1s" key={item.id}>
                            <div className="portfolio-inner rounded">
                                <img className="img-fluid" src={item.plantimg} alt={item.title} />
                                <div className="portfolio-text">
                                    <h4 className="text-white mb-4">{item.title}</h4>
                                    <div className="d-flex">
       

                                    
                                        <Link className="btn btn-light"  to={`/plantdeatils/${item.id}`}>Read more</Link>
                 


                 






                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                  















                </div>


            </div>
        </div>

    );
}

export default ProjectsComponent;
