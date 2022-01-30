import React from "react";

const Weather = ({ data }) => {
  return (
    <section className="flex flex-col items-center w-full">
      <img
        src={`http://openweathermap.org/img/wn/${data?.icon}.png`}
        width="100"
        height="100"
        alt="weather figure"
      />
      <p>{data?.description}</p>
    </section>
  );
};

export default Weather;
