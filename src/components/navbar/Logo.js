import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.jpg";
import { ImageContainer } from "../theme/Grid";
import { HideUntilLoaded } from "@nearform/react-animation";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink to="/">
      <ImageContainer>
        <HideUntilLoaded animationIn="popIn" imageToLoad={logo}>
          <img src={logo} alt="logo" />
        </HideUntilLoaded>
      </ImageContainer>
    </NavLink>
  );
};

export default Logo;
