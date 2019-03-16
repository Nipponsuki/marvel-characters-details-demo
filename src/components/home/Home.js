import React from "react";
import SpiderMan from "./SpiderMan";
import Wolverine from "./Wolverine";
import CaptianMarvel from "./CaptianMarvel";
import America from "./Amerika";
import Thor from "./Thor";
import Nightcrawler from "./DeadPool";
import { Grid } from "../theme/Grid";
import Marvel from "./Marvel";

const Home = () => {
  return (
    <Grid>
      <Wolverine />
      <SpiderMan />
      <CaptianMarvel />
      <America />
      <Thor />
      <Nightcrawler />
      <Marvel />
    </Grid>
  );
};

export default Home;
