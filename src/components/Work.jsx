import React from "react";

const Work = ({ work }) => {
  const { img, title, position, period } = work;
  return (
    <div className='w-full flex flex-row justify-between items-center'>
      <div className='flex-1 flex flex-row gap-6 items-center'>
        <div className='w-10 h-10 dark:bg-zinc-600/40 bg-white rounded-full flex justify-center items-center ring-1 ring-zinc-400/10 dark:ring-zinc-500/50 p-[6px] shadow-sm'>
          <img
            src={img}
            alt='work-img'
            className='w-full h-full object-cover rounded-full'
          />
        </div>
        <div>
          <h2 className='text-zinc-900 dark:text-zinc-50/90 font-semibold font-montserrat tracking-tight'>
            {title}
          </h2>
          <p className='text-sm font-sans text-zinc-500/90 dark:text-zinc-400/90'>
            {position}
          </p>
        </div>
      </div>
      <div>
        <p className='text-sm font-sans text-zinc-500/90 dark:text-zinc-400/60'>
          {period}
        </p>
      </div>
    </div>
  );
};

export default Work;
