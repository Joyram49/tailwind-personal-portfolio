import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/thank-you");
  };
  return (
    <div className='w-full flex flex-col justify-start items-start rounded-[10px] ring-[1px] ring-zinc-400/10 shadow-sm dark:ring-zinc-800/90 p-6'>
      <div className='flex flex-row justify-start items-center gap-4 mb-4'>
        <FaEnvelope
          size={22}
          className='dark:fill-zinc-500/60 fill-zinc-700/70'
        />
        <h2 className='text-zinc-800/90 dark:text-zinc-50/90 font-semibold font-montserrat tracking-tight'>
          Stay up to date
        </h2>
      </div>
      <p className='text-zinc-900/90  dark:text-zinc-300/80 text-[16px] leading-[26px] font-jost mb-4 font-normal'>
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <form
        className='w-full flex flex-row flex-wrap justify-start items-center gap-4'
        onSubmit={handleSubmit}
      >
        <input
          type='email'
          placeholder='Email Address'
          className='flex-1 dark:bg-zinc-800/40 ring-[1px] ring-zinc-800/10 dark:ring-zinc-700/60 py-2 px-3 focus:ring-1 focus:ring-teal-600 dark:focus:ring-teal-400 outline-none focus:outline-[6px] focus:outline-teal-500/10 text-sm caret-zinc-800 dark:caret-zinc-50 font-poppins text-zinc-600 dark:text-zinc-50 shadow shadow-gray-200 dark:shadow-zinc-800/90 rounded-[4px] outline-offset-0'
          required
        />
        <button
          type='submit'
          className='bg-zinc-800 hover:bg-zinc-800/90 dark:bg-zinc-600/60 dark:hover:bg-zinc-600 transition duration-300 ease-linear text-slate-50 dark:text-slate-200 px-4 py-2 rounded-lg font-medium font-montserrat'
        >
          Join
        </button>
      </form>
    </div>
  );
};

export default SignUp;
