import React from "react";
import OurCoGif from "../assets/an-elegant-mind.gif";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5] pt-4">
            Voyager
          </p>
          <h2 className="py-4">Campaigns made easy!</h2>
          <p className="py-2 text-gray-600">
            Fast track your campaigns with our fully automated crowd control
            system. Worry no more about the massive influx of unbanked clients.
            Our control system is fully automated. Confirm and validate clients
            at any point in time without having to be physically present. Relax!
            Let our system work for you.
          </p>
          <p className="py-2 text-gray-600">
            Save time, Ease your stress, Monitor your campaigns in real-time.
          </p>
          <div className="pt-4">
            <a href="/#login" className="">
              <button
                className="bg-sky-500 text-white active:bg-sky-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Join the Waitlist
              </button>
            </a>
          </div>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img src={OurCoGif} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
