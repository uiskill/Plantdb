import React, { useEffect, useState } from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from "../componenets/dashboard/Student";



export default function Dashboard({ Session, setSession }) {


  const navigate = useNavigate();

  const handleClick = () => {
    if (window.confirm("Are you want to Logout!")) {
      // notify();
      setSession(0);
      navigate("/");
    }
  };

  return (
    <>
      <div className="container-fluid">
        <header className="fixed  px-4 py-6  bg-light">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              <div></div>
              <div className="text-lg font-bold p-5"><h2 className="text-center">Admin Panel</h2></div>
              <div></div>
            </div>
          </div>
          {/* <Toaster /> */}
        </header>
<div className="row">
        <aside className="col-sm-2 bg-info" >
          <div className="">
            <div className="flex-grow">
              <div className="px-4 py-6 text-center border-b">
                <div className="flex flex-col items-center justify-between py-4">
                
                  <h1>
                    PlantDB
                  </h1>
                </div>
              </div>
              <div className="">
                <ul className="space-y-1">
                  
                  <li>
                    <Link
                      to="/Dashboard/Student"
                    
                    >
                     
                      Students
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Dashboard/Message"
                      
                    >
                     
                      Messages
                    </Link>
                  </li>
                 
                </ul>
              </div>
            </div>
            <div className="p-4">
              <button
                onClick={handleClick}
                type="button"
                className="btn btn-light"
              >
                Logout &nbsp; 
              </button>{" "}
            </div>
          </div>
        </aside>
        <main className="col-sm-10 bg-warning " >
        
         
          <Outlet />
        </main>
        </div>
      </div>
    </>
  );
}
