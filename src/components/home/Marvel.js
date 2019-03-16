import React from "react";
import styled from "styled-components";
import Zoom from "react-reveal/Zoom";
import { Item } from "../theme/Grid";
import { media } from "../theme/mediaQueries";
const letters = ["m", "a", "r", "v", "e", "l"];

const StyledMarvel = styled(Item)`
  grid-column: -1 / -3;
  grid-row: 1/8;
  display: grid;
  justify-content: center;
  background: #e8212f;
  align-items: center;
  font-weight: bold;
  font-family: "Heroes Legend";
  text-shadow: 0 1px 0px #378ab4, 1px 0 0px #5dabcd, 1px 2px 1px #378ab4,
    2px 1px 1px #5dabcd, 2px 3px 2px #378ab4, 3px 2px 2px #5dabcd,
    3px 4px 2px #378ab4, 4px 3px 3px #5dabcd, 4px 5px 3px #378ab4,
    5px 4px 2px #5dabcd, 5px 6px 2px #378ab4, 6px 5px 2px #5dabcd,
    6px 7px 1px #378ab4, 7px 6px 1px #5dabcd, 7px 8px 0px #378ab4,
    8px 7px 0px #5dabcd;
  transform: skew(-5deg);
  padding: 5px;
  padding-top: 0;
  height: auto;

  ${media.phone`
    display: none;
  `}
`;

const Letter = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
  padding: 0;
  margin: 0;
  line-height: 0;
  transform: translateY(20px);

  ${media.phone`
   display: none;
  `}
`;

const Marvel = () => {
  return (
    <StyledMarvel>
      {letters.map((item, i) => (
        <Letter key={i}>
          <Zoom delay={i * 200}>{item}</Zoom>
        </Letter>
      ))}
    </StyledMarvel>
  );
};

export default Marvel;
