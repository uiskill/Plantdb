import "../css/Student.css";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function Student() {
  const [user, setUser] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [Form, setForm] = useState();

  // get all data function call
  useEffect(() => {
    getAllUser();
  }, []);

  // count students
  if (user.length > 0) {
    var len = user.length;
  } else {
    len = "No Student Exist";
  }

  // edit click event
  const handleEditClick = (employee) => {
    setSelectedEmployee(employee);
    setShowModal(true);
  };

  // add click event
  const handleAddClick = () => {
    setShowAddModal(true);
  };

  // Add_modal close event
  const handleCloseAddModal = () => {
    setShowAddModal(false);
  };

  // Edit_modal close event
  const handleCloseModal = () => {
    setSelectedEmployee(null);
    setShowModal(false);
  };

  // data entry permission for inputs add modal .

  const handleChangeAdd = (e) => {
    setForm({
      ...Form,
      [e.target.name]: e.target.value,
    });
    console.log(Form);
  };

  // data entry permission for inputs edit modal .
  const handleChange = (e) => {
    setSelectedEmployee({
      ...selectedEmployee,
      [e.target.name]: e.target.value,
    });
  };

  // Fetch all Students
  const getAllUser = () => {
    axios
      .get("http://localhost:5000/getUser")
      .then((response) => {
        setUser(response.data);
        setSearchResults(response.data);
      })
      .catch((err) => console.log("Error fetching users:", err));
  };

  // search
  const handleSearch = (e) => {
    const key = e.target.value;
    setSearchKey(key);

    const filteredUsers = user.filter((user) =>
      user.fname.toLowerCase().includes(key.toLowerCase())
    );
    setSearchResults(filteredUsers);
  };

  // Add students by admin
  const handleSubmitAdd = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/test", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Form),
      method: "POST",
    });

    const data = await response.json();
    console.log(data);

    if (data.Status === true) {
      // alert("Student Added Successfully.");
      Swal.fire({
        icon: "success",
        title: `${Form.fname} added successfully`,
        text: `${Form.fname} added by Admin.`,
      });
      handleCloseAddModal();
      setForm({});
      getAllUser();
    } else {
      // alert("Something went wrong!!..");
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong!",
      });
    }
  };
  // edit students by admin
  const handleUpdate = () => {
    if (selectedEmployee) {
      const updatedData = {
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        course: document.getElementById("course").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
      };

      axios
        .post(`http://localhost:5000/update`, {
          email: updatedData.email,
          fname: updatedData.fname,
          lname: updatedData.lname,
          phone: updatedData.phone,
          course: updatedData.course,
        })
        .then((response) => {
          console.log("Employee updated successfully:", response.data);
          Swal.fire({
            icon: "success",
            title: "Student updated successfully!",
            text: "Student detail's updated by Admin.",
          });
          handleCloseModal();
          getAllUser();
        })
        .catch((error) => {
          console.error("Error updating Student:", error);
        });
    }
  };

  // delete
  const deleteEmp = (email) => {
    Swal.fire({
      title: `Are you sure you want to delete ${email}?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch("http://localhost:5000/delete", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            email: email,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire("Deleted!", data.data, "success");
            getAllUser();
          })
          .catch((error) => {
            console.error("Error deleting Student:", error);
          });
      }
    });
  };

  return (
    <>
      {/* //main content */}
      <div>
        <div className="container">
       
            <div className="row justify-content-center align-items-center">
              <div className="col-sm-12 text-center">
                <h2 className="my-3">
                  <b>Student's Information</b>
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="input-group mb-3 col-md-4 ">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by Name"
                  value={searchKey}
                  onChange={handleSearch}
                />
              </div>
            </div>
            <div className="row">
              <div className="row justify-content-center align-items-center">
                <div className="col-sm-6 ">
                  <h2 className="my-3">
                    <b>Total Users : {len}</b>
                  </h2>
                </div>
                <div className="col-sm-6 flex justify-end ">
                  <button
                    onClick={() => handleAddClick()}
                    type="button"
                    class="btn btn-success"
                  >
                    Add User &nbsp;
                   
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="table-responsive">
                <table className="table table-striped table-hover table-bordered">
                  <thead>
                    <tr className="bg-light">
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Contact</th>
                      <th>Course</th>
                      <th>Join Date</th>
                      <th>Operations</th>
                    </tr>
                  </thead>
                  <tbody>
                    {searchResults.length > 0 ? (
                      searchResults.map((usr) => (
                        <tr key="{usr.id}" className="bg-info">
                          <td>{usr.fname}</td>
                          <td>{usr.lname}</td>
                          <td>{usr.email}</td>
                          <td>{usr.phone}</td>
                          <td>{usr.course}</td>
                          <td>{usr.date.substring(0, 10)}</td>
                          <td class=" flex justify-end">
                            <button
                              onClick={() => handleEditClick(usr)}
                              type="button"
                              class="btn btn-primary"
                            >
                            Edit
                            </button>

                            <button
                              onClick={() => deleteEmp(usr.email)}
                              type="button"
                              class="btn btn-danger"
                            >
                            Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="10" className="text-center">
                          No matching records found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

      </div>

      {/* edit modal */}
      <div
        className={`modal ${showModal ? "show" : ""}`}
        tabIndex="-1"
        role="dialog"
        style={{ display: showModal ? "block" : "none" }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header ">
              <h3 className="modal-title">Edit Students Details</h3>
              <Link
                type="Link"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={handleCloseModal}
              >
                <span aria-hidden="true">&times;</span>
              </Link>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label  className="p-2" htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    disabled
                    value={selectedEmployee?.email || ""}
                  />
                </div>
                <div className="form-group">
                  <label className="p-2"  htmlFor="fname">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fname"
                    name="fname"
                    required
                    onChange={handleChange}
                    value={selectedEmployee?.fname || ""}
                  />
                </div>
                <div className="form-group">
                  <label className="p-2"  htmlFor="lname">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lname"
                    name="lname"
                    required
                    onChange={handleChange}
                    value={selectedEmployee?.lname || ""}
                  />
                </div>

                <div className="form-group">
                  <label className="p-2"  htmlFor="contact">Contact</label>
                  <input
                    className="form-control"
                    id="phone"
                    name="phone"
                    type="phone"
                    maxLength="10"
                    minLength="10"
                    required
                    value={selectedEmployee?.phone || ""}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="p-2"  for="cars">Choose a course:</label>

                  <select
                    className="form-control"
                    name="course"
                    id="course"
                    required
                    value={selectedEmployee?.course || ""}
                    onChange={handleChange}
                  >
                    <option value="Others">Others</option>
                    <option value="It">Information Technology</option>
                    <option value="Etc">Electronic & Telecommunication</option>
                    <option value="Me">Mechanical Engineering</option>
                    <option value="Ce">Computer Engineering</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <Link
                type="Link"
                className="btn btn-success"
                onClick={handleUpdate}
              >
                Save changes
              </Link>
              <Link
                type="Link"
                className="btn btn-info"
                data-dismiss="modal"
                onClick={handleCloseModal}
              >
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Add modal */}
      <div
        className={`modal ${showAddModal ? "show" : ""}`}
        tabIndex="-1"
        role="dialog"
        style={{ display: showAddModal ? "block" : "none" }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header ">
              <h3 className="modal-title">Add Users </h3>
              <Link
                type="Link"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={handleCloseAddModal}
              >
                <span aria-hidden="true">&times;</span>
              </Link>
            </div>
            <form onSubmit={handleSubmitAdd}>
              <div className="modal-body">
                <div className="form-group">
                  <label className="p-2"  htmlFor="fname">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fname"
                    name="fname"
                    placeholder="Enter First Name"
                    onChange={handleChangeAdd}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="p-2"  htmlFor="lname">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lname"
                    name="lname"
                    placeholder="Enter last Name"
                    required
                    onChange={handleChangeAdd}
                  />
                </div>
                <div className="form-group">
                  <label className="p-2"  htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter Email"
                    required
                    onChange={handleChangeAdd}
                  />
                </div>
                <div className="form-group">
                  <label className="p-2"  htmlFor="email">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Enter Password"
                    required
                    onChange={handleChangeAdd}
                  />
                </div>
                <div className="form-group">
                  <label className="p-2"  htmlFor="contact">Contact</label>
                  <input
                    className="form-control"
                    id="phone"
                    name="phone"
                    type="phone"
                    maxLength="10"
                    minLength="10"
                    placeholder="Enter Contact Number"
                    required
                    onChange={handleChangeAdd}
                  />
                </div>

                <div className="form-group">
                  <label className="p-2"  for="browser">Select:</label>
                  <input
                    list="browsers"
                    className="form-control"
                    name="course"
                    id="browser"
                    required
                    onChange={handleChangeAdd}
                  />

                  <datalist id="browsers">
                    <option value="Electronic & Communication Engineering" />
                    <option value="Mechanical Engineering" />
                    <option value="Computer Engineering" />
                    <option value="Information Technology" />
                  </datalist>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  className="btn btn-success"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-info"
                  data-dismiss="modal"
                  onClick={handleCloseAddModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
