import React from "react";

const WeatherDetails = ({ data }) => {
  return (
    <div className="flex flex-row flex-nowrap">
      <div>
        <figure>
          <img
            src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`}
            alt="weather-icon"
          />
          <figcaption>{data?.weather[0]?.description}</figcaption>
        </figure>
      </div>
      <div>
        {data && (
          <>
            <h3>
              {data.name}, {data.sys.county}
            </h3>
            <h6>{new Date(data.dt).getDay()}</h6>
          </>
        )}
      </div>
    </div>
  );
};

export default WeatherDetails;
