import React, { useState, useEffect } from "react";
import { useAxiosFetch } from "../../hooks";

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
    <div className="flex flex-column flex-nowrap w-1/2">
      <h2 className="font-extrabold text-blue-600">weatherly</h2>
      <div className="flex flex-row flex-nowrap">
        <form onSubmit={handleSubmit}>
          <input type="search" value={location} onChange={handleChange} />
          <button type="submit">search</button>
        </form>
      </div>
      <div className="flex flex-row flex-nowrap">
        <div>
          <figure>
            <img
              src={`https://openweathermap.org/img/wn/${data?.weather["icon"]}`}
              alt="weather-icon"
            />
            <figcaption>{data?.weather?.description}</figcaption>
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
      <div>icons here</div>
    </div>
  );
};

export default WeatherCard;
