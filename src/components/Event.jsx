import React, { useState } from "react";
import data from "../components/data";

const Event = () => {
  const [count, setCount] = useState(3);
  const [noOfElement, setnoOfElement] = useState(3);

  const loadMore = () => {
    setCount(6);
  };
  console.log(data.cardData);
  // const slice = data.cardData.slice(0, noOfElement);

  const scrollUp = () => {
    setCount(3);
  };
  console.log(data.cardData);

  return (
    <div name="event" className="max-w-[1240px] px-5 mx-auto items-center">
      <h1 className="pb-5 pt-28 text-5xl font-bold text-center">Event</h1>
      <div className="flex mx-auto justify-between">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 pt-2 gap-4 items-center">
          {data.cardData.map((item, index) => {
            if (index < count) {
              return (
                <div
                  class="relative max-w-[1240px] border border-gray-200 rounded-lg shadow overflow-hidden"
                  key={index}
                >
                  <a href="#">
                    <img
                      class="rounded-t-lg w-full h-full object-cover opacity-75"
                      src={item.img}
                      alt=""
                    />
                  </a>
                  <div class="p-5 absolute top-40 lg:top-28 w-full h-full mx-auto">
                    <a href="#">
                      <h5 class="mb-2 text-xl font-bold tracking-tight text-black">
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
      <div className="pt-10 flex flex-row gap-2 items-end justify-end">
        <button
          className="rounded-sm h-7 w-8 px-2 items-center text-center "
          onClick={() => loadMore()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>

        <button
          className="rounded-sm h-7 w-8 px-2 items-center justify-center text-center"
          onClick={() => scrollUp()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Event;
