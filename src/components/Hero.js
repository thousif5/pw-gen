import React from "react";
import PasswordGenerator from "./PasswordGenerator";

function Hero() {
  return (
    <section id="home" className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Genarate the safest
            </h1>
            <h2
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 bg-clip-text text-red-600"
              data-aos="zoom-y-out"
            >
              Password
            </h2>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-indigo-900 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              ></p>
            </div>
          </div>
          <PasswordGenerator />
        </div>
      </div>
    </section>
  );
}

export default Hero;
