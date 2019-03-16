import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import styled from "styled-components";
import image from "../../assets/images/gwen.png";
import bgk from "../../assets/images/gwen-bgk.jpg";
import { HideUntilLoaded } from "@nearform/react-animation";
import { media } from "../theme/mediaQueries";

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 5px solid white;
  grid-column: 3 / 7;
  grid-row: 1 / 4;
  background: linear-gradient(
      to right bottom,
      rgba(196, 198, 205, 0.5),
      rgba(67, 89, 92, 0.5)
    ),
    url(${bgk});
  background-size: cover;
  background-repeat: no-repeat;

  ${media.phone`
    grid-column: 1 / 1;
    grid-row: 11/ 13;
  `}

  & img {
    width: 85%;

    ${media.phone`
    width: 120%;
  `}
  }
`;

const Nightcrawler = () => {
  const tiltNode = useRef();

  useEffect(() => {
    const vanillaTiltOptions = {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.2
    };
    VanillaTilt.init(tiltNode.current, vanillaTiltOptions);
    // return function cleanup() {
    //   tiltNode.current.VanillaTilt.destroy();
    // };
  }, []);
  return (
    <ImageContainer ref={tiltNode}>
      <HideUntilLoaded imageToLoad={image} animationIn="bounceIn">
        <img src={image} alt="spider" />
      </HideUntilLoaded>
    </ImageContainer>
  );
};

export default Nightcrawler;
