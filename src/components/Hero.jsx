import React from "react";
import { useSpring, animated } from "react-spring";
import { motion } from "framer-motion";

import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";

import bgImg from "../assets/img.png";

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
const fadeInUp = {
  initial: {
    y: -60,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: easeing,
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.5,
      ease: easeing,
    },
  },
};

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 500,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

const Hero = () => {
  return (
    <div name="home" className="bg-gray-100">
      <div className="grid md:grid-cols-2 max-w-7xl mx-5 lg:mx-7">
        <div className="flex flex-col justify-center sm:items-cente w-full px-2 py-8">
          <div
            data-aos="fade-right"
            className="py-3 text-4xl md:text-6xl font-bold text-center md:text-left"
          >
            Perhimpunan Ahli Kesehatan Kerja Indonesia
          </div>
          <div className="grid grid-cols-1 justify-items-center sm:justify-items-start md:pt-3 md:pb-6 h-9">
            <button
              data-aos="zoom-in"
              className="bg-[#007936]  md:py-3 md:px-16 px-9"
            >
              Daftar
            </button>
          </div>
        </div>
        <div data-aos="fade-left">
          <img className="xl:w-full " src={bgImg} alt="/" />
        </div>
        <div className="grid grid-cols-1 justify-items-center z-10 mt-[-4rem] lg:w-32">
          <div
            className="container items-center grid grid-cols-1 md:max-w-6xl absolute md:my-0 sm:my-3 py-8
                mx-6 md:left-1/2 transform md:-translate-x-1/2 md:mx-auto bg-white
                border border-slate-300 rounded-xl text-center shadow-xl "
          >
            <div className="flex justify-between flex-wrap mx-3 ">
              <div>
                <p className="pl-6">
                  <CloudUploadIcon className="h-6 text-green-600" />
                </p>
                <div className="md:text-3xl text-xl font-bold text-gray-600 ">
                  <Number n={67} />
                </div>
                <p className="md:px-4 px-2 py- text-slate-500">Daerah</p>
              </div>
              <div>
                <p className="pl-7">
                  <CloudUploadIcon className="h-6 text-green-600" />
                </p>
                <div className="md:text-3xl text-xl font-bold text-gray-600 ">
                  <Number n={230} />
                </div>
                <p className="md:px-4 px-2 text-slate-500">Cabang</p>
              </div>
              <div>
                <p className="pl-6">
                  <CloudUploadIcon className="h-6 text-green-600" />
                </p>
                <div className="md:text-3xl text-xl font-bold text-gray-600">
                  <Number n={576} />
                </div>
                <p className="md:px-4 px-2 text-slate-500">Ranting</p>
              </div>
              <div>
                <p className="pl-7">
                  <CloudUploadIcon className="h-6 text-green-600" />
                </p>
                <div className="md:text-3xl  text-xl font-bold text-gray-600">
                  <Number n={7089} />
                </div>
                <p className="md:px-4 px-2 text-slate-500">Anggota</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
