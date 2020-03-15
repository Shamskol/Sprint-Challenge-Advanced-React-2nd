import React from "react";
import { render } from "@testing-library/react";
import Navbar from "./Navbar";

test("renders Navbar header", () => {
  //Arrange
  const { getByText } = render(<Navbar />);
  //Act
  const header = getByText(/women's world cup/i);
  //Assert
  expect(header);
  expect(header).toBeTruthy();
  expect(header).not.toBeFalsy();
});

test("toggle button ", () => {});

test("", () => {});

test("", () => {});

test("", () => {});
