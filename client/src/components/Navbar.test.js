import React from "react";
import { render, fireEvent} from "@testing-library/react";
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

test("should toggle darkMode", async () => {
    const { getByTestId } = render(<Navbar />);
    const darkModeBtn = getByTestId('dark-mode-btn');
    console.log([...darkModeBtn.classList]);
    expect([...darkModeBtn.classList].includes('toggled')).toBe(false);
    await fireEvent.click(darkModeBtn);
    console.log([...darkModeBtn.classList]);
    expect([...darkModeBtn.classList].includes('toggled')).toBe(true);
  
});
