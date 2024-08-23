import { Link, useNavigate } from "react-router-dom";
import { React, useState } from "react";
import Swal from "sweetalert2";

function ContactForm() {
  const navigate = useNavigate();
  const [Form, setForm] = useState();

  const handleChange = (e) => {
    setForm({
      ...Form,
      [e.target.name]: e.target.value,
    });
    console.log(Form);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/cont", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Form),
      method: "POST",
    });

    const data = await response.json();
    // console.log(data);
    if (data.Status === true) {
      // alert("Student Added Successfully.");
      Swal.fire({
        icon: "success",
        title: ` Message Sent Successfully.`,
        text: `Sent by ${Form.fname}.`,
      });
      navigate("/");
    } else {
      // alert("Something went wrong!!..");
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong!",
      });
      setForm({});
    }
  };

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <div className="bg-light rounded p-4 p-sm-5 wow fadeInUp" data-wow-delay="0.1s">
          <form onSubmit={handleSubmit}>
              <h1 className="display-5 mb-5 text-center">Get A Free Quote</h1>
              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control border-0"
                      id="fname"
                      name="fname"
                  
                      autoComplete="off"
                      onChange={handleChange}
                      placeholder="Name"
                    />
                    <label htmlFor="name">Your First Name </label>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control border-0"
                      id="lname"
                      name="lname"
                   
                      autoComplete="off"
                      onChange={handleChange}
                      placeholder="Name"
                    />
                    <label htmlFor="name">Your Last Name</label>
                  </div>
                </div>














                <div className="col-sm-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      name="email"
                      autoComplete="off"
                      className="form-control border-0"
                      id="email"
                     
                      onChange={handleChange}
                      placeholder="Email"
                    />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control border-0"
                      id="phone"
                      name="phone"
                      autoComplete="off"
                     
                      onChange={handleChange}
                      placeholder="Mobile"
                    />
                    <label htmlFor="mobile">Your Mobile</label>
                  </div>
                </div>
                
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control border-0"
                      id="message"
                     
                      name="message"
                      autoComplete="off"
                      onChange={handleChange}
                      placeholder="Leave a message here"
                      style={{ height: "100px" }}
                    ></textarea>
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                <div className="col-12 text-center">
                  <button
                    className="subscribe-button text-white w-button w-100 text-center btn btn-primary py-3 px-4"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
