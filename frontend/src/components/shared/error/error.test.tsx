import React from "react";
import { cleanup, render } from "@testing-library/react";
import Error from ".";

afterEach(cleanup);

describe("Error Component", () => {
  it("Should render properly", () => {
    const mockError = "test";
    render(<Error error={mockError} />);
  });

  it("Should not shows if error prop is null", () => {
    const error = render(<Error error={""} />);

    expect(error.queryByTestId("error")).toBeNull();
  });

  it("Should shows if error prop is not null", () => {
    const error = render(<Error error={"test"} />);

    expect(error.queryByTestId("error")).not.toBeNull();
    expect(error.getByText("test")).not.toBeNull();
  });
});
