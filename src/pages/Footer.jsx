import React from "react";
import { ReactComponent as FacebookSVG } from "../assets/svg/facebook.svg";
import { ReactComponent as TwitterSVG } from "../assets/svg/twitter.svg";
import { ReactComponent as GithubSVG } from "../assets/svg/github.svg";
import { ReactComponent as LinkedinSVG } from "../assets/svg/linkedin.svg";
import { ReactComponent as AmazonSVG } from "../assets/svg/amazon.svg";

import countapi from "countapi-js";

const Footer = () => {
  countapi.hit("voyagertrust.netlify.app", "visits").then((result) => {
    document.getElementById("updateViews").innerText = result.value;
  });

  return (
    <div className="bg-black dark:bg-gray-800 pt-4 pb-8 xl:pt-8">
      <div className="max-w-screen-lg px-4 mx-auto text-gray-400 xl:max-w-screen-xl sm:px-6 md:px-8 dark:text-gray-300">
        <ul className="flex flex-wrap justify-center pb-8 text-lg font-light">
          <li className="w-1/2 md:w-1/3 lg:w-1/3">
            <div className="text-center">
              <h2 className="text-amber-500 dark:text-gray-200 text-md uppercase mb-4">
                Support
              </h2>
              <ul>
                <li className="mb-4 transition-colors duration-200 hover:text-blue-500 dark:hover:text-white">
                  <a href="#">Host</a>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-blue-500 dark:hover:text-white">
                  <a href="#">Pricing</a>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-blue-500 dark:hover:text-white">
                  <a href="#">Plugins</a>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-blue-500 dark:hover:text-white">
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="w-1/2 md:w-1/3 lg:w-1/3">
            <div className="text-center">
              <h2 className="text-amber-500 dark:text-gray-200 text-md uppercase mb-4">
                Get Started
              </h2>
              <ul>
                <li className="mb-4 transition-colors duration-200 hover:text-blue-500 dark:hover:text-white">
                  <a href="#">Sign Up</a>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-blue-500 dark:hover:text-white">
                  <a href="#">Login</a>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-blue-500 dark:hover:text-white">
                  <a href="#">Mission</a>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-blue-500 dark:hover:text-white">
                  <a href="#">About Us</a>
                </li>
              </ul>
            </div>
          </li>

          <li className="w-1/2 md:w-1/3 lg:w-1/3">
            <div className="text-center">
              <h2 className="text-amber-500 dark:text-gray-200 text-md uppercase mb-4">
                Contacts
              </h2>
              <ul>
                <li className="mb-4 transition-colors duration-200 hover:text-blue-500 dark:hover:text-white">
                  <a href="#">Mail</a>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-blue-500 dark:hover:text-white">
                  <a href="#">Facebook</a>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-blue-500 dark:hover:text-white">
                  <a href="#">Twitter</a>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-blue-500 dark:hover:text-white">
                  <a href="#">LinkedIn</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div className="pt-8 flex border-t border-gray-200 max-w-xs mx-auto items-center justify-between">
          <a href="#">
            <FacebookSVG />
          </a>
          <a href="#">
            <TwitterSVG />
          </a>
          <a href="#">
            <GithubSVG />
          </a>
          <a href="#">
            <LinkedinSVG />
          </a>
          <a href="#">
            <AmazonSVG />
          </a>
        </div>
        <div className="text-center pt-10 sm:pt-12 font-light flex items-center justify-center">
          @Voyagerdotcom 2022. All rights Reserved!
        </div>
        <div className="text-center pt-10 sm:pt-12 font-light flex items-center justify-center">
          <p>Visitors:&nbsp;</p>
          <div id="updateViews"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
