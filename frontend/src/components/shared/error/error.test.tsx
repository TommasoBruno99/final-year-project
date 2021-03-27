import React from "react";
import { cleanup, render } from "@testing-library/react";
import Error from ".";
import { AuthContextProvider } from "../../../store/context";

afterEach(cleanup);

describe("Error Component", () => {
  it("Should render properly", () => {
    render(<Error />);
  });

  it("Should not shows if error state is null", () => {
    const error = render(
      <AuthContextProvider>
        <Error />
      </AuthContextProvider>
    );

    expect(error.queryByTestId("error")).toBeNull();
  });
});
