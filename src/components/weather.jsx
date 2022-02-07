import React from "react";
import { WiStrongWind, WiHumidity, WiBarometer } from "react-icons/wi";

// local component import
import WeatherFeature from "./weatherFeature";
import { daysOfTheWeek } from "../utils";

const Weather = ({ data, geoData }) => {
  let town = geoData?.formatted.split(",");

  console.log(data);
  return (
    <section className="grid grid-cols-2 text-white">
      <div className="flex flex-row place-items-center">
        <div>
          <img
            className="m-0"
            src={`http://openweathermap.org/img/wn/${data?.current?.weather[0]?.icon}.png`}
            width="100"
            height="100"
            alt="weather figure"
          />
          <p className="font-bold italic text-center">
            {data?.current?.weather[0]?.description}
          </p>
        </div>
        <div>
          <WeatherFeature>
            <span>
              <WiBarometer size={20} />
            </span>
            <span>pressure:</span>
          </WeatherFeature>
          <WeatherFeature>
            <span>
              <WiHumidity size={20} />
            </span>
            <span>humidity: {data?.current?.humidity}</span>
          </WeatherFeature>
          <WeatherFeature>
            <span>
              <WiStrongWind size={20} />
            </span>
            <span>
              wind speed: {data?.current?.wind_speed} <small>km/h</small>
            </span>
          </WeatherFeature>
        </div>
        <div className="text-center font-extrabold text-2xl mx-4">
          {data?.current?.temp} <span>&#8451;</span>
        </div>
      </div>
      <div className="justify-self-end">
        <p className="font-bold">
          {town?.length <= 2
            ? `${town?.[0]}, ${town?.[1]}`
            : `${town?.[0]}, ${town?.[2]}`}
        </p>
        <p>
          {data?.current?.dt &&
            daysOfTheWeek[`${new Date(data?.current?.dt * 1000).getDay()}`]}
        </p>
      </div>
    </section>
  );
};

export default Weather;
