import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const Header = ({ Session, setSession }) => {
    const navigate = useNavigate();

  const handleClick = () => {
    if (window.confirm("Are you want to Logout!")) {
      setSession(0);
      navigate("/");
    }
  };
  return (
    <div>
    
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
        <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <h1 className="m-0">SF PlantDB</h1>
        </Link>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
               <Link to="/" className="nav-item nav-link active">Home</Link>
               <Link to="/about" className="nav-item nav-link">About</Link>
               <Link to="/plantdb" className="nav-item nav-link">Plantdb</Link>
               <Link to="/resourses" className="nav-item nav-link">Resourses</Link>
               <Link to="/monitors" className="nav-item nav-link">Monitor</Link>
               <Link to="/faq" className="nav-item nav-link">Faq</Link>
               {Session === 0 ? (
               <Link to="/Sign"className="nav-item nav-link">Sign In</Link>
            ) : (
               <Link  onClick={handleClick} to="" className="nav-item nav-link">Logout</Link>
            )}
            </div>



          
                <Link
                  to="/"
                  className="text-gray-800 text-sm font-semibold hover:text-blue-600 mr-4 flex items-center justify-center"
                >
                  
                </Link>
                <Link
                  to="/About"
                  className="text-gray-800 text-sm px-2 font-semibold hover:text-blue-600 mr-4 flex items-center justify-center"
                >
     
                </Link>
                
                <Link
                  to="/Contact"
                  className="text-gray-800 text-sm px-2  font-semibold hover:text-blue-600 flex items-center justify-center"
                >
   {" "}
                </Link>
                {Session === 0 ? (
                  <Link
                    to="/Sign"
                    className="text-gray-800 text-sm font-semibold hover:text-blue-600 mr-4"
                  >
              
                  </Link>
                ) : (
                  <Link
                    onClick={handleClick}
                    to=""
                    className="text-gray-800 text-sm font-semibold hover:text-blue-600 mr-4"
                  >

                  </Link>
                )}










            <Link to="/contact" className="btn btn-primary py-4 px-lg-4 rounded-0 d-none d-lg-block">Contact<i className="fa fa-arrow-right ms-3"></i></Link>
        </div>
    </nav>
    </div>
  )
}

export default Header
