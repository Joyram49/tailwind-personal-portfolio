import React from "react";
import { about } from "../assets";
import { socialLinks } from "../data/db";

const About = () => {
  return (
    <div
      id='about'
      className='w-full h-auto mt-[46%] xs:mt-[32%] sm:mt-[28%] md:mt-[24%]  lg:mt-[18%] xl:mt-[14%]'
    >
      <div
        className={`w-[100%] h-auto grid gap-y-16 lg:gap-y-12 grid-cols-1 lg:grid-cols-2 lg:grid-rows-[auto_1fr] px-4 sm:px-10  xl:px-24 my-6 lg:gap-20 pt-20 sm:pt-10`}
      >
        <div className='lg:pl-20'>
          <div className='max-w-[320px] lg:max-w-none'>
            <img
              src={about}
              alt='about'
              className='w-[100%] h-[100%] object-cover rounded-2xl rotate-3'
            />
          </div>
        </div>
        <div className='lg:order-first lg:row-span-2'>
          <h1 className='mb-6 dark:text-zinc-50 text-stone-800/90 font-bold text-[28px] sm:text-[44px] font-poppins leading-[48px] sm:leading-[62px] tracking-tight'>
            I’m Spencer Sharp. I live in New York City, where I design the
            future.
          </h1>
          <div className='flex-1  flex flex-col justify-start items-center gap-10'>
            <p className='font-jost  sm:text-lg text-base tracking-tight text-zinc-800/90 dark:text-zinc-300/60'>
              I’ve loved making things for as long as I can remember, and wrote
              my first program when I was 6 years old, just two weeks after my
              mom brought home the brand new Macintosh LC 550 that I taught
              myself to type on.
            </p>
            <p className='font-jost text-lg tracking-tight text-zinc-800/90 dark:text-zinc-300/60'>
              The only thing I loved more than computers as a kid was space.
              When I was 8, I climbed the 40-foot oak tree at the back of our
              yard while wearing my older sister’s motorcycle helmet, counted
              down from three, and jumped — hoping the tree was tall enough that
              with just a bit of momentum I’d be able to get to orbit.
            </p>
            <p className='font-jost text-lg tracking-tight text-zinc-800/90 dark:text-zinc-300/60'>
              I spent the next few summers indoors working on a rocket design,
              while I recovered from the multiple surgeries it took to fix my
              badly broken legs. It took nine iterations, but when I was 15 I
              sent my dad’s Blackberry into orbit and was able to transmit a
              photo back down to our family computer from space.
            </p>
            <p className='font-jost text-lg tracking-tight text-zinc-800/90 dark:text-zinc-300/60'>
              Today, I’m the founder of Planetaria, where we’re working on
              civilian space suits and manned shuttle kits you can assemble at
              home so that the next generation of kids really can make it to
              orbit — from the comfort of their own backyards.
            </p>
          </div>
        </div>
        <div className='lg:pl-20'>
          <ul className='flex flex-col'>
            {socialLinks.map((socialLink, index) => (
              <li
                key={socialLink.id}
                className={`${
                  socialLinks.length - 1 === index ? "mb-0 pt-5" : "mb-5"
                }`}
              >
                <a
                  href={socialLink.link}
                  className='flex flex-row gap-6 dark:text-zinc-200/90 text-zinc-600/90 dark:hover:text-teal-500 hover:text-teal-500/80 font-poppins text-sm font-semibold max-w-max'
                  target='_blank'
                >
                  <socialLink.name size={22} />
                  <h2 className={``}>{socialLink.content}</h2>
                </a>
                <div
                  className={`${
                    socialLinks.length - 2 === index ? "block" : "hidden"
                  } w-full h-[.5px] bg-zinc-400/20 mt-10`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
