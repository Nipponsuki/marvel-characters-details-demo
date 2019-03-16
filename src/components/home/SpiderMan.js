import React, { useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import styled from "styled-components";
import image from "../../assets/images/spider.png";
import bgk from "../../assets/images/spider-bgk.png";
import { HideUntilLoaded } from "@nearform/react-animation";
import { media } from "../theme/mediaQueries";
import { Link } from "react-router-dom";
import { useHttp } from "../hooks/http";
import { log } from "util";

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  border: 5px solid white;
  grid-column: 1 / 3;
  grid-row: 4 / 8;
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
    grid-row: 5/ 7;
  `}

  /* &::after {
    border-radius: 5px;
    content: "Yay";
    width: 5rem;
    height: 3rem;
    position: absolute;
    top: 0;
    right: 5;
    background: #e52536;
    -webkit-clip-path: polygon(
      30% 27%,
      49% 4%,
      100% 8%,
      100% 86%,
      43% 81%,
      28% 55%,
      0 39%
    );
    clip-path: polygon(
      30% 27%,
      49% 4%,
      100% 8%,
      100% 86%,
      43% 81%,
      28% 55%,
      0 39%
    );
  } */

  & img {
    width: 100%;

    ${media.phone`
    width:80%;
  `}
  }
`;

const SpiderMan = () => {
  // const [isLoading, fetchedData] = useHttp(
  //   `https://cors-anywhere.herokuapp.com/http://www.comicvine.com/api/search/?api_key=${API_KEY}&=query=Hulk`,
  //   []
  // );
  // let loadedCharacter = null;

  // if (fetchedData) {
  //   console.log(fetchedData);
  // loadedCharacter = {
  //   id: props.selectedChar,
  //   name: fetchedData.name,
  //   height: fetchedData.height,
  //   colors: {
  //     hair: fetchedData.hair_color,
  //     skin: fetchedData.skin_color
  //   },
  //   gender: fetchedData.gender,
  //   movieCount: fetchedData.films.length
  // };

  // let content = <p>Loading Character...</p>;
  const tiltNode = useRef();

  useEffect(() => {
    const vanillaTiltOptions = {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
      scale: 1.04
    };
    VanillaTilt.init(tiltNode.current, vanillaTiltOptions);
    // return function cleanup() {
    //   tiltNode.current.VanillaTilt.destroy();
    // };
  }, []);
  return (
    <ImageContainer ref={tiltNode}>
      <HideUntilLoaded imageToLoad={image} animationIn="bounceIn">
        <Link to="/spiderman">
          <img src={image} alt="logan" />
        </Link>
      </HideUntilLoaded>
    </ImageContainer>
  );
};

export default SpiderMan;
