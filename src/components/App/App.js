import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
import Navbar from "../Navbar/navbar";
// import PortfolioContainer from "../portfolioContainer/portfolioContainer";
import Footer from "../Footer/footer";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";


import Home from "../Home/home";

import About from "../About/about-me";
import Projects from "../Projects/projects";
import Resume from "../Resume/resume";
import Contact from "../Contact/contact"
import Preloader from "../preloader";
import {
  HashRouter,
  Route,
  Routes,
  Link
} from "react-router-dom";
import ScrollToTop from "../scroll";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <HashRouter>
      <Preloader load={load} />
      <div className="home" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/About" element={<About />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<Link to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;