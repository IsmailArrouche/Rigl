import React, { useEffect, useState } from "react";
import Nav from "../components/Nav/Nav";
import Form from "../components/Form/Form";
import Welcome from "../components/Welcome/Welcome";
import Conex from "../components/Conex/Conex";
import { useSelector } from "react-redux";
import ForgetPassword from "../components/ForgetPassword/ForgetPassword";
import ChangePassword from "../components/ForgetPassword/ChangePassword";
import Explore from "../components/Explore/Explore";
import Profile from "../components/Profile/Profile";
import Message from "../components/Message/Message";
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from "react-router-dom";

function AppContent() {
  // Redux
  const mode = useSelector((state) => state.mode.mode);
  const user = useSelector((state) => state.user.user);

  // Gestion de la navigation locale
  const [currentPage, setCurrentPage] = useState("home");

  // Navigation hook
  const navigate = useNavigate();

  // Determine if Nav should be displayed
  const location = useLocation();
  const excludedRoutes = ["/explore", "/profile", "/message"];
  const showNav = !excludedRoutes.includes(location.pathname);

  // Redirect to /explore if user is connected
  useEffect(() => {
    if (user.length > 0) {
      navigate("/explore");
    }
  }, [user, navigate]);

  return (
    <div className="app h-screen min-h-[770px] md:min-h-[710px] bg-center bg-cover bg-no-repeat bg-[url('./assets/mountain.jpg')]">
      <div className={`${mode === true ? "light" : "dark"} bg-gradient h-full`}>
        {showNav && <Nav />}
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
          <Route path="/explore" element={<Explore />} />
          <Route path="/Profile" element={<Profile />} />*
          <Route path="/message" element={<Message />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;