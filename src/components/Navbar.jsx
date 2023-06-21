import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/pakki.png";
import { motion } from "framer-motion";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

let easeing = [0.6, -0.05, 0.01, 0.99];

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
  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate(`/login`);
  };
  const handleClickRegis = () => {
    navigate(`/registered`);
  };
  const handleClickHome = () => {
    navigate(`/`);
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="sticky top-0 z-20 bg-gray-100 justify-between drop-shadow-lg px-16 py-3"
    >
      <motion.div
        variants={header}
        className="flex justify-between items-center w-full"
      >
        <motion.div variants={header} className="w-20">
          <img src={logo} alt="" onClick={() => handleClickHome()} />
        </motion.div>
        <div className="lg:text-lg ">
          <ul className="hidden md:flex font-bold gap-3 md:gap-0">
            <li
              className="hover:text-green-500 relative cursor-pointer transition-all 
            before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all
            before:duration-500 before:bg-green-500 hover:before:w-full hover:before:opacity-100"
            >
              <Link
                to="home"
                smooth={true}
                duration={500}
                onClick={() => handleClickHome()}
              >
                Home
              </Link>
            </li>
            <li
              className="hover:text-green-500 relative cursor-pointer transition-all 
            before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all
            before:duration-500 before:bg-green-500 hover:before:w-full hover:before:opacity-100"
            >
              <Link
                to="about"
                smooth={true}
                offset={-200}
                duration={500}
                onClick={() => handleClickHome()}
              >
                About
              </Link>
            </li>
            <li
              className="hover:text-green-500 relative cursor-pointer transition-all 
            before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all
            before:duration-500 before:bg-green-500 hover:before:w-full hover:before:opacity-100"
            >
              <Link
                to="support"
                smooth={true}
                offset={-50}
                duration={500}
                onClick={() => handleClickHome()}
              >
                Support
              </Link>
            </li>
            <li
              className="hover:text-green-500 relative cursor-pointer transition-all 
            before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all
            before:duration-500 before:bg-green-500 hover:before:w-full hover:before:opacity-100"
            >
              <Link
                to="event"
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => handleClickHome()}
              >
                Event
              </Link>
            </li>

            <li
              className="hover:text-green-500 relative cursor-pointer transition-all 
            before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all
            before:duration-500 before:bg-green-500 hover:before:w-full hover:before:opacity-100"
            >
              <Link
                to="Location"
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => handleClickHome()}
              >
                Location
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button
            className=" px-4 py-2 h-11 text-green-400 hover:bg-green-400 hover:text-white bg-transparent mr-4"
            onClick={() => handleClickRegis()}
          >
            Daftar
          </button>
          <button className="px-4 py-2 h-11" onClick={() => handleClickLogin()}>
            Masuk
          </button>
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </motion.div>
      <ul className={!nav ? "hidden" : " bg-gray-100 w-full px-8 "}>
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
            to="Faq"
            smooth={true}
            offset={-100}
            duration={500}
          >
            FAQ
          </Link>
        </li>

        <div className="flex flex-col my-4">
          <button onClick={()=> handleClickLogin()} className="px-8 mb-4 py-3">Log In</button>
          <button onClick={()=> handleClickRegis()} className="text-green-500 hover:bg-green-500 hover:text-white bg-transparent  px-8 py-3">
            Sign Up
          </button>
        </div>
      </ul>
    </motion.div>
  );
};

export default Navbar;
