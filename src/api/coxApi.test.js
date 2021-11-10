import {
  getDataSet,
  getVehiclesIds,
  getAllVehicleInfo,
  submitDataSet,
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
  it("returns an array of vehicle info given an array of vehicle ids", async () => {
    fetch.mockImplementationOnce(() => Promise.reject("API failure"));
    const data = getAllVehicleInfo("string", [1, 2, 3]);
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
