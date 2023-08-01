/** @format */

import React, { useState } from "react";
import data from "../components/data";
import { useNavigate } from "react-router-dom";

const Event = () => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();

  const handleClickDetail = () => {
    navigate(`/Detail`);
  };

  const toggleLoadMore = () => {
    setCount(count === 3 ? 6 : 3);
  };

  return (
    <div name="event" className="max-w-[1240px] px-5 mx-auto items-center">
      <h1 className="pb-5 pt-28 text-5xl font-bold text-center">
        News & Events
      </h1>
      <div className="flex mx-auto justify-between">
        <div
          data-aos-offset="400"
          data-aos="fade-up"
          className="grid sm:grid-cols-2 md:grid-cols-3 pt-2 gap-4 items-center"
        >
          {data.cardData.map((item, index) => {
            if (index < count) {
              return (
                <div
                  class="relative max-w-[1240px] border border-gray-200 rounded-lg shadow overflow-hidden"
                  key={index}
                  onClick={() => handleClickDetail()}
                >
                  <a href="#">
                    <img
                      class="rounded-t-lg w-full h-full object-cover opacity-75"
                      src={item.img}
                      alt=""
                    />
                  </a>
                  <div class="absolute bottom-0 w-full bg-black bg-opacity-50">
                    <a href="#">
                      <h5 class="mb-2 text-xl font-bold tracking-tight text-white text-center py-2">
                        {item.title}
                      </h5>
                    </a>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="pt-10 flex flex-row gap-2 justify-center">
        <button
          className="rounded-md px-7 py-3 items-center text-center "
          onClick={() => toggleLoadMore()}
        >
          <p>{count === 3 ? "Show More" : "More Less"}</p>
        </button>
      </div>
    </div>
  );
};

export default Event;
