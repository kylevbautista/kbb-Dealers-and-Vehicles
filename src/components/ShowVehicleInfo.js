/**
 * Presentational Component in charge of presenting Vehicle Info
 */
import React from "react";

function ShowVehicleInfo({ allVehicleInfo }) {
  return (
    <>
      <h4>Vehicle Info</h4>
      <div
        className="container border rounded"
        style={{
          height: "275px",
          width: "100%",
          overflowY: "scroll",
        }}
      >
        {allVehicleInfo.length > 0 ? (
          allVehicleInfo.map((vehicle) => (
            <div key={vehicle.vehicleId}>
              <p>Id: {vehicle.vehicleId}</p>
              <p>Year: {vehicle.year}</p>
              <p>Make: {vehicle.make}</p>
              <p>Model: {vehicle.model}</p>
              <hr />
            </div>
          ))
        ) : (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
    </>
  );
}

export default ShowVehicleInfo;
