import React from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { socialLinks } from "../data/db";

const Hero = () => {
  return (
    <div
      className={`w-full h-full flex flex-col justify-center items-start px-4 sm:px-10  xl:px-24 py-6`}
    >
      <h2 className='w-full lg:max-w-[65%] font-poppins text-black dark:text-white text-[36px] sm:text-[46px] font-semibold  leading-[48px] sm:leading-[56px]'>
        Software designer, founder, and amateur astronaut.
      </h2>
      <p className='w-full md:max-w-[65%] text-zinc-800 dark:text-zinc-300/70 my-6 font-poppins leading-[28px]'>
        I’m Spencer, a software designer and entrepreneur based in New York
        City. I’m the founder and CEO of Planetaria, where we develop
        technologies that empower regular people to explore space on their own
        terms.
      </p>
      <ul className='flex flex-row items-center'>
        {socialLinks.map((socialLink, index) => (
          <li
            key={socialLink.id}
            className={`${socialLinks.length - 2 === index ? "mr-0" : "mr-6"}`}
          >
            {socialLinks.length - 1 !== index && (
              <a href={socialLink.link} target='_blank'>
                <socialLink.name
                  className=' fill-zinc-800/60 hover:fill-zinc-800/90 dark:fill-zinc-300/70 dark:hover:fill-zinc-100'
                  size={22}
                />
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hero;
