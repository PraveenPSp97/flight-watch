import React, { useContext, useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import L from "leaflet";
import FlightInfo from "./FlightInfo";
import { FlightData } from "./FlightDataProvider";
import flightIcon from "../assets/flight.png";
const MapView = () => {
  const [data, setData] = useState(null);
  const filter = useContext(FlightData);
  const filterFlight = filter.filterFlight;
  console.log(filter);
  const icon = L.icon({
    iconUrl: flightIcon,
    iconSize: [25, 25],
    className: "flight-icon",
  });
  async function fetchData() {
    const response = await fetch(
      "https://my-json-server.typicode.com/PraveenPSp97/FlightWatchServer/flightInfo"
    );
    const json = await response.json();
    setData(json);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const filterData = () => {
    let filterFlights = data.filter(
      (flight) => flight.flightNo == filterFlight
    );

    filterFlights ? setData(filterFlights) : console.log();
  };
  useEffect(() => {
    if (filterFlight.length == 4) filterData();
    else if (data && data.length == 1) fetchData();
  }, [filterFlight]);

  return (
    <MapContainer
      className="map-container"
      center={[51.505, -0.09]}
      zoom={3}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {data
        ? data.map((flight) => (
            <Marker
              key={flight.flightId}
              position={flight.position}
              icon={icon}
            >
              <Popup className="popUp-body">
                <FlightInfo flight={flight} />
              </Popup>
            </Marker>
          ))
        : console.log("loading")}
    </MapContainer>
  );
};

export default MapView;
