/**
 * Presentational Component in charge of presenting Vehicle Ids
 * @module
 */
import React from "react";

function ShowVehicleIds({ vehicleIds }) {
  return (
    <>
      <h4>Vehicle Ids</h4>
      <div
        className="border"
        style={{
          height: "275px",
          width: "100%",
          overflowY: "scroll",
        }}
      >
        {vehicleIds.length > 0 ? (
          vehicleIds.map((id) => <p key={id}>vehicleId:{id}</p>)
        ) : (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
    </>
  );
}

export default ShowVehicleIds;
