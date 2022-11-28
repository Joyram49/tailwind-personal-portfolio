import React from "react";
import { projects } from "../data/db";
import Card from "../components/Card";

const Projects = () => {
  return (
    <div
      id='uses'
      className='w-full h-auto mt-[46%] xs:mt-[32%] sm:mt-[28%] md:mt-[24%]  lg:mt-[18%] xl:mt-[14%]'
    >
      <div
        className={`w-[100%] h-auto  px-4 sm:px-10  xl:px-24 my-6  pt-20 sm:pt-10`}
      >
        <div className='w-full h-auto flex flex-col justify-start items-start mb-10'>
          <h1 className='mb-6 dark:text-zinc-50 text-stone-800/90 font-bold text-[28px] sm:text-[44px] font-poppins leading-[48px] sm:leading-[62px] tracking-tight sm:max-w-2xl'>
            Things I’ve made trying to put my dent in the universe.
          </h1>
          <p className='w-full md:max-w-2xl text-zinc-800 dark:text-zinc-300/70 font-poppins leading-[28px] mb-8'>
            I’ve worked on tons of little projects over the years but these are
            the ones that I’m most proud of. Many of them are open-source, so if
            you see something that piques your interest, check out the code and
            contribute if you have ideas for how it can be improved.
          </p>
        </div>
        {/* want to solve with grid */}
        <div className='w-full h-auto grid auto-rows auto-fit-grid-items gap-4'>
          {projects.map((project, index) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
