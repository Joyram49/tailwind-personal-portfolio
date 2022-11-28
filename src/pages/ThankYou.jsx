import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className='w-full h-[calc(100vh-375px)] mt-[50%] xs:mt-[32%] sm:mt-[28%] md:mt-[24%]  lg:mt-[18%] xl:mt-[14%] '>
      <div className='w-full h-full  px-4 sm:px-10  xl:px-24 py-10 '>
        <h2 className='font-poppins text-black dark:text-white text-[36px] sm:text-[46px] font-semibold  leading-[48px] sm:leading-[56px] mb-6'>
          Thanks for subscribing.
        </h2>
        <p
          className='w-full md:max-w-2xl text-zinc-800 dark:text-zinc-300/70 font-normal font-roboto leading-[28px] mb-8 tracking-tight
          '
        >
          I’ll send you an email any time I publish a new blog post, release a
          new project, or have anything interesting to share that I think you’d
          want to hear about. You can unsubscribe at any time, no hard feelings.
        </p>
        <Link
          to='/'
          className='dark:bg-gradient-to-r ring-1 ring-zinc-800/10 hover:ring-zinc-800/30 shadow-sm text-sm dark:from-zinc-500 dark:via-zinc-600 dark:to-zinc-800 dark:hover:bg-gradient-to-l px-3 py-2 rounded dark:text-slate-50/90 transition-all duration-1000 ease-linear'
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
