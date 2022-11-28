import React from "react";
import { heroImgs } from "../data/db";

const HeroImg = () => {
  return (
    <div className='my-16 sm:my-20 w-full h-auto'>
      <div className={`flex justify-center items-start gap-6 sm:gap-8`}>
        {heroImgs.map((heroImg, index) => (
          <div
            key={heroImg.id}
            className={`w-44 sm:w-72 flex-none aspect-[9/10] `}
          >
            <img
              src={heroImg.name}
              alt='HeroImg'
              className={`w-full h-full object-cover rounded-xl sm:rounded-2xl ${
                index % 2 === 0 ? "rotate-2" : "-rotate-2"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroImg;
