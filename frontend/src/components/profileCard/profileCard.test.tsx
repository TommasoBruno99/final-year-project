import React from "react";
import { render } from "@testing-library/react";
import ProfileCard from ".";

describe("Profile Card Component", () => {
  it("Should render properly", () => {
    render(<ProfileCard />);
  });

  it("Should show holidays left", () => {
    const { getByText } = render(<ProfileCard />);

    expect(getByText("24/24")).toBeTruthy();
  });
});
