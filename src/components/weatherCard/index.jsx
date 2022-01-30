import React, { useState, useEffect } from "react";
import { useAxiosFetch } from "../../hooks";
import Search from "../search";
import TodayDetails from "../todayDetails";
import Weather from "../weather";
import DailyForcast from "../dailyForcast";
import HourlyForcast from "../hourlyForcast";

const WeatherCard = () => {
  const [dataUrl, setDataUrl] = useState(null);
  const [coordinate, setCoordinate] = useState({ lat: 0, lon: 0 });
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoordinate({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    } else {
      console.log(`geolocation not supported`);
    }
    // return () => {
    //   setUrl("");
    // };
  }, []);

  useEffect(() => {
    setDataUrl(
      `${process.env.REACT_APP_BASE_URL}?lat=${coordinate.lat}&lon=${coordinate.lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    );
  }, [coordinate.lat, coordinate.lon]);

  // location state
  const [location, setLocation] = useState("");
  // input change handler for location
  const handleChange = (e) => {
    const { value } = e.target;
    setLocation(value);
  };

  useEffect(() => {
    doFetch(dataUrl);
  }, [dataUrl]);

  const [{ data, fetchError, isLoading }, doFetch] = useAxiosFetch(dataUrl);

  // form on submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setDataUrl(
      `${process.env.REACT_APP_BASE_URL}?q=${location}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    );
  };

  const [isDailyForcast, setIsDailyForcast] = useState(true);

  console.log(data);
  return (
    <div className="flex flex-col flex-nowrap border rounded w-full sm:w-screen md:w-1/2 mx-auto px-2">
      <h2 className="text-center font-extrabold text-blue-400 text-2xl capitalize mb-2">
        weatherly
      </h2>
      <Search
        location={location}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <TodayDetails data={data?.current} />
      <Weather data={data?.current?.weather[0]} />
      <section>
        <h3 className="text-center ">weather forcast</h3>
        {isDailyForcast ? (
          <DailyForcast data={data?.daily} />
        ) : (
          <HourlyForcast data={data?.hourly} />
        )}
      </section>
    </div>
  );
};

export default WeatherCard;
