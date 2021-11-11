import React from "react";
import { render } from "@testing-library/react";
import ShowSubmitResponse from "./ShowSubmitResponse";

function renderShowSubmitResponse(args) {
  let defaultProps = {
    response: {},
    onClick: () => {
      console.log("hi");
    },
  };
  const props = { ...defaultProps, ...args };
  return render(<ShowSubmitResponse {...props} />);
}

it('should render "Loading..." when response is empty', () => {
  const { getByText } = renderShowSubmitResponse();
  getByText("Loading...");
});
