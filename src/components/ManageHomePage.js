/**
 * HomePage Container component. Contains logic needed to display
 * Dealers and Vehicles data.
 * @module
 */
import React from "react";
import { useEffect, useState } from "react";
import * as coxApi from "../api/coxApi";

//components
import ShowDealerInfo from "./ShowDealerInfo";
import ShowVehicleInfo from "./ShowVehicleInfo";
import ShowVehicleIds from "./ShowVehicleIds";
import ShowSubmitResponse from "./ShowSubmitResponse";
import ShowDataSetId from "./ShowDataSetId";

function HomePage() {
  const [dataSet, setDataSet] = useState({});
  const [vehicleIds, setVehicleIds] = useState([]);
  const [allVehicleInfo, setAllVehicleInfo] = useState([]);
  const [allDealerInfo, setAllDealerInfo] = useState({});
  const [submitResponse, setSubmitResponse] = useState({});

  const getDealersandVehicles = async () => {
    // Object that will hold ans for submitDataSet
    const ans = { dealers: [] };

    // Grab dataset and set it to dataSet state
    const dataset = await coxApi.getDataSet();
    setDataSet(dataset);

    // Grab vehicle ids and set it to vehicleids state
    const vehiclesids = await coxApi.getVehiclesIds(dataset.datasetId);
    setVehicleIds(vehiclesids.vehicleIds);

    // Grab all vehicleInfo and set it to allvehicleinfo state
    const allvehicleinfo = await coxApi.getAllVehicleInfo(
      dataset.datasetId,
      vehiclesids.vehicleIds
    );
    setAllVehicleInfo(allvehicleinfo);

    // For loop that extracts dealerIds from allvehicleinfo and put it into its own array, to be used for api call
    const dealerIds = [];
    for (let i = 0; i < allvehicleinfo.length; i++) {
      if (dealerIds.indexOf(allvehicleinfo[i].dealerId) === -1) {
        dealerIds.push(allvehicleinfo[i].dealerId);
      }
    }

    // Grab all dealer info and set it to alldealerinfo state
    const alldealerinfo = await coxApi.getAllDealerInfo(
      dataset.datasetId,
      dealerIds
    );
    setAllDealerInfo(alldealerinfo);

    // For loop that extracts parses all the fetched data into the correct structed ans to be submited
    for (let i = 0; i < alldealerinfo.length; i++) {
      if (ans.dealers.indexOf(alldealerinfo[i].dealerId) === -1) {
        const vehicleArray = coxApi.addVehicles(
          alldealerinfo[i].dealerId,
          allvehicleinfo
        );
        ans.dealers.push({ ...alldealerinfo[i], vehicles: vehicleArray });
      }
    }

    // Submit created ans object, then grab submit response, then set response to submitDataSetResponse
    const submitDataSetResponse = await coxApi.submitDataSet(
      dataset.datasetId,
      ans
    );
    setSubmitResponse(submitDataSetResponse);
  };

  /**
   * On load or refresh getDealersandVehicles() will execute
   */
  useEffect(() => {
    getDealersandVehicles();
  }, []);

  /**
   * Click handler for try again button
   * Clears all local states and executes getDealersandVehicles()
   */
  const clickHandler = () => {
    // Clear state
    setDataSet({});
    setVehicleIds([]);
    setAllVehicleInfo([]);
    setAllDealerInfo({});
    setSubmitResponse({});

    // Grab dealers and vehicles
    getDealersandVehicles();
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-10 col-md-3 mt-5">
          <ShowDataSetId dataSet={dataSet} />
        </div>
        <div className="col-10 col-md-3 mt-5">
          <ShowVehicleIds vehicleIds={vehicleIds} />
        </div>
        <div className="col-10 col-md-3 mt-5">
          <ShowVehicleInfo allVehicleInfo={allVehicleInfo} />
        </div>
        <div className="col-10 col-md-3 mt-5">
          <ShowDealerInfo allDealerInfo={allDealerInfo} />
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-10 col-md-5">
          {Object.keys(submitResponse).length > 0 && (
            <ShowSubmitResponse
              response={submitResponse}
              onClick={clickHandler}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
