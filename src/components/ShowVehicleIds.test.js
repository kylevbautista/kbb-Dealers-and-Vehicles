import React from "react";
import { render } from "@testing-library/react";
import ShowVehicleIds from "./ShowVehicleIds";

function renderShowVehicleIds(args) {
  let defaultProps = {
    vehicleIds: [],
  };
  const props = { ...defaultProps, ...args };
  return render(<ShowVehicleIds {...props} />);
}

it('should render "Vehicle Ids" either when vehiclsIds empty', () => {
  const { getByText } = renderShowVehicleIds();
  getByText("Vehicle Ids");
});

it('should render "Vehicle Ids" when vehiclsIds is NOT empty', () => {
  const { getByText } = renderShowVehicleIds([0, 1, 2]);
  getByText("Vehicle Ids");
});

it('should render "Loading..." when vehiclsIds is empty', () => {
  const { getByText } = renderShowVehicleIds();
  getByText("Loading...");
});
