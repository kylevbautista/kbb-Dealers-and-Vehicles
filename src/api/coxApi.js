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

// async function to fetch vehicle ids
export const getVehiclesIds = async (datasetId) => {
  const response = await fetch(`${baseUrl}/api/${datasetId}/vehicles`);
  const data = await response.json();
  return data;
};

// async function to fetch
export const getVehicleInfo = async (datasetId, vehicleid) => {
  const response = await fetch(
    `${baseUrl}/api/${datasetId}/vehicles/${vehicleid}`
  );
  const data = await response.json();
  return data;
};
