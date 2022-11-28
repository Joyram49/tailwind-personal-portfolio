import React from "react";
import { uses } from "../data/db";
import Article from "../components/Article";

const Uses = () => {
  return (
    <div
      id='uses'
      className='w-full h-auto mt-[46%] xs:mt-[32%] sm:mt-[28%] md:mt-[24%]  lg:mt-[18%] xl:mt-[14%] '
    >
      <div
        className={`w-[100%] h-auto  px-4 sm:px-10  xl:px-24 my-6  pt-20 sm:pt-10`}
      >
        <div className='w-full h-auto flex flex-col justify-start items-start mb-10'>
          <h1 className='mb-6 dark:text-zinc-50 text-stone-800/90 font-bold text-[28px] sm:text-[44px] font-poppins leading-[48px] sm:leading-[62px] tracking-tight sm:max-w-2xl'>
            Software I use, gadgets I love, and other things I recommend.
          </h1>
          <p className='w-full md:max-w-2xl text-zinc-800 dark:text-zinc-300/70 font-poppins leading-[28px] mb-8'>
            I get asked a lot about the things I use to build software, stay
            productive, or buy to fool myself into thinking I’m being productive
            when I’m really just procrastinating. Here’s a big list of all of my
            favorite stuff.
          </p>
        </div>
        <div className='w-full h-auto flex flex-col justify-start items-start gap-20'>
          {uses.map((use, index) => (
            <div
              key={use.id}
              className='md:border-l-[.5px] md:border-zinc-400/10 md:pl-6 flex-1 flex flex-col md:flex-row gap-4'
            >
              <h1 className='md:pt-6 w-[300px] text-zinc-800/90 dark:text-zinc-50/90 font-semibold font-montserrat'>
                {use.type}
              </h1>
              <div className='flex-1'>
                {use.topics.map((article, index) => (
                  <div key={article.id}>
                    <Article article={article} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Uses;
