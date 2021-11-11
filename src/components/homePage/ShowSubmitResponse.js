/**
 * Presentational compnent for displaying submit response
 * @module
 */
import React from "react";

function ShowSubmitResponse({ response, onClick }) {
  return (
    <div className="border rounded p-2">
      {Object.keys(response).length > 0 ? (
        <div>
          {response.success ? (
            <div>
              <p className=".text-primary" style={{ color: "green" }}>
                Message: {response.message}
              </p>
              <p className=".text-primary" style={{ color: "blue" }}>
                Success: True
              </p>
              <p className="fw-bold">
                Completed in: {response.totalMilliseconds} milliseconds
              </p>
              <p className="fw-bold">
                {response.totalMilliseconds / 1000} seconds
              </p>
            </div>
          ) : (
            <>
              <p>Message: {response.message}</p>
              <p className=".text-primary" style={{ color: "red" }}>
                Success: False
              </p>
            </>
          )}
        </div>
      ) : (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      <button onClick={onClick} type="button" className="btn btn-primary ">
        Press to Retry
      </button>
    </div>
  );
}

export default ShowSubmitResponse;
