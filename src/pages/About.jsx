import React from "react";
import { about } from "../assets";
import { socialLinks } from "../data/db";

const About = () => {
  return (
    <div
      id='about'
      className='w-full h-auto mt-[46%] xs:mt-[32%] sm:mt-[28%] md:mt-[24%]  lg:mt-[18%] xl:mt-[14%]'
    >
      <div
        className={`w-[100%] h-auto grid gap-y-16 lg:gap-y-12 grid-cols-1 lg:grid-cols-2 lg:grid-rows-[auto_1fr] px-4 sm:px-10  xl:px-24 my-6 lg:gap-20 pt-20 sm:pt-10`}
      >
        <div className='lg:pl-20'>
          <div className='max-w-[320px] lg:max-w-none'>
            <img
              src={about}
              alt='about'
              className='w-[100%] h-[100%] object-cover rounded-2xl rotate-3'
            />
          </div>
        </div>
        <div className='lg:order-first lg:row-span-2'>
          <h1 className='mb-6 dark:text-zinc-50 text-stone-800/90 font-bold text-[28px] sm:text-[44px] font-poppins leading-[48px] sm:leading-[62px] tracking-tight'>
            I’m Joy Ram Das, Frontend Engineer on a Journey to Full-Stack Mastery 
          </h1>
          <div className='flex-1  flex flex-col justify-start items-center gap-10'>
            <p className='font-jost  sm:text-lg text-base tracking-tight text-zinc-800/90 dark:text-zinc-300/60'>
              I'm a BSc graduate in Computer Science and Engineering who discovered 
              my passion for frontend development during my academic journey. What started 
              as curiosity about how websites work evolved into a deep fascination with 
              creating beautiful, functional user interfaces that solve real-world problems.
            </p>
            <p className='font-jost text-lg tracking-tight text-zinc-800/90 dark:text-zinc-300/60'>
              With over a year of professional experience as a Frontend Software Engineer, 
              I've had the opportunity to work on diverse projects and contribute to real-life 
              full-stack applications. I'm constantly practicing programming in JavaScript, 
              solving algorithmic problems, and staying updated with the latest frontend technologies to deliver exceptional user experiences.
            </p>
            <p className='font-jost text-lg tracking-tight text-zinc-800/90 dark:text-zinc-300/60'>
              My frontend expertise spans HTML, CSS, JavaScript, Typescript, Bootstrap, Tailwind CSS, React.js, ShadCN, Next.js, React Hook Form, Redux, TanStack Query, and TanStack Table. I specialize in REST API integration and follow best practices for handling different data states like loading, error, and success scenarios. I'm passionate about writing clean, maintainable code that performs optimally across all devices.
            </p>
            <p className='font-jost text-lg tracking-tight text-zinc-800/90 dark:text-zinc-300/60'>
              Beyond frontend development, I've expanded my skills into backend technologies including Node.js, Express.js, MongoDB, JWT, NextAuth, Supabase, Firebase, Prisma ORM, Drizzle ORM, and both SQL and NoSQL databases like PostgreSQL and Mongoose. This full-stack knowledge allows me to understand the complete development lifecycle and build robust, scalable applications.
            </p>
          </div>
        </div>
        <div className='lg:pl-20'>
          <ul className='flex flex-col'>
            {socialLinks.map((socialLink, index) => (
              <li
                key={socialLink.id}
                className={`${
                  socialLinks.length - 1 === index ? "mb-0 pt-5" : "mb-5"
                }`}
              >
                <a
                  href={socialLink.link}
                  className='flex flex-row gap-6 dark:text-zinc-200/90 text-zinc-600/90 dark:hover:text-teal-500 hover:text-teal-500/80 font-poppins text-sm font-semibold max-w-max'
                  target='_blank'
                >
                  <socialLink.name size={22} />
                  <h2 className={``}>{socialLink.content}</h2>
                </a>
                <div
                  className={`${
                    socialLinks.length - 2 === index ? "block" : "hidden"
                  } w-full h-[.5px] bg-zinc-400/20 mt-10`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
