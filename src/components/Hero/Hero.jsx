import React from "react";
import heroImage from "../Assets/images/hero-2.jpg";
const Hero = () => {
  return (
    <div className="container py-4 mt-20 max-[992px]:mt-28">
      <div className="relative max-h-[500px]">
        {/* Overlay */}
        <div className="absolute flex flex-col justify-center px-4 bg-black/40 h-full w-full max-h-[500px]">
          <h1 className="capitalize text-gray-200 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            the
            <span className="text-orange-600 ml-2">best</span>
          </h1>
          <h1 className="capitalize text-gray-200 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-orange-600 mr-2">foods</span>
            delivered
          </h1>
        </div>
        {/* Image */}
        <img
          src={heroImage}
          alt="hero"
          className="max-h-[500px] w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
