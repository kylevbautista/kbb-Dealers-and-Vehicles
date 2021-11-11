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
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export default ShowDataSetId;
