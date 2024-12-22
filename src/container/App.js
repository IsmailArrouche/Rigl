import React, { useState } from "react";
import Nav from "../components/Nav/Nav";
import Form from "../components/Form/Form";
import Welcome from "../components/Welcome/Welcome";
import Conex from "../components/Conex/Conex";
import ForgetPassword from "../components/ForgetPassword/ForgetPassword";
import ChangePassword from "../components/ForgetPassword/ChangePassword";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import ForgetPassword from "../components/ForgetPassword/ForgetPassword";
import ChangePassword from "../components/ForgetPassword/ChangePassword";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  // Redux
  const mode = useSelector((state) => state.mode.mode);
  const user = useSelector((state) => state.user.user);

  // Gestion de la navigation locale
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <Router>
    <div className="app h-screen min-h-[770px] md:min-h-[710px] bg-center bg-cover bg-no-repeat bg-[url('./assets/mountain.jpg')]">
      <div className={`${mode === true ? "light" : "dark"} bg-gradient h-full`}>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              currentPage === "home" ? (
                user.length === 0 ? (
                  <Form onNavigate={setCurrentPage} />
                ) : (
                  <Welcome />
                )
              ) : (
                <Conex onNavigate={setCurrentPage} />
              )
            }
          />
          <Route path="/register" element={<Form onNavigate={setCurrentPage} />} />
          <Route path="/login" element={<Conex onNavigate={setCurrentPage} />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/change-password" element={<ChangePassword />} />
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
