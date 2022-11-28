import React, { useState, useEffect, useRef } from "react";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { RiArrowDropDownFill, RiCloseLine } from "react-icons/ri";

import { me } from "../assets";
import { navLinks } from "../data/db";

import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  // state for day/night theme change
  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [over, setOver] = useState(false);

  // state for menu button on responsiveness
  const [menu, setMenu] = useState(false);
  const [menuOver, setMenuOver] = useState(false);

  // state for showing navbar and navlinks on scroll
  const [showNav, setShowNav] = useState(false);
  const [showNavLink, setShowNavLink] = useState(false);

  // state for profile pic
  const [profile, setProfile] = useState(false);

  let location = useLocation();
  const mobileNavRef = useRef();
  const menuRef = useRef();

  // get default theme from browser
  // useEffect(() => {
  //   if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // }, []);

  // add or remove dark class from root element
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // handle function day/night mode
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setToggle((prev) => !prev);
  };

  // scroll control handler
  let lastScroll = 0;
  const controlHandler = () => {
    let currentScroll = window.scrollY;

    if (
      currentScroll > 0 &&
      currentScroll < 100 &&
      currentScroll > lastScroll
    ) {
      setProfile(true);
    }
    if (
      currentScroll > 0 &&
      currentScroll < 100 &&
      currentScroll < lastScroll
    ) {
      setProfile(false);
    }
    if (currentScroll > 100 && currentScroll > lastScroll) {
      setShowNav(true);
    }
    if (currentScroll > 100 && currentScroll < lastScroll) {
      setShowNav(false);
    }

    lastScroll = currentScroll;
  };

  // handle div when click outside the div
  function handleOutsideClick(e) {
    if (
      !e.path.includes(menuRef.current) &&
      !e.path.includes(mobileNavRef.current)
    ) {
      setShowNavLink(false);
    }
  }
  useEffect((e) => {
    document.body.addEventListener("click", handleOutsideClick);
    return () => document.body.removeEventListener("click", handleOutsideClick);
  }, []);

  // handle profile
  useEffect(() => {
    window.addEventListener("scroll", controlHandler);
    return () => {
      window.removeEventListener("scroll", controlHandler);
    };
  }, []);

  return (
    <div
      className={`fixed w-full  h-[16%] sm:max-w-[92%] lg:max-w-[88%] xxl:max-w-[1240px] ${
        showNav ? "-top-40" : "top-0"
      } transition-all duration-1000 z-30`}
    >
      {showNavLink && (
        <div className='fixed transition-all bg-zinc-900/40 inset-0 backdrop-blur-sm dark:bg-black/60 '></div>
      )}
      <nav
        className={`w-[100%] h-full flex justify-between items-start px-4 sm:px-10  xl:px-24 my-6 `}
      >
        {/* profile pic */}
        <div className={`relative w-max h-full`}>
          <div
            className={`absolute top-24 ${
              profile ? "-translate-y-[88px]" : "translate-y-0"
            } transition-all duration-1000`}
          >
            <div
              className={`w-[56px] h-[56px] rounded-full ${
                profile
                  ? "scale-[.6] -translate-y-2 ring-1 ring-offset-4 ring-zinc-800/10"
                  : "scale-100"
              } transition duration-1000`}
            >
              <Link to='/'>
                <img
                  src={me}
                  alt='profile-pic'
                  className='w-full h-full object-cover rounded-full'
                />
              </Link>
            </div>
          </div>
        </div>

        {/* navLinks.... */}
        <div className=' flex-1 flex justify-end md:justify-center items-start'>
          {/* navLinks on desktop view.... */}
          <ul className='hidden md:flex  gap-8 list-none bg-white/90  dark:bg-zinc-800/90 ring-1 ring-zinc-900/5 dark:ring-white/10 rounded-full px-4 shadow-lg shadow-zinc-800/5 backdrop-blur'>
            {navLinks.map((navLink, index) => (
              <li
                key={navLink.id}
                className='h-9 relative flex justify-center items-center  text-zinc-800 dark:text-zinc-200 font-roboto font-semibold capitalize text-sm hover:text-teal-500 dark:hover:text-teal-400'
              >
                <NavLink
                  to={`${navLink.name}`}
                  className={({ isActive }) =>
                    isActive ? "text-teal-500" : undefined
                  }
                >
                  {navLink.name}
                  {location.pathname.includes(navLink.name) && (
                    <span className='absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0'></span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* menu button with toggled navLinks for responsive view */}
          <div
            className=' mr-6 flex md:hidden'
            onMouseOver={() => setMenuOver(true)}
            onMouseOut={() => setMenuOver(false)}
            ref={menuRef}
          >
            <div
              className={`ring-1 dark:bg-zinc-800 ring-zinc-900/5 hover:ring-zinc-900/10 ${
                menuOver ? "dark:ring-zinc-300/40" : "dark:ring-zinc-300/10"
              }  px-3 py-2 rounded-full flex items-center justify-center cursor-pointer transition-all shadow shadow-zinc-800/10`}
              onClick={() => setShowNavLink(true)}
            >
              <p className=' text-zinc-800 dark:text-zinc-200 font-roboto font-medium capitalize translate-x-1'>
                menu{" "}
              </p>
              <RiArrowDropDownFill
                className={`${
                  menuOver
                    ? "fill-zinc-800 dark:fill-zinc-100"
                    : "dark:fill-zinc-300/60 fill-zinc-800/70"
                } w-8 h-6`}
              />
            </div>
          </div>
        </div>

        {/* navLinks on mobile view.... */}
        <div
          className={`${
            showNavLink ? "scale-100" : "scale-0"
          } transition-all duration-300 fixed w-[96%] md:hidden top-6 left-4 `}
          ref={mobileNavRef}
        >
          <div
            className={` w-[inherit] absolute  flex flex-col  bg-white dark:bg-zinc-900 ring-1 ring-zinc-200 dark:ring-zinc-400/20 rounded-[24px] p-6`}
          >
            <div className='w-full flex justify-between items-center mb-4 transition-all duration-1000'>
              <p className='font-poppins font-normal text-zinc-900 dark:text-zinc-500'>
                Navigation
              </p>
              <RiCloseLine
                className='fill-zinc-500/50 w-8 h-8 cursor-pointer hover:fill-zinc-600'
                onClick={() => setShowNavLink(false)}
              />
            </div>
            <ul className='flex flex-col'>
              {navLinks.map((navLink, index) => (
                <li
                  key={navLink.id}
                  className={`mb-2 pb-2 border-b-[1px] border-zinc-300/20 ${
                    index === navLinks.length - 1 && "border-none pb-0 mb-0"
                  }`}
                >
                  <Link
                    to={`${navLink.name}`}
                    className='cursor-pointer text-zinc-800 dark:text-zinc-200 font-roboto font-semibold capitalize text-sm hover:text-teal-500 dark:hover:text-teal-400'
                    onClick={() => setShowNavLink(false)}
                  >
                    {navLink.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* day/night mode button */}
        <div
          className={`w-12 h-10 bg-white dark:bg-zinc-800 rounded-full ring-[.5px] ring-zinc-900/5 hover:ring-zinc-900/10 dark:ring-zinc-300/10 dark:hover:ring-zinc-300/30 flex justify-center items-center cursor-pointer transition-all shadow shadow-zinc-800/10`}
          onMouseOver={() => setOver(true)}
          onMouseOut={() => setOver(false)}
          onClick={handleThemeSwitch}
        >
          <div>
            {toggle ? (
              <BsFillSunFill
                className={`${
                  over ? "fill-teal-600" : "fill-teal-400"
                } transition-all w-[100%]`}
              />
            ) : (
              <BsMoonStarsFill
                className={`${
                  over ? "fill-zinc-100/80" : "fill-zinc-100/50"
                } transition-all w-[100%]`}
              />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
