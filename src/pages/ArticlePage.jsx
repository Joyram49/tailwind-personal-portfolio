import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";
import { planetariatitle } from "../assets";
import SermoneFata from "../components/SermoneFata";

const ArticlePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handlePrevButton = () => {
    navigate(-1);
  };
  const { content, date, id, title } = location.state;
  return (
    <div className='w-full h-auto mt-[50%] xs:mt-[32%] sm:mt-[28%] md:mt-[24%]  lg:mt-[18%] xl:mt-[14%] '>
      <div className='w-full h-full flex flex-col md:flex-row justify-start items-start px-4 sm:px-10  xl:px-24 py-6 gap-10'>
        <div
          className='w-10 h-10 dark:bg-zinc-600/30 bg-white ring-1 ring-zinc-400/10 hover:ring-zinc-600/10 transition-all dark:ring-zinc-500/40 dark:hover:ring-zinc-500/60 shadow-sm  flex justify-center items-center rounded-full md:ml-[4px] lg:-ml-[60px] xl:ml-[6px] cursor-pointer text-zinc-800/60 hover:text-zinc-900/80 dark:text-zinc-300/60 dark:hover:text-zinc-300'
          onClick={handlePrevButton}
        >
          <BsArrowLeftShort size={22} />
        </div>
        <div className='flex-1 flex flex-col justify-start items-start md:ml-32 md:mt-2'>
          {/* date */}
          <div className={`flex flex-row justify-start items-center mb-4`}>
            <div
              className={`w-[2px] h-[20px] bg-zinc-400/90 dark:bg-zinc-500/80 rounded-full mr-4 `}
            />
            <p
              className={` font-roboto text-zinc-400/90 dark:text-zinc-300/40 text-base font-normal`}
            >
              {date}
            </p>
          </div>
          {/* title */}
          <h2 className='font-poppins text-black dark:text-white text-[36px] sm:text-[46px] font-semibold  leading-[48px] sm:leading-[56px] mb-6'>
            {title}
          </h2>
          {/* content */}
          <p
            className='w-full md:max-w-2xl text-zinc-800 dark:text-zinc-300/70 font-light font-roboto leading-[28px] mb-8 tracking-tight
          '
          >
            {content}
          </p>
          {/* title img */}
          <div className='w-full md:max-w-2xl h-auto rounded-2xl mb-10'>
            <img
              src={planetariatitle}
              alt='titleImg'
              className='rounded-2xl w-full h-full object-cover'
            />
          </div>
          <p className='w-full md:max-w-2xl text-zinc-800 dark:text-zinc-300/70 font-roboto font-light leading-[28px] mb-8'>
            I knew that to get it right I was going to have to replicate the
            viewing conditions of someone from the future, so I grabbed my space
            helmet from the closet, created a new Figma document, and got to
            work.
          </p>
          <SermoneFata />
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
