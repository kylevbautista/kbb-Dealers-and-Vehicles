import React from "react";

function ShowSubmitResponse({ response, onClick }) {
  return (
    <div className="border rounded p-2">
      {Object.keys(response).length > 0 ? (
        <div>
          {response.success ? (
            <div>
              <p className=".text-primary">Message: {response.message}</p>
              <p className="fw-bold">
                Completed in: {response.totalMilliseconds} milliseconds
              </p>
            </div>
          ) : (
            <>
              <p>Message: {response.message}</p>
            </>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={onClick} type="button" className="btn btn-primary ">
        Press to Retry
      </button>
    </div>
  );
}

export default ShowSubmitResponse;
