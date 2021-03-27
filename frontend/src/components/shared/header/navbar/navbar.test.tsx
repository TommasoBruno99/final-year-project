import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import NavBar from ".";
import { BrowserRouter } from "react-router-dom";

const toggle = jest.fn();

afterEach(cleanup);

describe("Navbar Component", () => {
  it("Should render properly", () => {
    const navbar = render(
      <BrowserRouter>
        <NavBar toggle={toggle} />
      </BrowserRouter>
    );

    expect(navbar.getByText(/holiday-now/i)).toBeTruthy();
    expect(navbar.getByText(/Login/i)).toBeTruthy();
  });

  it("Should call function toggle when the fa icon is clicked", () => {
    const navbar = render(
      <BrowserRouter>
        <NavBar toggle={toggle} />
      </BrowserRouter>
    );

    fireEvent.click(navbar.getByTestId("navbar-fa"));
    expect(toggle).toBeCalledTimes(1);
  });
});
