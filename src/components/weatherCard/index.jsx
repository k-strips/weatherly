import React, { useState, useEffect } from "react";
import { useAxiosFetch } from "../../hooks";
import Search from "../search";
import WeatherDetails from "../weatherDetails";
import WeatherFooter from "../weatherFooter";

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
      `${process.env.REACT_APP_BASE_URL}?lat=${coordinate.lat}&lon=${coordinate.lon}&appid=${process.env.REACT_APP_API_KEY}`
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
      `${process.env.REACT_APP_BASE_URL}?q=${location}&appid=${process.env.REACT_APP_API_KEY}`
    );
  };

  console.log(data);
  return (
    <div className="flex-col flex-nowrap w-1/2 p-4 max-w-sm mx-auto rounded-xl shadow-lg items-center space-x-4 ">
      <h2 className="text-center font-extrabold text-blue-600">weatherly</h2>
      <Search
        location={location}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <WeatherDetails data={data} />
      <WeatherFooter data={data} />
    </div>
  );
};

export default WeatherCard;
