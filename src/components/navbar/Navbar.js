import React from "react";
import ToggleTheme from "../theme/ToggleTheme";
import styled from "styled-components";
import Logo from "./Logo";
import RubberBand from "react-reveal/RubberBand";
import Jump from "react-reveal/Jump";
import Jello from "react-reveal/Jump";
import { Link } from "react-router-dom";
import { media } from "../theme/mediaQueries";

const Search = styled.h1`
  font-family: "Sweet Cake";
  font-size: 3rem;
  text-shadow: 0 3px 2px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  text-shadow: 0 1px 0px #378ab4, 1px 0 0px #5dabcd, 1px 2px 1px #378ab4,
    2px 1px 1px #5dabcd, 2px 3px 2px #378ab4, 3px 2px 2px #5dabcd,
    3px 4px 2px #378ab4, 4px 3px 3px #5dabcd, 4px 5px 3px #378ab4,
    5px 4px 2px #111, 5px 6px 2px #111, 6px 5px 2px #111, 6px 7px 1px #111,
    7px 6px 1px #111, 7px 8px 0px #111, 8px 7px 0px #111, 9px 8px 0px #111;
  transition: all 0.3s ease;
  ${media.phone`
  font-size: 1.5rem;

  `}

  &:hover {
    transform: scale(1.05);
  }
`;

const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 10px;
  ${media.phone`
    padding: 2px;
    justify-content: space-between;
    margin: 0;
  `}
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <Jump duration={2000}>
        <Logo />
      </Jump>
      <RubberBand duration={2000}>
        <Link to="/search" style={{ textDecoration: "none", color: "inherit" }}>
          <Search>searh</Search>
        </Link>
      </RubberBand>
      <Jello duration={2000}>
        <ToggleTheme />
      </Jello>
    </StyledNavbar>
  );
};

export default Navbar;
