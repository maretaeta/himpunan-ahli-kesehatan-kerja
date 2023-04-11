import React from "react";

const Location = () => {
  return (
    <div name="Location" className="lg:flex lg:justify-between grid justify-items-center max-w-6xl py-16 lg:gap-20 mt-10 mx-5 lg:mx-auto">
      <div className="mb-5">
        <h1 className="font-bold text-4xl text-center md:text-left">
          Our Location
        </h1>
        <h1 className="md:text-left text-center">
        2, Jl. Merpati Prima No.41, RT.2/RW.1, West Tanjung, Jagakarsa, South Jakarta City, Jakarta 12530{" "}
        </h1>
      </div>
      <iframe
        id="iframe1"
        className="rounded-md md:w-[700px] w-72 sm:w-96 h-80"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.6566937748476!2d106.83765191485494!3d-6.30875359543418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69eda2ceda17d7%3A0x23542f9cc2bd1f7b!2sDPP%20PAKKI!5e0!3m2!1sid!2sid!4v1681220869265!5m2!1sid!2sid"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};


export default Location;
