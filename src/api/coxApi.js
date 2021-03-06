/**
 * @module
 */

const baseUrl = "http://api.coxauto-interview.com";

/**
 * Function that fetches the dataset object from the cox api
 *
 * @returns {Object} Object datasetId
 */
const getDataSet = async () => {
  const response = await fetch(`${baseUrl}/api/datasetId`);
  const data = await response.json();
  return data;
};

/**
 * Async function that fetches the dealer info given the dataset id and dealer id
 *
 * @param {string} datasetId datasetId used for api call
 * @param {number} dealerid dealerId used for api call
 * @returns {Object} Object with dealerInfo
 */
const getDealerInfo = async (datasetId, dealerid) => {
  try {
    const response = await fetch(
      `${baseUrl}/api/${datasetId}/dealers/${dealerid}`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

/**
 * Async function that fetches all the dealer info given an array of dealerIds
 * conccurently to reduce the time it takes for a response
 *
 * @param {string} datasetId datasetId used for api calls
 * @param {Array} dealerids array of dealerids used for api calls
 * @returns {Array} Array of dealerInfo Objects
 */
const getAllDealerInfo = async (datasetId, dealerids) => {
  try {
    const response = await Promise.all(
      dealerids.map((id) => fetch(`${baseUrl}/api/${datasetId}/dealers/${id}`))
    );
    const data = await Promise.all(response.map((res) => res.json()));
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

/**
 * Async function that fetches a list of vehicle ids given a datasetId
 *
 * @param {string} datasetId datasetId used for api call
 * @returns {Object} Object of vehicleIds
 */
const getVehiclesIds = async (datasetId) => {
  try {
    const response = await fetch(`${baseUrl}/api/${datasetId}/vehicles`);
    const data = await response.json();

    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

/**
 * Async function that fetches vehicle info given a datasetId and a vehicle id
 *
 * @param {string} datasetId datasetId used for api call
 * @param {int} vehicleid vehicleid used for api call
 * @returns {Object} Object of vehicle info
 */
const getVehicleInfo = async (datasetId, vehicleid) => {
  try {
    const response = await fetch(
      `${baseUrl}/api/${datasetId}/vehicles/${vehicleid}`
    );
    const data = await response.json();

    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

/**
 * Async function that conccurently fetches vehicle info given a datasetId and
 * an array of vehicle ids.
 *
 * @param {string} datasetId datasetId used for api calls
 * @param {Array} vehicleids array of vehilceids used for api calls
 * @returns {Array} Array of vehicle info objects
 */
const getAllVehicleInfo = async (datasetId, vehicleids) => {
  try {
    const response = await Promise.all(
      vehicleids.map((id) =>
        fetch(`${baseUrl}/api/${datasetId}/vehicles/${id}`)
      )
    );
    const data = await Promise.all(response.map((res) => res.json()));

    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

/**
 * Function creates an array of vehicleInfo objects that correspond to the given
 * dealerId without the dealerId attribute
 *
 * @param {number} dealerId dealerId used for matching vehicleInfo.dealerId
 * @param {Object} vehicleInfo Object with attributes, dealerId, make, model, year
 * @returns {Array} Array of vehicle info objects without dealerId attribute
 */
const addVehicles = (dealerId, vehicleInfo) => {
  try {
    const temp = [];

    for (let i = 0; i < vehicleInfo.length; i++) {
      if (dealerId === vehicleInfo[i].dealerId) {
        const newVehicleObj = Object.assign({}, vehicleInfo[i]);
        delete newVehicleObj.dealerId;
        temp.push(newVehicleObj);
      }
    }

    return temp;
  } catch (err) {
    console.log(err);
    return null;
  }
};

/**
 * Async function that posts an ans object that corresponds to a given datasetId
 *
 * @param {string} datasetId datasetId used for api call
 * @param {Object} ans Object used to post to api
 * @returns {Object} Object with post response
 */
const submitDataSet = async (datasetId, ans) => {
  try {
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
  } catch (err) {
    console.log(err);
    return null;
  }
};

export {
  getDataSet,
  getDealerInfo,
  getAllDealerInfo,
  getVehicleInfo,
  getAllVehicleInfo,
  addVehicles,
  submitDataSet,
  getVehiclesIds,
};
