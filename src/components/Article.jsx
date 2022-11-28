import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";

const Article = ({ article, articlePath }) => {
  const { date, title, content, more } = article;

  return (
    <div
      className={`w-full h-auto flex flex-col mb-4 ${
        articlePath
          ? "md:flex-row hover:bg-gray-300/20 md:hover:bg-inherit dark:hover:bg-zinc-800/40 dark:md:hover:bg-inherit justify-start items-start  transition ease-in-out duration-300 rounded-xl p-6"
          : "md:flex-col"
      } ${
        !articlePath &&
        "hover:bg-gray-300/20 dark:hover:bg-zinc-800/40   transition ease-in-out duration-300 p-6 rounded-2xl"
      }`}
    >
      {/* print date */}
      {date !== undefined && (
        <div
          className={` ${
            articlePath && "md:pt-6"
          } flex flex-row justify-start items-center mb-4`}
        >
          <div
            className={`w-[2px] h-[20px] bg-zinc-400/90 dark:bg-zinc-500/80 rounded-full mr-4 ${
              articlePath && "md:hidden"
            }`}
          />
          <p
            className={`${
              articlePath ? "w-full md:w-40" : "w-full"
            } font-roboto text-zinc-400/90 dark:text-zinc-300/40 text-base font-normal`}
          >
            {date}
          </p>
        </div>
      )}

      {/* print title, content and more */}
      <div
        className={`flex flex-col justify-center items-start  ${
          articlePath &&
          "md:hover:bg-gray-300/20 dark:md:hover:bg-zinc-800/40  md:cursor-pointer transition ease-in-out duration-300 md:p-6 rounded-2xl lg:max-w-[60%]"
        }`}
      >
        <h2 className='text-zinc-800/90 dark:text-zinc-50/90 font-semibold font-montserrat mb-4'>
          {title}
        </h2>
        <p className='text-zinc-900/90  dark:text-zinc-300/80 text-[16px] leading-[23px] font-jost mb-4 font-normal'>
          {content}
        </p>
        {more !== undefined && (
          <div className='flex justify-start items-center gap-[1px]'>
            <h2 className='tracking-tight font-roboto text-teal-500 dark:text-teal-500 font-medium'>
              {more}
            </h2>
            <BsThreeDots className='mt-2 fill-teal-500' />
          </div>
        )}
      </div>
    </div>
  );
};

export default Article;
