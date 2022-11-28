import React from "react";
import Article from "../components/Article";
import { speaking } from "../data/db";

const Speaking = () => {
  return (
    <div
      id='speaking'
      className='w-full h-auto mt-[46%] xs:mt-[32%] sm:mt-[28%] md:mt-[24%]  lg:mt-[18%] xl:mt-[14%] '
    >
      <div
        className={`w-[100%] h-auto  px-4 sm:px-10  xl:px-24 my-6  pt-20 sm:pt-10`}
      >
        <div className='w-full h-auto flex flex-col justify-start items-start mb-10'>
          <h1 className='mb-6 dark:text-zinc-50 text-stone-800/90 font-bold text-[28px] sm:text-[44px] font-poppins leading-[48px] sm:leading-[62px] tracking-tight sm:max-w-2xl'>
            I’ve spoken at events all around the world and been interviewed for
            many podcasts.
          </h1>
          <p className='w-full md:max-w-2xl text-zinc-800 dark:text-zinc-300/70 font-poppins leading-[28px] mb-8'>
            One of my favorite ways to share my ideas is live on stage, where
            there’s so much more communication bandwidth than there is in
            writing, and I love podcast interviews because they give me the
            opportunity to answer questions instead of just present my opinions.
          </p>
        </div>
        <div className='w-full h-auto flex flex-col justify-start items-start gap-20'>
          {speaking.map((speak, index) => (
            <div
              key={speak.id}
              className='md:border-l-[.5px] md:border-zinc-400/10 md:pl-6 flex-1 flex flex-col md:flex-row gap-4'
            >
              <h1 className='md:pt-6 w-full md:w-64 text-zinc-800/90 dark:text-zinc-50/90 font-semibold font-montserrat'>
                {speak.type}
              </h1>
              <div>
                {speak.topics.map((article, index) => (
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

export default Speaking;
