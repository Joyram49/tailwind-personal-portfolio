import React, { useState } from "react";
import Hero from "../components/Hero";
import HeroImg from "../components/HeroImg";
import Article from "../components/Article";
import SignUp from "../components/SignUp";
import Work from "../components/Work";
import { articles } from "../data/db";
import { works } from "../data/db";
import { BiBriefcase } from "react-icons/bi";
import { BsArrowDownShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import { resume } from "../assets";

const Home = () => {
  const [over, setOver] = useState(false);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Joy_Ram_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      id='home'
      className='w-full h-auto mt-[46%] xs:mt-[32%] sm:mt-[28%] md:mt-[24%]  lg:mt-[18%] xl:mt-[14%] '
    >
      <Hero />
      <HeroImg />
      <div
        className={`w-[100%] h-auto flex flex-col lg:flex-row justify-center items-start px-4 sm:px-10  xl:px-24 my-6 gap-20`}
      >
        {/* Home articles.... */}
        <div className='w-full h-auto flex flex-col gap-10'>
          {articles.map((article, index) => {
            let temp = article.title.split(" ").splice(0, 5);
            let tempLink = temp.join("-");
            return (
              <div key={article.id}>
                <Link to={`articles/${tempLink}`} state={article}>
                  <Article article={article} />
                </Link>
              </div>
            );
          })}
        </div>
        <div className='w-full h-auto flex flex-col gap-10 justify-start items-start mt-10'>
          <SignUp />

          {/* Work Experience */}
          <div className='w-full flex flex-col justify-start items-start rounded-[10px] ring-[1px] ring-zinc-400/10 shadow-sm dark:ring-zinc-800/90 p-6'>
            <div className='flex flex-row justify-start items-center gap-4 mb-4'>
              <BiBriefcase
                size={22}
                className='dark:fill-zinc-500/60 fill-zinc-700/70'
              />
              <h2 className='text-zinc-800/90 dark:text-zinc-50/90 font-semibold font-montserrat tracking-tight'>
                Work
              </h2>
            </div>
            <div className='w-full h-auto flex flex-col gap-4 mt-4'>
              {works.map((work, index) => (
                <Work key={work.id} work={work} />
              ))}
            </div>
            <div
              type='button'
              className={`w-full h-auto mt-6  ${
                over
                  ? "dark:bg-zinc-700/50 bg-zinc-200"
                  : "dark:bg-zinc-800/60 bg-zinc-200/40"
              } rounded-[6px] cursor-pointer flex flex-row justify-center items-center py-2 transition-all duration-300 ease-linear`}
              onMouseOver={() => setOver(true)}
              onMouseOut={() => setOver(false)}
              onClick={handleDownloadCV}
            >
              <p
                className={`${
                  over ? "dark:text-zinc-50" : "dark:text-zinc-50/60"
                }  font-medium font-poppins text-sm mr-2 transition-all duration-300 ease-linear`}
              >
                DownLoad CV
              </p>
              <BsArrowDownShort
                size={20}
                className={`${
                  over ? "dark:text-zinc-50" : "dark:text-zinc-50/60"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
