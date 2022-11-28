import React from "react";

const Card = ({ project }) => {
  const { img, title, desc, gitLink, gitContent, webLink, webContent } =
    project;

  return (
    <div className='flex flex-col justify-start items-start p-6 hover:bg-gray-300/20 dark:hover:bg-zinc-800/40 transition ease-in-out duration-300 rounded-2xl ring-1 ring-zinc-800/10 dark:ring-zinc-400/10 shadow-sm'>
      <div className='flex items-center justify-center w-14 h-14 p-2 dark:bg-zinc-600/40 bg-white ring-1 ring-zinc-400/10 dark:ring-zinc-500/50 rounded-full shadow-sm mb-6'>
        <img
          src={img}
          alt='projectImg'
          className='w-full h-full object-cover rounded-full'
        />
      </div>
      <h2 className='text-zinc-800/90 dark:text-zinc-50/90 font-semibold font-montserrat mb-2'>
        {title}
      </h2>
      <p className='text-zinc-900/90  dark:text-zinc-300/80 text-[16px] leading-[23px] font-jost mb-6 font-normal tracking-tight'>
        {desc}. lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem
      </p>
      <div className='dark:text-zinc-200/90 text-zinc-600/90 dark:hover:text-teal-500 hover:text-teal-500/80 font-poppins text-sm font-semibold max-w-max mb-2'>
        <a
          href={gitLink}
          target='_blank'
          className='flex flex-row items-center gap-2 lg:gap-4'
        >
          <project.gitLogo size={22} />
          <p>{gitContent}</p>
        </a>
      </div>
      <div className=' dark:text-zinc-200/90 text-zinc-600/90 dark:hover:text-teal-500 hover:text-teal-500/80 font-poppins text-sm font-semibold max-w-max '>
        <a
          href={webLink}
          target='_blank'
          className='flex flex-row items-center gap-2 lg:gap-4'
        >
          <project.webLogo size={22} />
          <p>{webContent}</p>
        </a>
      </div>
    </div>
  );
};

export default Card;
