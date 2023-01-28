import React, { useContext, useEffect, useState } from "react";
import { FlightData } from "./FlightDataProvider";

const Footer = () => {
  const { setFilterData, setTime, time, filterFlight, getUtcTime } =
    useContext(FlightData);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getUtcTime);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return <div className="footer">{time} UTC</div>;
};

export default Footer;
