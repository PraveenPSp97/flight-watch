import { Map } from "leaflet";
import React, { useContext, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { FlightData } from "./FlightDataProvider";

const Header = () => {
  const [filterFlightInput, setfilterFlight] = useState("");
  const { setFilterData, setTime, time, filterFlight, getUtcTime } =
    useContext(FlightData);

  const handleFilterSubmit = (e) => {
    if (e.key === "Enter") {
      setFilterData(filterFlightInput);
      setfilterFlight("");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#333",
        color: "white",
        padding: "5px",
      }}
    >
      <h3>Flight Watch</h3>
      <input
        type="number"
        value={filterFlightInput}
        onChange={(e) => setfilterFlight(e.target.value)}
        onKeyDown={handleFilterSubmit}
        placeholder="Flight No"
        className="searchElement"
      />
    </div>
  );
};

export default Header;
