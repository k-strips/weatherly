import React, { useState, useEffect } from "react";
import { useAxiosFetch } from "../../hooks";
import Search from "../search";
import Weather from "../weather";

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
    return () => {
      setDataUrl("");
      setCoordinate({ lat: 0, lon: 0 });
    };
  }, []);

  useEffect(() => {
    setDataUrl(
      `${process.env.REACT_APP_BASE_URL}?lat=${coordinate.lat}&lon=${coordinate.lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    );
    doFetch(dataUrl);
  }, [coordinate.lat, coordinate.lon, dataUrl]);

  // location state
  const [location, setLocation] = useState("");
  // input change handler for location
  const handleChange = (e) => {
    const { value } = e.target;
    setLocation(value);
  };

  // useEffect(() => {
  //   doFetch(dataUrl);
  // }, [dataUrl]);

  const [{ data, fetchError, isLoading }, doFetch] = useAxiosFetch(dataUrl);

  // const [
  //   { data: weatherData, fetchError: weatherError, isLoading: weatherLoading },
  //   geoFetch,
  // ] = useAxiosFetch(dataUrl);

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
    <div className="w-full sm:w-screen sm:mx-4 p-4 border ring-slate-500 rounded-md sm:mx-2 md:w-1/2 px-2 bg-blue opacity-60 backdrop-filter backdrop-blur-lg">
      <h2 className="text-center font-extrabold text-blue-600 text-2xl capitalize mb-2">
        weatherly
      </h2>
      <Search
        location={location}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <Weather data={data?.current?.weather[0]} />
    </div>
  );
};

export default WeatherCard;
