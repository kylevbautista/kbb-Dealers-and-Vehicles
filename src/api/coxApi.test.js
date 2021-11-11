import {
  getDataSet,
  getVehiclesIds,
  getAllVehicleInfo,
  submitDataSet,
  getAllDealerInfo,
  addVehicles,
} from "./coxApi";

describe("getDataSet", () => {
  it("returns an object with the key datasetId and string value", async () => {
    const expected = {
      datasetId: "string",
    };
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(expected),
      })
    );
    const datasetId = await getDataSet();
    expect(datasetId).toEqual(expected);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});

describe("getVehicleIds", () => {
  it("returns an object with and array of vehicleIds", async () => {
    const expected = {
      vehicleIds: [0],
    };
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(expected),
      })
    );
    const vehicleids = await getVehiclesIds("string");
    expect(vehicleids).toEqual(expected);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});

describe("getAllVehicleInfo", () => {
  it("returns an array of vehicle info objects given an array of vehicle ids", async () => {
    const expected = [
      {
        vehicleId: 0,
        year: 0,
        make: "string",
        model: "string",
        dealerId: 0,
      },
      {
        vehicleId: 0,
        year: 0,
        make: "string",
        model: "string",
        dealerId: 0,
      },
    ];
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            vehicleId: 0,
            year: 0,
            make: "string",
            model: "string",
            dealerId: 0,
          }),
      })
    );
    const vehicleinfo = await getAllVehicleInfo("string", [1, 2]);
    expect(vehicleinfo).toEqual(expected);
  });
});

describe("submitDataSet", () => {
  it("returns an object with success, message, totalMilliseconds keys", async () => {
    const expected = {
      success: true,
      message: "string",
      totalMilliseconds: 0,
    };
    const ans = {
      dealers: [
        {
          dealerId: 0,
          name: "string",
          vehicles: [
            {
              vehicleId: 0,
              year: 0,
              make: "string",
              model: "string",
            },
          ],
        },
      ],
    };
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(expected),
      })
    );
    const submiteresponse = await submitDataSet("string", ans);
    expect(submiteresponse).toEqual(expected);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});

describe("getAllDealerInfo", () => {
  it("returns an array of dealer info objects given and array of dealerIds", async () => {
    const expected = [
      {
        dealerId: 0,
        name: "string",
      },
      {
        dealerId: 0,
        name: "string",
      },
      {
        dealerId: 0,
        name: "string",
      },
    ];
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            dealerId: 0,
            name: "string",
          }),
      })
    );
    const dealerinfo = await getAllDealerInfo("string", [1, 2, 3]);
    expect(dealerinfo).toEqual(expected);
  });
});

describe("addVehicles", () => {
  it("returns an array of vehicle info objects without dealerId attribute that match the a dealerId and array of vehicle info objects", () => {
    const vehicleobject = {
      year: 0,
      make: "string",
      model: "string",
    };
    const input = [
      { ...vehicleobject, dealerId: 0, vehicleId: 0 },
      { ...vehicleobject, dealerId: 1, vehicleId: 1 },
      { ...vehicleobject, dealerId: 2, vehicleId: 2 },
    ];
    const vehicleinfoarray0 = addVehicles(0, input);
    const vehicleinfoarray1 = addVehicles(1, input);
    const vehicleinfoarray2 = addVehicles(2, input);
    expect(vehicleinfoarray0).toEqual([{ ...vehicleobject, vehicleId: 0 }]);
    expect(vehicleinfoarray1).toEqual([{ ...vehicleobject, vehicleId: 1 }]);
    expect(vehicleinfoarray2).toEqual([{ ...vehicleobject, vehicleId: 2 }]);
  });
});
