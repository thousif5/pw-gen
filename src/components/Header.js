import React, { useState, useEffect } from "react";
import "../style/main.css";

function Header() {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <div
      className={`fixed w-full bg-gray-50 z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-white blur shadow-lg"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="p-4 flex justify-between items-center">
          <div className="logo-images flex">
            <img
              src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/asterisk-32.png"
              alt="logo"
            ></img>
            <img
              src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/asterisk-32.png"
              alt="logo"
            ></img>
            <img
              src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/asterisk-32.png"
              alt="logo"
            ></img>
          </div>
          <div className="menu flex px-2">
            {/* eslint-disable-next-line*/}
            <a
              href="#"
              className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
            >
              Sign in
            </a>
            {/* eslint-disable-next-line*/}
            <a
              href="#"
              className="rounded-lg my-4 text-gray-200 bg-gray-900 hover:bg-gray-800 flex items-center"
            >
              <span className="p-2">Sign up</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
