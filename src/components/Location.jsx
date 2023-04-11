/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

const Location = () => {
  return (
    <div
      name="Location"
      className="lg:flex lg:justify-between grid justify-items-center max-w-6xl py-16 mt-10 mx-5 lg:mx-auto lg:p-5"
    >
      <div className="mb-5">
        <h1 className="font-bold text-4xl text-center md:text-left">
          Where to find us?
        </h1>
        <h1 className="md:text-left text-center">
          Jln. Pangeran No.89, Karanganyar, Jawa Tengah{" "}
        </h1>
      </div>
      <iframe
        id="iframe1"
        className="rounded-md md:w-[700px] w-72 sm:w-96 h-80"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.281219129751!2d110.73340471486168!3d-7.544279894559019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a155cf2f1847d%3A0xc2eb3de16181623!2sTERMINAL%20KARTASURA!5e0!3m2!1sid!2sid!4v1679135010982!5m2!1sid!2sid"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Location;
