import React from "react";

function ShowDataSetId({ dataSet }) {
  return (
    <>
      <h4>DataSet Id</h4>
      <div
        className="border rounded"
        style={{
          height: "275px",
        }}
      >
        {Object.keys(dataSet).length > 0 ? (
          <p>{dataSet.datasetId}</p>
        ) : (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
    </>
  );
}

export default ShowDataSetId;
