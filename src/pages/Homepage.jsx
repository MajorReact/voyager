import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";

const Homepage = () => {
  //const [darkToggle, setDarkToggle] = React.useState(false);

  return (
    <div>
      <Navbar />
      <About />
      {/* className={`h-screen w-full flex items-center justify-center bg-gray-300 flex-col ${
        darkToggle && "dark"
      }`} */}
      {/* <label className="toggleDarkBtn"> */}
      {/* <input type="checkbox" onClick={() => setDarkToggle(!darkToggle)} /> */}
      {/* <span className="slideBtnTg round"></span> */}
      {/* </label> */}
    </div>
  );
};

export default Homepage;
