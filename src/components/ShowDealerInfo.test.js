import React from "react";
import { render } from "@testing-library/react";
import ShowDealerInfo from "./ShowDealerInfo";

function renderShowDealerInfo(args) {
  let defaultProps = {
    allDealerInfo: [],
  };
  const props = { ...defaultProps, ...args };
  return render(<ShowDealerInfo {...props} />);
}

it('should render "DataSet Id" either when dataSet empty', () => {
  const { getByText } = renderShowDealerInfo();
  getByText("Dealer Info");
});

it('should render "DataSet Id" either when dataSet is NOT empty', () => {
  const { getByText } = renderShowDealerInfo([
    {
      dealerId: 0,
      name: "string",
    },
  ]);
  getByText("Dealer Info");
});

it('should render "Loading..." when allDealerInfo is empty', () => {
  const { getByText } = renderShowDealerInfo();
  getByText("Loading...");
});
