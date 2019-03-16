import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import bgk from "../../assets/images/search-bgk.jpg";
import image from "../../assets/images/spider-details.jpeg";
import { media } from "../theme/mediaQueries";
import axios from "axios";

const API_KEY = "799d27d82d5511784e7d56f97fdb30ceef5c695e";

const Wrapper = styled.div`
  background: linear-gradient(
      to right bottom,
      rgba(196, 198, 205, 0.5),
      rgba(67, 89, 92, 0.5)
    ),
    url(${bgk});
  background-size: cover;
  background-repeat: no-repeat;
  display: grid;
  grid-template-rows: auto;
  padding: 5px;

  border: 5px solid white;
  width: 100%;
  height: calc(100vh - 120px);
  box-sizing: border-box;
  justify-items: center;
  align-content: space-around;
  grid-gap: 20px;

  ${media.phone`
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    margin-top: 120px;
  `}
`;

const Input = styled.input`
  margin: 10px 0;
  border: 8px solid white;
  background: #e8212f;
  font-family: monospace;
  font-size: 1.6rem;
  padding: 5px;
  color: white;
  text-align: center;
  box-shadow: 7px 7px 5px -4px rgba(0, 0, 0, 0.75);
  height: 4rem;
  text-transform: lowercase;
  line-height: 2;
  box-sizing: border-box;

  &::-webkit-input-placeholder {
    color: white;
    padding: 0;
    line-height: 2;
  }

  ${media.phone`
    width: 100%;
  `}
`;

const Content = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 30rem auto 1fr;
  grid-template-rows: repeat(5, auto);
  width: 100%;
  font-family: "Heroes Legend";
  color: #111;

  ${media.phone`
    grid-template-columns: 1fr;
    
  `}
`;

const Image = styled.div`
  background: transparent;
  grid-area: image;
  border: 8px solid white;
  grid-column: 1/1;
  grid-row: 1/-2;
  box-shadow: 7px 7px 5px -4px rgba(0, 0, 0, 0.75);

  ${media.phone`
    grid-column: 1/ span 1;
    grid-row: 1/ span 1;
  `}

  & img {
    width: 100%;
    height: 100%;
  }
`;
const Name = styled.div`
  background: white;
  grid-column: 2/-1;
  grid-row: 1 / span 1;
  box-shadow: 7px 7px 5px -4px rgba(0, 0, 0, 0.75);
  text-align: center;

  ${media.phone`
    grid-column: 1/ span 1;
    grid-row: 2/ span 1;
  `}
`;
const Tag = styled.div`
  background: white;
  box-shadow: 7px 7px 5px -4px rgba(0, 0, 0, 0.75);
  padding: 5px;
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  ${media.phone`
    display: none;
  `}
`;
const Real = styled.div`
  background: white;
  box-shadow: 7px 7px 5px -4px rgba(0, 0, 0, 0.75);
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  ${media.phone`
    display: none;
  `}
`;
const Desc = styled.div`
  background: white;
  box-shadow: 7px 7px 5px -4px rgba(0, 0, 0, 0.75);
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  grid-column: 1 / -1;
  line-height: 2;
  font-size: 0.8rem;
  text-align: justify;

  ${media.phone`
    grid-column: 1/ span 1;
    grid-row: 3/ span 1;
    font-size: 0.5rem;
    font-weight: 300;

  `}
`;

const index = () => {
  // const [data, setData] = useState({ hits: [] });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(
  //       `https://gateway.marvel.com:443/v1/public/characters?name=hulk&apikey=a3a484e31841d973511243e7c728d580`
  //     );

  //     setData(result.data);
  //     console.log(data);
  //   };

  //   fetchData();
  // }, []);
  return (
    <Wrapper>
      <Content>
        <Image>
          <img src={image} alt="hero" />
        </Image>
        <Name>
          <h2>Spider-Man</h2>
        </Name>
        <Tag>
          <h4>Real Name:</h4>
        </Tag>
        <Real>
          <h4>Peter Parker</h4>
        </Real>
        <Tag>
          <h4>Powers:</h4>
        </Tag>
        <Real>Does Whatever a Spider Can</Real>
        <Tag>
          <h4>Location:</h4>
        </Tag>
        <Real>New York City</Real>
        <Desc>
          <p>
            Bitten by a radioactive spider, high school student Peter Parker
            gained the speed, strength and powers of a spider. Adopting the name
            Spider-Man, Peter hoped to start a career using his new abilities.
            Taught that with great power comes great responsibility, Spidey has
            vowed to use his powers to help people.
          </p>
        </Desc>
      </Content>
    </Wrapper>
  );
};

export default index;
