import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Popup } from "react-leaflet";
import { FlightData } from "./FlightDataProvider";

const FlightInfo = ({ flight }) => {
  const { time } = useContext(FlightData);

  return (
    <div className="flight-details-container">
      <div className="flight-details-header">
        <div className="row">
          <h5>Flight Info</h5>
        </div>
        <div className="row">
          <div className="col flightInfo">
            {flight.carrierCode}-{flight.flightNo}/{flight.departureStation}-
            {flight.arrivalStation}
          </div>
          <div className="col" style={{ textAlign: "right" }}>
            UTC:{time}
          </div>
        </div>
      </div>
      <div className="flight-details-body row">
        <div className="col flight-details-colmn">
          <div className="row fligt-details-content">
            <div className="col "> FLIGHT NO:</div>
            <div className="col" style={{ textAlign: "right" }}>
              {flight.flightNo}
            </div>
          </div>
          <div className="row fligt-details-content">
            <div className="col">DEPARTURE STATION</div>
            <div className="col tr">{flight.departureStation}</div>
          </div>
          <div className="row fligt-details-content">
            <div className="col">SCHEDULED</div>
            <div className="col tr">{flight.scheduledDeparture}</div>
          </div>
          <div className="row fligt-details-content">
            <div className="col">ACTUAL</div>
            <div className="col tr">{flight.actualDeparture}</div>
          </div>
        </div>

        <div className="col flight-details-colmn">
          <div className="row fligt-details-content">
            <div className="col">ARRIVAL STATION</div>
            <div className="col">{flight.arrivalStation}</div>
          </div>
          <div className="row fligt-details-content">
            <div className="col">SCHEDULED</div>
            <div className="col">{flight.scheduledArrival}</div>
          </div>
          <div className="row fligt-details-content">
            <div className="col">ESTIMATED</div>
            <div className="col">{flight.scheduledArrival}</div>
          </div>
        </div>
      </div>

      <div className="flight-details-footer">
        <div className="row">
          <div className="col flight-details-colmn">
            <div className="row fligt-details-content">
              <div className="col "> AIRCRAFT TYPE:</div>
              <div className="col-3 tr">
                <b>{flight.aircraftType}</b>
              </div>
            </div>
          </div>
          <div className="col flight-details-colmn">
            <div className="row fligt-details-content">
              <div className="col"> REG</div>
              <div className="col tr">
                <b>{flight.registration}</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightInfo;
