import React from "react";
import { navLinks } from "../data/db";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=' w-full h-[calc(100vh/8)] flex flex-col md:flex-row  md:items-center  md:justify-between gap-4 md:gap-0 justify-center items-center border-t-[.5px] border-zinc-400/10 mt-6 sm:mt-20  px-4 sm:px-10  xl:px-24 shadow-sm'>
      <ul className='flex flex-row'>
        {navLinks.map((navLink, index) => (
          <li
            key={navLink.id}
            className={`text-zinc-800 dark:text-zinc-200 font-roboto font-semibold capitalize text-sm hover:text-teal-500 dark:hover:text-teal-400 ${
              navLink.name === "articles" || navLinks.length - 1 === index
                ? "mr-0"
                : "mr-6"
            }`}
          >
            {navLink.name !== "articles" && (
              <Link to={`${navLink.name}`}>{navLink.name}</Link>
            )}
          </li>
        ))}
      </ul>
      <p className='text-sm font-sans text-zinc-500/90 dark:text-zinc-400/60 font-medium'>
        &copy; 2022 Spencer Sharp. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
