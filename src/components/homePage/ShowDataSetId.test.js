import React from "react";
import { render } from "@testing-library/react";
import ShowDataSetId from "./ShowDataSetId";

function renderShowDataSetId(args) {
  let defaultProps = {
    dataSet: {},
  };
  const props = { ...defaultProps, ...args };
  return render(<ShowDataSetId {...props} />);
}

it('should render "DataSet Id" either when dataSet empty', () => {
  const { getByText } = renderShowDataSetId();
  getByText("DataSet Id");
});

it('should render "DataSet Id" either when dataSet is NOT empty', () => {
  const { getByText } = renderShowDataSetId({ datasetId: "string" });
  getByText("DataSet Id");
});

it('should render "Loading..." when dataSet is empty', () => {
  const { getByText } = renderShowDataSetId();
  getByText("Loading...");
});
