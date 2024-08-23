
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import jsonData from '../data.json';


const Plantdetails = () => {
    const { id } = useParams();
    const item = jsonData?.items.find(item => item.id === parseInt(id));

    if (!item) {
        return <div>Item not found!</div>;
    }
    return (
        <div>
            <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container text-center py-5">
                    <h1 className="display-3 text-white mb-4 animated slideInDown">{item.title}</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">{item.title}</li>
                        </ol>
                    </nav>
                </div>
            </div>



            <div className="container text-center py-2">

                <div class="row p-2">
                    <div className="col-sm-12 ">
                        <div className=" ">
                            <h1>{item.title} </h1>

                            <img src={item.plantimg} alt={item.title} className="p-1 rounded" style={{ border: "#000 solid 3px", width: "300px", borderRadius: "20px" }} />

                            <h3 className='p-2'>Scientific Name :{item.s_name}</h3>


                        </div>
                    </div>
                </div>

                <div class="row p-2">
                    <div className="col-sm-6 ">
                        <div className="rounded bg-success p-5">


                            <h1>Description</h1>

                            <p>{item.description}</p>
                        </div>
                    </div>

                    <div className="col-sm-6 ">
                        <div className="rounded bg-info p-5">
                            <h1>Growing Conditions</h1>

                            <p>{item.graw}</p>
                        </div>
                    </div>


                </div>




                <div class="row p-2">
                    <div className="col-sm-6 ">
                        <div className="rounded bg-light p-5">
                            <h1>Facts</h1>

                            <p>{item.fact}</p>
                        </div>
                    </div>

                    <div className="col-sm-6 ">
                        <div className="rounded bg-danger  p-5">

                            <h1>Care Tips</h1>

                            <p>{item.care_tip}</p>
                        </div>
                    </div>


                </div>

                <div class="row p-2">
                    <div className="col-sm-12 ">
                        <div className="rounded bg-warning  p-5">
                            <h1>Uses</h1>

                            <p>{item.uses}</p>

                        </div>
                    </div>



                </div>


            </div>


        </div>

    )
}

export default Plantdetails
