# Cox coding exercise

Simple React app that displays Dealer and Vehicle data being fetched, and
displays the amount of time it took to create and post the answer to endpoint.

### Note:

Using React, I noticed retrieving and posting is about 1 second slower than pure javascript. Elapsed Time around 9.5 seconds. <br>
Pure javascript running in a Node.js environment is about 1 second faster than React. Elapsed Time around 8.5 seconds <br>
Both however, are significantly under 30 seconds.

# Documentaion generated using JSDoc

Open `/docs/index.html` in browser to view all documentaion in html friendly format<br>
coxApi github friendly documentaion down below <br>

# How to run

### `npm install`

To install dependencies

### `npm start`

To run react app locally. Will execute all api calls on start/load and display results.
User Interface has a Try Again button to redo the process.

### `npm test`

To run unit tests

# API Documentation

<a name="module_coxApi"></a>

## coxApi

- [coxApi](#module_coxApi)
  - [~getDataSet()](#module_coxApi..getDataSet) ⇒ <code>Object</code>
  - [~getDealerInfo(datasetId, dealerid)](#module_coxApi..getDealerInfo) ⇒ <code>Object</code>
  - [~getAllDealerInfo(datasetId, dealerids)](#module_coxApi..getAllDealerInfo) ⇒ <code>Array</code>
  - [~getVehiclesIds(datasetId)](#module_coxApi..getVehiclesIds) ⇒ <code>Object</code>
  - [~getVehicleInfo(datasetId, vehicleid)](#module_coxApi..getVehicleInfo) ⇒ <code>Object</code>
  - [~getAllVehicleInfo(datasetId, vehicleids)](#module_coxApi..getAllVehicleInfo) ⇒ <code>Array</code>
  - [~addVehicles(dealerId, vehicleInfo)](#module_coxApi..addVehicles) ⇒ <code>Array</code>
  - [~submitDataSet(datasetId, ans)](#module_coxApi..submitDataSet) ⇒ <code>Object</code>

<a name="module_coxApi..getDataSet"></a>

### coxApi~getDataSet() ⇒ <code>Object</code>

Function that fetches the dataset object from the cox api

**Kind**: inner method of [<code>coxApi</code>](#module_coxApi)  
**Returns**: <code>Object</code> - Object datasetId  
<a name="module_coxApi..getDealerInfo"></a>

### coxApi~getDealerInfo(datasetId, dealerid) ⇒ <code>Object</code>

Async function that fetches the dealer info given the dataset id and dealer id

**Kind**: inner method of [<code>coxApi</code>](#module_coxApi)  
**Returns**: <code>Object</code> - Object with dealerInfo

| Param     | Type                | Description                 |
| --------- | ------------------- | --------------------------- |
| datasetId | <code>string</code> | datasetId used for api call |
| dealerid  | <code>number</code> | dealerId used for api call  |

<a name="module_coxApi..getAllDealerInfo"></a>

### coxApi~getAllDealerInfo(datasetId, dealerids) ⇒ <code>Array</code>

Async function that fetches all the dealer info given an array of dealerIds
conccurently to reduce the time it takes for a response

**Kind**: inner method of [<code>coxApi</code>](#module_coxApi)  
**Returns**: <code>Array</code> - Array of dealerInfo Objects

| Param     | Type                | Description                           |
| --------- | ------------------- | ------------------------------------- |
| datasetId | <code>string</code> | datasetId used for api calls          |
| dealerids | <code>Array</code>  | array of dealerids used for api calls |

<a name="module_coxApi..getVehiclesIds"></a>

### coxApi~getVehiclesIds(datasetId) ⇒ <code>Object</code>

Async function that fetches a list of vehicle ids given a datasetId

**Kind**: inner method of [<code>coxApi</code>](#module_coxApi)  
**Returns**: <code>Object</code> - Object of vehicleIds

| Param     | Type                | Description                 |
| --------- | ------------------- | --------------------------- |
| datasetId | <code>string</code> | datasetId used for api call |

<a name="module_coxApi..getVehicleInfo"></a>

### coxApi~getVehicleInfo(datasetId, vehicleid) ⇒ <code>Object</code>

Async function that fetches vehicle info given a datasetId and a vehicle id

**Kind**: inner method of [<code>coxApi</code>](#module_coxApi)  
**Returns**: <code>Object</code> - Object of vehicle info

| Param     | Type                | Description                 |
| --------- | ------------------- | --------------------------- |
| datasetId | <code>string</code> | datasetId used for api call |
| vehicleid | <code>int</code>    | vehicleid used for api call |

<a name="module_coxApi..getAllVehicleInfo"></a>

### coxApi~getAllVehicleInfo(datasetId, vehicleids) ⇒ <code>Array</code>

Async function that conccurently fetches vehicle info given a datasetId and
an array of vehicle ids.

**Kind**: inner method of [<code>coxApi</code>](#module_coxApi)  
**Returns**: <code>Array</code> - Array of vehicle info objects

| Param      | Type                | Description                            |
| ---------- | ------------------- | -------------------------------------- |
| datasetId  | <code>string</code> | datasetId used for api calls           |
| vehicleids | <code>Array</code>  | array of vehilceids used for api calls |

<a name="module_coxApi..addVehicles"></a>

### coxApi~addVehicles(dealerId, vehicleInfo) ⇒ <code>Array</code>

Function creates an array of vehicleInfo objects that correspond to the given
dealerId without the dealerId attribute

**Kind**: inner method of [<code>coxApi</code>](#module_coxApi)  
**Returns**: <code>Array</code> - Array of vehicle info objects without dealerId attribute

| Param       | Type                | Description                                         |
| ----------- | ------------------- | --------------------------------------------------- |
| dealerId    | <code>number</code> | dealerId used for matching vehicleInfo.dealerId     |
| vehicleInfo | <code>Object</code> | Object with attributes, dealerId, make, model, year |

<a name="module_coxApi..submitDataSet"></a>

### coxApi~submitDataSet(datasetId, ans) ⇒ <code>Object</code>

Async function that posts an ans object that corresponds to a given datasetId

**Kind**: inner method of [<code>coxApi</code>](#module_coxApi)  
**Returns**: <code>Object</code> - Object with post response

| Param     | Type                | Description                 |
| --------- | ------------------- | --------------------------- |
| datasetId | <code>string</code> | datasetId used for api call |
| ans       | <code>Object</code> | Object used to post to api  |

### Project created using create-react-app
