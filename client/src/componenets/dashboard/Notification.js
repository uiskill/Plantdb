import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Notification() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    getAllUser();
  }, []);

  let str = "https://source.unsplash.com/250x250/?profile";
  // Fetch all Students
  const getAllUser = () => {
    axios
      .get("http://localhost:5000/getUserMsgNoti")
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => console.log("Error fetching messages:", err));
  };
  return (
    <>
      <div class="max-w-lg mx-auto items-center h-full overflow-hidden">
        {user.length > 0 ? (
          user.map((usr) => (
            <div class="flex justify-between px-3 py-1 bg-white items-center gap-1 rounded-lg border border-gray-100 my-3">
              <div class="relative z-0  w-16 h-16 rounded-full hover:bg-red-700 bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
                <div class="absolute z-0  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-gray-200 rounded-full border-2 border-white">
                  <img
                    class="w-full h-full object-cover rounded-full"
                    src={str + "," + usr.fname}
                    alt=""
                  />
                </div>
              </div>
              <div>
                <span class="font-mono">{usr.message.substring(0, 30)}</span>
              </div>
              <div>
               
              </div>
            </div>
          ))
        ) : (
          <div class="flex justify-between px-3 py-1 bg-white items-center gap-1 rounded-lg border border-gray-100 my-3">
            
                <img
                  class="w-full h-full object-cover rounded-full"
                  src="https://source.unsplash.com/1600x900/?notification,alert"
                  alt=""
                />
           
            <div>
              <span class="font-mono">No Notification Found</span>
            </div>
            <div>
            
            </div>
          </div>
        )}
      </div>
    </>
  );
}
