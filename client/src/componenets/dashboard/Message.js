import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function Message() {
  const [user, setUser] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    getAllUser();
  }, []);

  // Fetch all Students
  const getAllUser = () => {
    axios
      .get("http://localhost:5000/getUserMsg")
      .then((response) => {
        setUser(response.data);
        setSearchResults(response.data);
      })
      .catch((err) => console.log("Error fetching messages:", err));
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

  // count messages
  if (user.length > 0) {
    var len = user.length;
  } else {
    len = "No Message Exist";
  }

  // delete all data
  const deleteall = () => {
    let cnf = prompt("Please enter admin password!");

    if (cnf === "admin123") {
      Swal.fire({
        title: `Are you sure you want to delete all messages ?`,
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch("http://localhost:5000/msgdeleteall", {
            method: "POST",
            crossDomain: true,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              Swal.fire("Deleted!", "All Messages", "success");
              getAllUser();
            })
            .catch((error) => {
              console.error("Error deleting messages:", error);
            });
        }
      });
    } else {
      alert("Wrong password!");
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
        fetch("http://localhost:5000/msgdelete", {
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
            console.error("Error deleting messages:", error);
          });
      }
    });
  };

  return (
    <>
      <div className="container">
        <div className="">
          <div className="row justify-content-center align-items-center">
            <div className="col-sm-12 text-center">
              <h2 className="my-3">
                <b>Visitor's Messages</b>
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
          <div className="row justify-content-center align-items-center">
            <div className="col-sm-6 ">
              <h2 className="my-3">
                <b>Total Messages : {len}</b>
              </h2>
            </div>
            <div className="col-sm-6 flex justify-end ">
              <button
                onClick={() => deleteall()}
                type="button"
                class="btn btn-danger"
              >
                Delete All Messages &nbsp;
               
                
              </button>
            </div>
          </div>
          <div className="row">
            <div className="table-responsive">
              <table className="table table-striped table-hover table-bordered">
                <thead className="bg-light">
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Message</th>
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
                        <td>{usr.message.substring(0, 30)}</td>
                        <td class=" flex justify-center">
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
    </>
  );
}
