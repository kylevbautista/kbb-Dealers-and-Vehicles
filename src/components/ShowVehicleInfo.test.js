import React from "react";
import { render } from "@testing-library/react";
import ShowVehicleInfo from "./ShowVehicleInfo";

function renderShowVehicleInfo(args) {
  let defaultProps = {
    allVehicleInfo: [],
  };
  const props = { ...defaultProps, ...args };
  return render(<ShowVehicleInfo {...props} />);
}

it('should render "Vehicle Info" when allVehicleInfo empty', () => {
  const { getByText } = renderShowVehicleInfo();
  getByText("Vehicle Info");
});

it('should render "Vehicle Info" when allVehicleInfo is NOT empty', () => {
  const { getByText } = renderShowVehicleInfo([
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
  ]);
  getByText("Vehicle Info");
});

it('should render "Loading..." when allVehicleInfo is empty', () => {
  const { getByText } = renderShowVehicleInfo();
  getByText("Loading...");
});
