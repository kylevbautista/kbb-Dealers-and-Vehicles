/**
 * Presentational Component in charge of presenting Dealer Info
 */
import React from "react";

function ShowDealerInfo({ allDealerInfo }) {
  return (
    <>
      <h4>Dealer Info</h4>
      <div
        className="border rounded"
        style={{
          height: "275px",
        }}
      >
        {allDealerInfo.length > 0 ? (
          allDealerInfo.map((dealer) => (
            <div key={dealer.dealerId}>
              <p>Id: {dealer.dealerId}</p>
              <p>Name: {dealer.name}</p>
              <hr />
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export default ShowDealerInfo;
