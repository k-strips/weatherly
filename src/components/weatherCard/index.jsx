import React, { useState, useEffect } from "react";

const WeatherCard = () => {
  const [location, setLocation] = useState("accra");
  const [cordinate, setCordinate] = useState({ Latitude: 0, Longitude: 0 });

  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.watchPosition(function (position) {
  //       console.log("Latitude is :", position.coords.latitude);
  //       console.log("Longitude is :", position.coords.longitude);
  //     });
  //   }
  // }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    setLocation(value);
    console.log(location);
  };

  return (
    <div className="card">
      <h2>weatherly</h2>
      <div className="">
        <input
          type="search"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button>search</button>
      </div>
      <div>weather icons and details gos in here...</div>
      <div>icons here</div>
    </div>
  );
};

export default WeatherCard;
