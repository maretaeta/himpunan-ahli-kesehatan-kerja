import React, { useState } from "react";
import data from "../components/data";

const Event = () => {
  const [count, setCount] = useState(3);
  const [noOfElement, setnoOfElement] = useState(3);

  const toggleLoadMore = () => {
    setCount(count === 3 ? 6 : 3);
  };

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
                  <div class="p-5 absolute top-28 lg:top-28 md:top-12 h-full mx-auto">
                    <a href="#">
                      <h5 class="mb-2 text-xl md:text-lg font-bold tracking-tight text-black">
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
          className="rounded-md   px-7 py-3 items-center text-center "
          onClick={() => toggleLoadMore()}
        >
          <p>{count === 3 ? "Show More" : "Show Less"}</p>
        </button>
      </div>
    </div>
  );
};

export default Event;
