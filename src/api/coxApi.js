const baseUrl = "http://api.coxauto-interview.com";

// asyc function to fetch DataSet
export const getDataSet = async () => {
  const response = await fetch(`${baseUrl}/api/datasetId`);
  const data = await response.json();
  return data;
};

// async function to fetch dealer info
export const getDealerInfo = async (datasetId, dealerid) => {
  const response = await fetch(
    `${baseUrl}/api/${datasetId}/dealers/${dealerid}`
  );
  const data = await response.json();
  return data;
};

// async function to concurrently fetch dealer info from a list of dealers ids
export const getAllDealerInfo = async (datasetId, dealerids) => {
  const response = await Promise.all(
    dealerids.map((id) => fetch(`${baseUrl}/api/${datasetId}/dealers/${id}`))
  );
  const data = await Promise.all(response.map((res) => res.json()));
  return data;
};

// async function to fetch vehicle ids
export const getVehiclesIds = async (datasetId) => {
  const response = await fetch(`${baseUrl}/api/${datasetId}/vehicles`);
  const data = await response.json();
  return data;
};

// async function to fetch vehicleinfo
export const getVehicleInfo = async (datasetId, vehicleid) => {
  const response = await fetch(
    `${baseUrl}/api/${datasetId}/vehicles/${vehicleid}`
  );
  const data = await response.json();
  return data;
};

// async fucntion to concurrently fetch vehicle info from a list of vehicle ids
export const getAllVehicleInfo = async (datasetId, vehicleids) => {
  try {
    const response = await Promise.all(
      vehicleids.map((id) =>
        fetch(`${baseUrl}/api/${datasetId}/vehicles/${id}`)
      )
    );
    const data = await Promise.all(response.map((res) => res.json()));
    return data;
  } catch (err) {
    return null;
  }
};

export const addVehicles = (dealerId, vehicleInfo) => {
  const temp = [];
  for (let i = 0; i < vehicleInfo.length; i++) {
    if (dealerId === vehicleInfo[i].dealerId) {
      const newVehicleObj = Object.assign({}, vehicleInfo[i]);
      delete newVehicleObj.dealerId;
      temp.push(newVehicleObj);
    }
  }
  return temp;
};

// async function to submit ans and then return response
export const submitDataSet = async (datasetId, ans) => {
  const baseUrl = "http://api.coxauto-interview.com";
  const response = await fetch(`${baseUrl}/api/${datasetId}/answer`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ans),
  });

  const data = await response.json();

  return data;
};
