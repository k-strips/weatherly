import React from "react";
import { FaTemperatureHigh, FaTemperatureLow, FaWind } from "react-icons/fa";
import { WiWindy, WiHumidity } from "react-icons/wi";

// local component import
import WeatherFeature from "./weatherFeature";

const Weather = ({ data }) => {
  return (
    <section className="grid grid-cols-2 text-white">
      <div className="flex flex-row place-items-center">
        <div>
          <img
            className="m-0"
            src={`http://openweathermap.org/img/wn/${data?.icon}.png`}
            width="100"
            height="100"
            alt="weather figure"
          />
          <p className="font-bold italic text-center">{data?.description}</p>
        </div>
        <div className="">
          <h1>20</h1>
        </div>
        <div>
          <WeatherFeature>
            <span>
              <FaTemperatureHigh />
            </span>
            <span>temperature: </span>
          </WeatherFeature>
          <WeatherFeature>
            <span>
              <WiHumidity size={20} />
            </span>
            <span>humidity: </span>
          </WeatherFeature>
          <WeatherFeature>
            <span>
              <FaWind />
            </span>
            <span>wind: </span>
          </WeatherFeature>
        </div>
      </div>
      <div className="justify-self-end">
        <p className="font-bold">Accra, Ghana</p>
        <p>friday</p>
      </div>
    </section>
  );
};

export default Weather;
