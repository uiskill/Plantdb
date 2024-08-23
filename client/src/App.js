import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resourses from './pages/Resourses';
import Contact from './pages/Contact';
import About from './pages/About';
import Faq from './pages/Faq';
import Home from './pages/Home';
import Plantdb from './pages/Plantdb';
import Monitor from "./pages/Monitor";
import Dashboard from "./pages/Dashboard";
import Notification from "./componenets/dashboard/Notification";
import Student from "./componenets/dashboard/Student";
import Message from "./componenets/dashboard/Message"
import Profile from "./pages/Profile";
import Sign from "./pages/Sign";
import Registration from "./pages/Registration";
import Error_404 from "./pages/Error_404";
import Forgotpassword from "./pages/Forgotpassword";
import Footer from "./componenets/Footer";
import Header from "./componenets/Header";
import Plantdetails from "./pages/Plantdetails";


function App() {

  const [Session, setSession] = useState(0);
  const [userData, setuserData] = useState();
  return (
    <div className="App">
     <BrowserRouter>
     {Session === 0 ? (
          <Header Session={Session} setSession={setSession} />
        ) : (
          ""
        )}
      
          <Routes>
            <Route exac path="/"  element={<Home />} />
            <Route  path="/about" element={<About/>} />
            <Route  path="/faq" element={<Faq />} />
            <Route  path="/resourses" element={<Resourses/>} />
            <Route  path="/monitors" element={<Monitor/>} />
            <Route  path="/contact" element={<Contact/>} />
            <Route  path="/plantdb" element={<Plantdb/>} />
            <Route exact path="/plantdeatils/:id" element={<Plantdetails/>} />
     
            <Route
              path="/Sign"
              element={
                <Sign
                  setuserData={setuserData}
                  Session={Session}
                  setSession={setSession}
                />
              }
            />
            <Route  path="/Registration" element={<Registration />} />
            <Route  path="/Forgotpassword" element={<Forgotpassword />} />

            <Route
              path="/Profile"
              element={
                Session > 0 ? (
                  <Profile
                    Session={Session}
                    userData={userData}
                    setSession={setSession}
                  />
                ) : (
                  <Error_404 />
                )
              }
            />
            <Route
              path="/Dashboard"
              element={
                Session > 0 ? (
                  <Dashboard Session={Session} setSession={setSession} />
                ) : (
                  <Error_404 />
                )
              }
            >
             
              <Route
                path="/Dashboard/Student"
                element={
                  <Student
                    // AllStudent={AllStudent}
                    Session={Session}
                    setSession={setSession}
                  />
                }
              />
              <Route
                path="/Dashboard/Message"
                element={<Message Session={Session} setSession={setSession} />}
              />
              <Route
                path="/Dashboard/Notification"
                element={
                  <Notification Session={Session} setSession={setSession} />
                }
              />
            </Route>
          </Routes>
          {Session === 0 ? <Footer /> : ""}
        </BrowserRouter>
    </div>
  );
}

export default App;
