import React, { useState, useEffect } from "react";
import moment from "moment";
import crypto from "../assets/crypto.jpg";


const Event = () => {
  const eventDate = moment("2024-07-02 00:00:00"); // Event date

  const calculateCountdown = () => {
    const now = moment();
    const duration = moment.duration(eventDate.diff(now));
    return {
      days: Math.floor(duration.asDays()),
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds()
    };
  };

  const [countdown, setCountdown] = useState(calculateCountdown());

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(calculateCountdown());
    }, 1000); // Update every second

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  return (
    <section id="#welcome" className="relative w-[100%] h-[70%] object-cover">
      <img
        src={crypto}
        alt="hero-background"
        className="w-screen h-screen bg-cover bg-center"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center px-4 sm:px-8 lg:px-12 text-center">
        <h1
          className="text-white font-bold font-body font-mont leading-12 md:leading-16 lg:leading-20 xl:leading-24"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Our Upcoming Event
        </h1>
        <p
          className="text-white font-medium font-mont font-body lg:text-4xl text-2xl leading-relaxed mt-[24px]"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          Date: 2nd July, 2024
        </p>
        <div
          className="text-white font-bold font-mont lg:text-6xl text-3xl mt-[24px]"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          {countdown.days}d {countdown.hours}h {countdown.minutes}m {countdown.seconds}s
        </div>
      </div>
    </section>
    
  );
};

export default Event;
