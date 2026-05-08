import React from "react";
import Image from "next/image";
import homeImg from "../../public/images/heroimg.jpg";
function Banner() {
  return (
    <div>
      <div className="relative w-full h-[700px] mt-6 overflow-hidden rounded-lg">
        <Image
          src={homeImg}
          alt="banner"
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Welcome to DigitalNext
          </h1>
          <p className="text-lg md:text-2xl text-white mb-6">
            Your Ultimate Guide to Navigating the Digital World
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
