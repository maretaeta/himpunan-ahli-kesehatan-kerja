import React, { useState } from "react";
import data from "../components/data";
//import pik from '../assets/support.jpg'
//import {motion} from 'framer-motion';

const Event = () => {
  const [count, setCount] = useState(3);
  const [noOfElement, setnoOfElement] = useState(3);

  const showShowOrLess = () => {
    setCount < setCount;
  };
  const loadMore = () => {
    setCount(6);
  };
  console.log(data.cardData);
  // const slice = data.cardData.slice(0, noOfElement);

<<<<<<< HEAD
  return (
    <div name="Event" className="max-w-[1240px] px-5 mx-auto items-center">
=======
  const scrollUp = () => {
    setCount(3);
  };
  console.log(data.cardData);

  return (
    <div name="event" className="max-w-[1240px] px-5 mx-auto items-center">
>>>>>>> 6588fc2715f89468949f5023805ef2e67ef9910f
      <h1 className="pb-5 pt-28 text-5xl font-bold text-center">Event</h1>
      <div className="flex mx-auto justify-between">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 pt-2 gap-4 items-center">
          {data.cardData.map((item, index) => {
            if (index < count) {
              return (
                <div
                  class="max-w-[1240px] border border-gray-200 rounded-lg shadow overflow-hidden"
                  key={index}
                >
                  <a href="#">
                    <img class="rounded-t-lg" src={item.img} alt="" />
                  </a>
                  <div class="p-5">
                    <a href="#">
<<<<<<< HEAD
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-green-500">
=======
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-black">
>>>>>>> 6588fc2715f89468949f5023805ef2e67ef9910f
                        {item.title}
                      </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {item.desc}
                    </p>
                    <a
                      href="#"
                      class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      {" "}
                      {item.button}
                      <svg
                        aria-hidden="true"
                        class="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
<<<<<<< HEAD
      <div className="pt-10">
        <button
          className="btn-more py-3 px-10 grid justify-items-center mx-auto"
          onClick={() => loadMore()}
        >
          {" "}
          Load More
        </button>
      </div>
    </div>
  );
};

=======
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

>>>>>>> 6588fc2715f89468949f5023805ef2e67ef9910f
export default Event;
