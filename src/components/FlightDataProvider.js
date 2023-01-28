import React, { createContext, useState } from "react";

const FlightData = createContext();

const FlightDataProvider = ({ children }) => {
  const d = new Date();
  let times, hh, mm;

  const getUtcTime = () => {
    hh = d.getUTCHours();
    mm = d.getUTCMinutes();
    hh = hh < 10 ? "0" + hh : hh;
    mm = mm < 10 ? "0" + mm : mm;
    times = hh + ":" + mm;
    return times;
  };

  const initialUtc = getUtcTime();
  const [filterFlight, setfilterFlight] = useState("");
  const [time, setTime] = useState(initialUtc);

  const setFilterData = (data) => {
    setfilterFlight(data);
  };
  const filghtProvider = {
    setFilterData,
    setTime,
    time,
    filterFlight,
    getUtcTime,
  };
  return (
    <>
      <FlightData.Provider value={filghtProvider}>
        {children}
      </FlightData.Provider>
    </>
  );
};

export { FlightDataProvider, FlightData };
