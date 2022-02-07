import axios from "axios";

const daysOfTheWeek = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

const locationToCoord = async (location) => {
  let geoUrl = `${process.env.REACT_APP_GEO_BASE_URL}?q=${location}`;
  let resp = await axios.get(geoUrl);
};

export { daysOfTheWeek, locationToCoord };
