import React, { useState, useEffect } from "react";
import { useAxiosFetch } from "../../hooks";

const WeatherCard = () => {
  // location state
  const [location, setLocation] = useState("accra");
  // input change handler for location
  const handleChange = (e) => {
    const { value } = e.target;
    setLocation(value);
  };

  const cityNameUrl = `${process.env.REACT_APP_BASE_URL}?q=${location}&appid=${process.env.OPEN_WEATHER_API_KEY}`;

  // coordinate state
  const [coordinate, setCoordinate] = useState({ latitude: 0, longitude: 0 });
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoordinate({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      console.log(`geolocation not supported`);
    }

    return () => {
      setCoordinate({ latitude: 0, longitude: 0 });
    };
  }, []);

  const coordinateUrl = `${process.env.REACT_APP_BASE_URL}?lat=${coordinate.latitude}&lon=${coordinate.longitude}&appid=${process.env.REACT_APP_API_KEY}`;

  // const { data, fetchError, isLoading } = useAxiosFetch();

  console.log(coordinateUrl);
  return (
    <div className="flex flex-column flex-nowrap w-1/2">
      <h2 className="font-extrabold text-blue-600">weatherly</h2>
      <div className="flex flex-row flex-nowrap">
        <input type="search" value={location} onChange={handleChange} />
        <button>search</button>
      </div>
      <div className="flex flex-row flex-nowrap">
        weather icons and details gos in here...
      </div>
      <div>icons here</div>
    </div>
  );
};

export default WeatherCard;
