import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "../image/login.jpg";
import userimg from "../image/user.png";

export default function Sign({ Session, setuserData, setSession }) {
  const navigate = useNavigate();
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const [Form, setForm] = useState();
  const [User, setUser] = useState();
  const [Student, setStudent] = useState();

  const handleChange = (e) => {
    setForm({
      ...Form,
      [e.target.name]: e.target.value,
    });
    console.log(Form);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/auth", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Form),
      method: "POST",
    });

    const data = await response.json();

    if (data.status === "true" && data.user === "Admin") {
      setSession(1);
      // setUser(data.fname);
      navigate("/Dashboard");
    } else if (data.status === "true" && data.user === "Student") {
      setSession(2);
      const user_data = await fetch("http://localhost:5000/student_profile", {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: data.email }),
        method: "POST",
      });
      setuserData(await user_data.json());
      setUser(data.fname);
      // setid(data.id);
      // const response = await fetch("http://localhost:5000/employeeData", {
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   method: "POST",
      //   body: JSON.stringify({ email: data.id }),
      // });
      // const UserData = await response.json();
      // setStudent(UserData);
      navigate("/Profile");
    } else {
      alert("Invalid username or password!");
   
    }
  };
  return (
    <>
 
    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container text-center py-5">
                    <h1 className="display-3 text-white mb-4 animated slideInDown">Sign In</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Sign In</li>
                        </ol>
                    </nav>
                </div>
            </div>
    <div className="container-fluid">
      <div className="row">
        <div className=" col-sm-6">
          <img
            src={Login}
            alt="Login Images"
            className="img-fluid"
          />
        </div>
        <div
          className="col-sm-6" >
          <div className="row" style={{border:"#f2f2f2 solid 1px",borderRadius:"20px",padding:"20px",marginTop:"20px"}}>
            <div className="text-center">
              <img src={userimg} alt="user-img" className="img-fluid" style={{width:"200px"}} />
            </div>
            <div className="text-center mb-10">
              <h1 className="font-bold text-3xl text-gray-900">LOGIN</h1>
            </div>

            <form className="" onSubmit={handleSubmit}>
              <div class="col-sm-12">
                <label className="block text-gray-700 pb-2 pt-2">Email Address</label>
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Email Address"
                  className="form-control"
                  autofocus
                  autocomplete
                  required
                />
              </div>

              <div class="col-sm-12">
                <label className="block text-gray-700 pb-2 pt-2">Password</label>
                <input
                  onChange={handleChange}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  minlength="6"
                 className="form-control"
                  required
                />
              </div>

              <div className="text-right my-2">
                <Link
                  to="/Forgotpassword"
                  className="text-sm font-semibold text-blue-500 hover:text-blue-700  focus:text-blue-700"
                >
                  Forgot Password?
                </Link>
              </div>

              <button className="btn btn-primary">
                LOGIN
              </button>
            </form>

            <hr className="m-2" />

            {/* <button
              type="button"
              className=" hover:bg-blue-400 w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
            >
              <div className="flex items-center justify-center">
                <span>
                  <GoogleIcon />
                </span>
                <span className=  "ml-4 ">Log in with Google</span>
              </div>
            </button> */}

            <p className="mt-8">
              Need an account?{" "}
              <Link
                to="/Registration"
                className="btn btn-success"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
