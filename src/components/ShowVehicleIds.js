/**
 * Presentational Component in charge of presenting Vehicle Ids
 */
import React from "react";

export default function VehicleIds({ vehicleIds }) {
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
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}
