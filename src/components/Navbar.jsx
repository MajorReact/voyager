import React from "react";
//import { IconName } from "react-icons/ai";
import Logo from "../assets/lorum-ipsum-logo.jpg";

const Navbar = () => {
  return (
    <div className="w-full h-20 items-center z-[100] left-0 top-0 absolute m-5 pt-5">
      <div className="flex items-center justify-between w-full h-20 z-[100] p-5">
        <a>
          <img src={Logo} alt="HappenEvents-Logo" height={100} width={100} />
        </a>
        <div>
          <ul>
            <li>
              <a href="/"></a> Home
            </li>
            <li>
              <a href="/"></a>Mission
            </li>
            <li>
              <a href="/"></a>Meet
            </li>
            <li>
              <a href="/"></a>Contact
            </li>
          </ul>
        </div>
        <div>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
