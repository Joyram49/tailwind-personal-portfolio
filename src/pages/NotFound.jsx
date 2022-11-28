import React from "react";
import { BiError } from "react-icons/bi";

const NotFound = () => {
  return (
    <div className='w-full h-[calc(100vh-375px)] mt-[50%] xs:mt-[32%] sm:mt-[28%] md:mt-[24%]  lg:mt-[18%] xl:mt-[14%] '>
      <div className='w-full h-full  px-4 sm:px-10  xl:px-24 py-10 flex flex-col justify-center items-center '>
        <h2 className=' text-2xl text-zinc-800/90 dark:text-zinc-50/90 font-medium font-montserrat mb-6 '>
          The page you requested is not found!!!!
        </h2>
        <BiError className='text-zinc-800/90 dark:text-zinc-50/90 text-[56px]' />
      </div>
    </div>
  );
};

export default NotFound;
