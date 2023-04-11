import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../assets/pakki.png";
import { motion } from "framer-motion";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

let easeing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};
const header = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.05, ease: easeing },
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easeing,
    },
  },
};
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="w-screen z-20 bg-white justify-between fixed drop-shadow-lg px-10 py-3"
    >
      <motion.div
        variants={header}
        className="flex justify-between items-center w-full"
      >
        <motion.div variants={header} className="w-20">
          <img src={logo} alt="" />
        </motion.div>
        <div className="lg:text-lg ">
          <ul className="hidden md:flex font-bold gap-3 md:gap-0">
            <li
              className="hover:text-green-500 relative cursor-pointer transition-all 
            before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all
            before:duration-500 before:bg-green-500 hover:before:w-full hover:before:opacity-100"
            >
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li
              className="hover:text-green-500 relative cursor-pointer transition-all 
            before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all
            before:duration-500 before:bg-green-500 hover:before:w-full hover:before:opacity-100"
            >
              <Link to="about" smooth={true} offset={-200} duration={500}>
                About
              </Link>
            </li>
            <li
              className="hover:text-green-500 relative cursor-pointer transition-all 
            before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all
            before:duration-500 before:bg-green-500 hover:before:w-full hover:before:opacity-100"
            >
              <Link to="support" smooth={true} offset={-50} duration={500}>
                Support
              </Link>
            </li>
            <li
              className="hover:text-green-500 relative cursor-pointer transition-all 
            before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all
            before:duration-500 before:bg-green-500 hover:before:w-full hover:before:opacity-100"
            >
              <Link to="Event" smooth={true} offset={-100} duration={500}>
                Event
              </Link>
            </li>
            {/* <li
              className="hover:text-green-500 relative cursor-pointer transition-all 
            before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all
            before:duration-500 before:bg-green-500 hover:before:w-full hover:before:opacity-100"
            >
              <Link to="Location" smooth={true} offset={-100} duration={500}>
                Location
              </Link>
            </li> */}
            <li
              className="hover:text-green-500 relative cursor-pointer transition-all 
            before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all
            before:duration-500 before:bg-green-500 hover:before:w-full hover:before:opacity-100"
            >
              <Link to="Faq" smooth={true} offset={-100} duration={500}>
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex md:gap-3">
          <button className="border-green-500 md:w-24 h-10 bg-transparent text-green-500 ">
            Sign In
          </button>
          <button className=" h-10 md:w-24  bg-green-500 border-green-500">
            Sign Up
          </button>
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </motion.div>
      <ul className={!nav ? "hidden" : " bg-zinc-200 w-full px-8 "}>
        <li className="border-b-2 border-zinc-300 w-full hover:text-green-500">
          <Link onClick={handleClose} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full hover:text-green-500">
          <Link
            onClick={handleClose}
            to="about"
            smooth={true}
            offset={-200}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full hover:text-green-500">
          <Link
            onClick={handleClose}
            to="support"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Support
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full hover:text-green-500">
          <Link
            onClick={handleClose}
            to="Event"
            smooth={true}
            offset={-100}
            duration={500}
          >
            Event
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full hover:text-green-500">
          <Link
            onClick={handleClose}
            to="Location"
            smooth={true}
            offset={-100}
            duration={500}
          >
            Location
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full hover:text-green-500">
          <Link
            onClick={handleClose}
            to="Faq"
            smooth={true}
            offset={-100}
            duration={500}
          >
            FAQ
          </Link>
        </li>

        <div className="flex flex-col my-4">
          <button className="bg-transparent text-green-500 px-8 py-3 mb-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </motion.div>
  );
};

export default Navbar;
