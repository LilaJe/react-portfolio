import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Portfolio from "./components/Portfolio";
import Contact from "./components/contact";
import Error from "./components/error";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Error") {
      return <Error />;
    }
    if (currentPage === "Navbar") {
      return <Navbar />;
    }
    if (currentPage === "Outlet") {
      return <Outlet />;
    }
    if (currentPage === "App") {
      return <App />;
    }
  };

  return (
    <div>
      {Navbar}
      <Navbar setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Outlet />
    </div>
  );
}

export default App.jsx;
