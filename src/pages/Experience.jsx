import React from "react";
import { experiences } from "../data/db";
import { FiExternalLink } from "react-icons/fi";

const Experience = () => {
  return (
    <div
      id='experience'
      className='w-full h-auto mt-[46%] xs:mt-[32%] sm:mt-[28%] md:mt-[24%]  lg:mt-[18%] xl:mt-[14%] '
    >
      <div
        className={`w-[100%] h-auto  px-4 sm:px-10  xl:px-24 my-6  pt-20 sm:pt-10`}
      >
        <div className='w-full h-auto flex flex-col justify-start items-start mb-10'>
          <h1 className='mb-6 dark:text-zinc-50 text-stone-800/90 font-bold text-[28px] sm:text-[44px] font-poppins leading-[48px] sm:leading-[62px] tracking-tight sm:max-w-2xl'>
            Professional Experience & Project Contributions
          </h1>
          <p className='w-full md:max-w-2xl text-zinc-800 dark:text-zinc-300/70 font-poppins leading-[28px] mb-8'>
            Throughout my career, I've had the opportunity to work on diverse projects 
            spanning both frontend and backend development. Here's a detailed look at 
            my professional experience and the key projects I've contributed to at each company.
          </p>
        </div>
        <div className='w-full h-auto flex flex-col justify-start items-start gap-16'>
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className='w-full border border-zinc-200/50 dark:border-zinc-800/50 rounded-2xl p-6 sm:p-8 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm'
            >
              {/* Company Header */}
              <div className='flex flex-col sm:flex-row gap-4 sm:items-center mb-6'>
                <div className='w-16 h-16 rounded-xl overflow-hidden bg-white dark:bg-zinc-800 p-2'>
                  <img 
                    src={experience.img} 
                    alt={experience.company}
                    className='w-full h-full object-contain'
                  />
                </div>
                <div className='flex-1'>
                  <h2 className='text-2xl font-bold text-zinc-800 dark:text-zinc-50 font-poppins mb-1'>
                    {experience.company}
                  </h2>
                  <p className='text-lg font-semibold text-zinc-700 dark:text-zinc-300 font-poppins mb-1'>
                    {experience.position}
                  </p>
                  <p className='text-sm text-zinc-600 dark:text-zinc-400 font-poppins'>
                    {experience.period}
                  </p>
                </div>
              </div>

              {/* Projects */}
              <div className='space-y-6'>
                {experience.projects.map((project) => (
                  <div key={project.id} className='border-t border-zinc-200/50 dark:border-zinc-700/50 pt-6'>
                    <div className='flex flex-col lg:flex-row gap-6'>
                      <div className='lg:w-1/3'>
                        <h3 className='text-xl font-bold text-zinc-800 dark:text-zinc-50 font-poppins mb-2'>
                          {project.name}
                        </h3>
                        <p className='text-zinc-700 dark:text-zinc-300 font-poppins text-sm leading-relaxed mb-4'>
                          {project.description}
                        </p>
                      </div>
                      
                      <div className='lg:w-2/3 space-y-4'>
                        {/* Technologies */}
                        <div>
                          <h4 className='text-sm font-semibold text-zinc-800 dark:text-zinc-50 font-poppins mb-2 uppercase tracking-wide'>
                            Technologies Used
                          </h4>
                          <div className='flex flex-wrap gap-2'>
                            {project.technologies.map((tech, techIndex) => (
                              <span 
                                key={techIndex}
                                className='px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium rounded-full font-poppins'
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Contributions */}
                        <div>
                          <h4 className='text-sm font-semibold text-zinc-800 dark:text-zinc-50 font-poppins mb-2 uppercase tracking-wide'>
                            Key Contributions
                          </h4>
                          <ul className='space-y-2'>
                            {project.contributions.map((contribution, contribIndex) => (
                              <li 
                                key={contribIndex}
                                className='flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300 font-poppins'
                              >
                                <span className='w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0'></span>
                                <span className='leading-relaxed'>{contribution}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
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

export default Experience;
