import React from "react";

//
import { daysOfTheWeek } from "../utils";

const TodayDetails = ({ data }) => {
  return (
    <section className="flex flex-nowrap justify-between">
      <div className="w-1/2">
        <h3>
          temperature: {data?.temp}
          <span>&#8451;</span>
        </h3>
        <h3>
          humidity: {data?.humidity}
          <span> &#37;</span>
        </h3>
        <h3>
          pressure:{data?.pressure} <span>mb</span>
        </h3>
      </div>
      <div>
        <h5 className="capitalize">
          {data?.dt && daysOfTheWeek[`${new Date(data?.dt * 1000).getDay()}`]}
        </h5>
      </div>
    </section>
  );
};

export default TodayDetails;
