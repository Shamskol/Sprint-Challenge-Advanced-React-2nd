import React from "react";
import styled from "styled-components";
import { useDarkMode } from "../hooks/useDarkMode";
//import {useLocalStorage} from "../../hooks/useLocalStorage";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <StyledNav>
      <nav className="navbar">
        <h1 className="world-cup">Women's World Cup</h1>
        <div className="dark-mode__toggle">
          <div
            onClick={toggleMode}
            className={darkMode ? "toggle toggled" : "toggle"}
            data-testid="dark-mode-btn"
          />
        </div>
      </nav>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  .toggle {
    background: #f68819;
    border-radius: 50px;
    height: 18px;
    left: 0;
    position: absolute;
    transition: 0.2s;
    width: 20px;
  }
  .toggled {
    left: 18px;
  }
  .dark-mode__toggle {
    background: papayawhip;
    border-radius: 50px;
    border: 1px solid black;
    height: 20px;
    position: relative;
    width: 40px;
  }
  .navbar {
    border-bottom: 1px solid rgb(221, 221, 221);
    display: flex;
    height: 70px;
    justify-content:space-evenly;
    padding: 0 3%;
    width: 100%;

    -webkit-box-shadow: 0px 2px 15px -8px rgba(0, 0, 0, 0.42);
    -moz-box-shadow: 0px 2px 15px -8px rgba(0, 0, 0, 0.42);
    box-shadow: 0px 2px 15px -8px rgba(0, 0, 0, 0.42);
  }
  .world-cup {
    text-align: center;
    margin: 0, auto;
  }
`;

export default Navbar;
