import React, { useState } from "react";
import Nav from "../components/Nav/Nav";
import Form from "../components/Form/Form";
import Welcome from "../components/Welcome/Welcome";
import Conex from "../components/Conex/Conex";
import { useSelector } from "react-redux";

function App() {
  // Redux
  const mode = useSelector((state) => state.mode.mode);
  const user = useSelector((state) => state.user.user);

  // Local state to handle navigation
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="app h-screen min-h-[770px] md:min-h-[710px] bg-center bg-cover bg-no-repeat bg-[url('./assets/mountain.jpg')]">
      <div className={`${mode === true ? "light" : "dark"} bg-gradient h-full`}>
        <Nav />
        {currentPage === "home" ? (
          user.length === 0 ? (
            <Form onNavigate={setCurrentPage} />
          ) : (
            <Welcome />
          )
        ) : (
          <Conex onNavigate={setCurrentPage} />
        )}
      </div>
    </div>
  );
}

export default App;
