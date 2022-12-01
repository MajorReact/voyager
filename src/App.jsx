import React from "react";
import "./styles/globals.css";
import About from "./pages/About";
import Feature from "./pages/Feature";
import Feature2 from "./pages/Feature2";
import Stats from "./pages/Stats";
import Footer from "./pages/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Feature />
      <Stats />
      <Feature2 />
      <Footer />
    </>
  );
}

export default App;
