import React, { useState, useEffect } from "react";
import styled from "styled-components";
import bgk from "../../assets/images/search-bgk.jpg";
import image from "../../assets/images/stan.jpg";
import { media } from "../theme/mediaQueries";
import hulk from "../../assets/images/hulk.jpg";
import loader from "../../assets/images/loader.gif";

const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%);
`;

const Icon = styled.div`
  width: 200px;
  margin: 40px auto;
  display: block;

  & img {
    width: 100%;
    border-radius: 50%;
    box-shadow: -2px 2px 35px 0px rgba(0, 82, 136, 0.8);
  }
`;

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
  grid-template-rows: 4.5rem auto;
  padding: 5px;
  position: relative;

  border: 5px solid white;
  width: 100%;
  /* height: calc(100vh - 120px); */
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
  grid-template-columns: 20rem auto 1fr;
  grid-template-rows: repeat(5, auto);
  width: 100%;
  font-family: "Heroes Legend";
  color: #111;

  ${media.phone`
    grid-template-columns: 1fr;
    height: 100%;
  `}
`;

const InputWrapper = styled.div`
  height: 100%;
  text-align: center;

  ${media.phone`
    width: 100%;
  `}
`;

const Image = styled.div`
  background: transparent;
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
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.phone`
    grid-column: 1/ span 1;
    grid-row: 2/ span 1;
  `}
`;
const Tag = styled.div`
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
const Real = styled.div`
  background: white;
  line-height: 2;
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
  const [name, setName] = useState("Stan the Man");
  const [realName, setRealName] = useState("Stan Lee");
  const [powers, setPowers] = useState("Doesn't need ones");
  const [location, setLocation] = useState("Doesn't need ones");
  const [img, setImg] = useState(image);

  const [desc, setDesc] = useState(
    "Born in New York City on December 28, 1922, Stan Lee went on to workfor the company that would eventually become Marvel Comics. Withartist Jack Kirby, Lee launched the superhero team the FantasticFour in 1961, and was soon responsible for creating popularcharacters like Spider-Man, the X-Men, the Hulk and Thor. Lee laterworked in a number of comic-related business and multimediaventures"
  );

  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    setName("Hulk");
    setRealName("Bruce Banner");
    setPowers(
      "Super Strength, superhuman speed and constitution, enhanced healing abilities"
    );
    setLocation("Wherever the carnage is");
    setDesc(
      "Bruce Banner was a top scientist for the military that was working on a gamma bomb, a weapon of massive destructive power. During a test of the gamma bomb, Bruce noticed a young teenager by the name of Rick Jones had entered the test site. Bruce rushed to aide the young man, and in pushing Rick into a trench, exposed himself to the rays of the gamma bomb. The result of this exposure would be to transform gentle Bruce Banner into the destructive monster known as The Incredible Hulk"
    );
    setImg(hulk);
    setQuery("");
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);
  //   onSubmit();
  // }, [name, realName, powers, location, desc, Loading]);

  if (isLoading) {
    return (
      <>
        <Loading>
          <Icon>
            <img src={loader} alt="loader" />
          </Icon>
        </Loading>
      </>
    );
  } else {
    return (
      <Wrapper>
        <InputWrapper>
          <form onSubmit={onSubmit}>
            <Input
              type="text"
              value={query}
              placeholder="search here"
              onChange={event => setQuery(event.target.value)}
            />
          </form>
        </InputWrapper>
        <Content>
          <Image>
            <img src={img} alt="hero" />
          </Image>
          <Name>
            <h2>{name}</h2>
          </Name>
          <Tag>
            <h4>Real Name:</h4>
          </Tag>
          <Real>
            <h4>{realName}</h4>
          </Real>
          <Tag>
            <h4>Powers:</h4>
          </Tag>
          <Real>{powers}</Real>
          <Tag>
            <h4>Location:</h4>
          </Tag>
          <Real>{location}</Real>
          <Desc>
            <p>{desc}</p>
          </Desc>
        </Content>
      </Wrapper>
    );
  }
};

export default index;
