import React from "react";
import "../style/main.css";

function Header() {
  return (
    <div className="bg-gray-50 z-30 md:bg-opacity-90 transition duration-300 ease-in-out bg-white blur shadow-lg">
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
            <a
              href="#"
              className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
            >
              Sign in
            </a>
            <a
              href="#"
              className="rounded-lg text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3 flex items-center"
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
