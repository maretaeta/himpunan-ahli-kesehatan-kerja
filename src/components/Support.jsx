import React from "react";

import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";

import supportImg from "../assets/support.jpg";

const Support = () => {
  return (
    <div name="support" className="w-full mt-24 bg-[#33415A] pb-10">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={supportImg}
          alt="/"
        />
      </div>

      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h3
            data-aos-offset="400"
            data-aos="fade-right"
            className="text-5xl font-bold py-6 text-center"
          >
            What You Get ?
          </h3>
          <p
            data-aos-offset="400"
            data-aos="fade-left"
            className="py-4 text-3xl text-slate-300 text-center"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            repudiandae veritatis ratione error tenetur, voluptates architecto
            possimus ad! Omnis minima ea quidem quisquam unde beatae, minus illo
            et cum vel?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div
            data-aos-offset="400"
            data-aos="fade-up"
            className="bg-white rounded-xl shadow-2xl pb-8"
          >
            <div className="p-8">
              <PhoneIcon className="w-16 p-4 bg-green-500 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">PELATIHAN</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi provident iure placeat blanditiis ea sint earum hic
                iste quibusdam exercitationem.
              </p>
            </div>
          </div>
          <div
            data-aos-offset="400"
            data-aos="fade-up"
            className="bg-white rounded-xl shadow-2xl pb-8"
          >
            <div className="p-8">
              <SupportIcon className="w-16 p-4 bg-green-500 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">FITUR TERBARU</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi provident iure placeat blanditiis ea sint earum hic
                iste quibusdam exercitationem.
              </p>
            </div>
          </div>
          <div
            data-aos-offset="400"
            data-aos="fade-up"
            className="bg-white rounded-xl shadow-2xl pb-8"
          >
            <div className="p-8">
              <ChipIcon className="w-16 p-4 bg-green-500 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">E-LEARNING</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi provident iure placeat blanditiis ea sint earum hic
                iste quibusdam exercitationem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
