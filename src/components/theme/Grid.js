import styled from "styled-components";
import { media } from "./mediaQueries";

export const Grid = styled.div`
  padding: 2rem;
  padding-right: 2.5rem;
  padding-bottom: 0;
  height: calc(100vh - 100px);
  box-sizing: border-box;
  display: grid;
  grid-gap: 30px;
  /* Make the grid 10 columns wide, every other taking up twice the free space */
  grid-template-columns: repeat(5, 1fr 2fr);

  /* Make the grid have 10 explicit rows, 50px high each */
  grid-template-rows: repeat(10, 50px);
  grid-auto-flow: dense;
  margin-top: 10px;

  ${media.phone`
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    margin-top: 120px;
  `}
`;

export const Item = styled.div`
  border: 10px solid white;
  background: transparent;
`;

export const ImageContainer = styled.div`
  width: 6rem;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  ${media.phone`
    width: 3rem;
    height: 3rem;
  `}

  &:hover {
    transform: scale(1.05);
  }

  & img {
    border-radius: 50%;
    width: 100%;
    box-shadow: 7px 7px 5px -4px rgba(0, 0, 0, 0.75);
  }
`;
