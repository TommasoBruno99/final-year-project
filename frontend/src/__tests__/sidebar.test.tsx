import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SideBar from "../components/shared/header/sidebar";

const toggle = jest.fn();

afterEach(cleanup);

describe("Sidebar Component", () => {
  it("Should render properly", () => {
    const sidebar = render(
      <BrowserRouter>
        <SideBar toggle={toggle} isToggled={true} />
      </BrowserRouter>
    );

    expect(sidebar.getByText(/login/i)).toBeTruthy();
  });

  it("Should have negative top if isToggled prop is false", () => {
    const sidebar = render(
      <BrowserRouter>
        <SideBar toggle={toggle} isToggled={false} />
      </BrowserRouter>
    );

    const container = sidebar.getByTestId("sidebar-container");

    expect(getComputedStyle(container)).toHaveProperty("top", "-100%");
  });

  it("Should have top 0px if isToggled prop is true", () => {
    const sidebar = render(
      <BrowserRouter>
        <SideBar toggle={toggle} isToggled={true} />
      </BrowserRouter>
    );

    const container = sidebar.getByTestId("sidebar-container");

    expect(getComputedStyle(container)).toHaveProperty("top", "0px");
  });

  it("Should call function toggle when the times icon is clicked", () => {
    const sidebar = render(
      <BrowserRouter>
        <SideBar toggle={toggle} isToggled={true} />
      </BrowserRouter>
    );

    const icon = sidebar.getByTestId("sidebar-icon");
    fireEvent.click(icon);
    expect(toggle).toBeCalledTimes(1);
  });
});
