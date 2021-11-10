import React from "react";
import { useEffect, useState } from "react";
import * as coxApi from "../api/coxApi";

function HomePage() {
  const [dataSet, setDataSet] = useState({});
  const [vehicleIds, setVehicleIds] = useState([]);
  // const [vehicleInfo, setVehicleInfo] = useState([]);
  const [allVehicleInfo, setAllVehicleInfo] = useState([]);
  const [allDealerInfo, setAllDealerInfo] = useState({});

  const getDataSetInfo = async () => {
    const ans = { dealers: [] };
    const dataset = await coxApi.getDataSet();
    console.log(dataset);
    setDataSet(dataset);

    const vehiclesids = await coxApi.getVehiclesIds(dataset.datasetId);
    setVehicleIds(vehiclesids.vehicleIds);
    console.log("vehicleids", vehiclesids);

    // const vehicleinfo = await coxApi.getVehicleInfo(
    //   dataset.datasetId,
    //   vehiclesids.vehicleIds[0]
    // );
    // setVehicleInfo(vehicleinfo);
    // console.log(vehicleinfo);
    const allvehicleinfo = await coxApi.getAllVehicleInfo(
      dataset.datasetId,
      vehiclesids.vehicleIds
    );
    setAllVehicleInfo(allvehicleinfo);
    console.log("all vehicle", allvehicleinfo);

    // for loop to add unique dealerids to array to use for getAllDealerInfo
    const dealerIds = [];
    for (let i = 0; i < allvehicleinfo.length; i++) {
      if (dealerIds.indexOf(allvehicleinfo[i].dealerId) === -1) {
        dealerIds.push(allvehicleinfo[i].dealerId);
      }
    }
    const alldealerinfo = await coxApi.getAllDealerInfo(
      dataset.datasetId,
      dealerIds
    );
    setAllDealerInfo(alldealerinfo);
    console.log("all dealers", alldealerinfo);

    for (let i = 0; i < alldealerinfo.length; i++) {
      if (ans.dealers.indexOf(alldealerinfo[i].dealerId) === -1) {
        const vehicleArray = coxApi.addVehicles(
          alldealerinfo[i].dealerId,
          allvehicleinfo
        );
        ans.dealers.push({ ...alldealerinfo[i], vehicles: vehicleArray });
      }
    }
    console.log(ans);
    const submitDataSetResponse = await coxApi.submitDataSet(
      dataset.datasetId,
      ans
    );
    console.log(submitDataSetResponse);
  };

  useEffect(() => {
    getDataSetInfo();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        {Object.keys(dataSet).length > 0 ? (
          <div className="col-3">datasetId: {dataSet.datasetId}</div>
        ) : (
          <div className="col-3">Loading...</div>
        )}
        <div className="col-3">
          {vehicleIds.length > 0 ? (
            vehicleIds.map((id) => <p key={id}>vehicleId:{id}</p>)
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="col-3">
          <div
            className="container border"
            style={{
              height: "500px",
              width: "100%",
              overflowY: "scroll",
            }}
          >
            {allVehicleInfo.length > 0 ? (
              allVehicleInfo.map((vehicle) => (
                <div key={vehicle.vehicleId}>
                  <p>{vehicle.vehicleId}</p>
                  <p>{vehicle.year}</p>
                  <p>{vehicle.make}</p>
                  <p>{vehicle.model}</p>
                  <hr />
                </div>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
        <div className="col-3">
          {allDealerInfo.length > 0 ? (
            allDealerInfo.map((dealer) => (
              <div key={dealer.dealerId}>
                <p>{dealer.dealerId}</p>
                <p>{dealer.name}</p>
                <hr />
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
