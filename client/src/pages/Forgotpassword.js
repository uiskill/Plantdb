import { react, useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import Forgotpassword from "../image/Forgotpassword.gif";
import Swal from "sweetalert2";

export default function Forgot_password() {
  const [Form, setForm] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...Form,
      [e.target.name]: e.target.value,
    });
    console.log(Form);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/forgot", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Form),
      method: "POST",
    });

    const data = await response.json();
    console.log(data);

    if (data.status === true) {
      // alert("Student Added Successfully.");
      Swal.fire({
        icon: "success",
        title: `Password changed successfully`,
        text: `Forgot Password.`,
      });
      setForm({});
      navigate("/Sign");
    } else {
      // alert("Something went wrong!!..");
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong!",
      });
    }
  };
  return (
    <div>
    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
    <div className="container text-center py-5">
        <h1 className="display-3 text-white mb-4 animated slideInDown">Forgot Password</h1>
        <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Forgot Password</li>
            </ol>
        </nav>
    </div>
</div>
<div className="container-fluid">
    <div class="row m-10">
      <div class="col-sm-6 text-center">
        <img src={Forgotpassword} alt="" class="img-fluid" />
      </div>

      <div class="col-sm-6"  style={{border:"#f2f2f2 solid 1px",borderRadius:"20px",padding:"20px",marginTop:"20px"}}>
      
       
          <h1 class="text-center">
            FORGOT PASSWORD ?
          </h1>
          <form class="mt-6" onSubmit={handleSubmit}>
            <div>
              <label class="p-3">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                placeholder="Enter Email Address"
                class="form-control"
                autofocus
                autocomplete
                required
              />
            </div>

            <div class="mt-4">
              <label class="p-3">Mobile Number</label>
              <input
                type="number"
                name="phone"
                id="phone"
                minLength="10"
                maxLength="10"
                onChange={handleChange}
                placeholder="Enter Mobile Number"
                 class="form-control"
                required
              />
            </div>
            <div class="mt-4">
              <label class="p-3">New Password</label>
              <input
                type="Password"
                name="password"
                id="password"
                onChange={handleChange}
                placeholder="Enter New Password"
                class="form-control"
                autofocus
                autocomplete
                required
              />
            </div>
            <button
              type="submit"
              class="btn btn-primary mt-2"
            >
              Reset Password
            </button>
            <p className="mt-8">
              Need an account?{" "}
              <Link
                to="/Registration"
                className="text-success"
              >
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
