import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Navbar from "./navbar/Navbar";
import style from "styled-theming";
import useTheme from "./theme/useTheme";
import Home from "./home/Home";
import Search from "./search";
import DetailsSpider from "../components/details/DetailsSpider";

const getBackground = style("mode", {
  light: "linear-gradient(45deg, #84a8fb, #6998f6EE)",
  dark: "linear-gradient(45deg, #4b6cb7, #182848)"
});
const getForeground = style("mode", {
  light: "#111",
  dark: "#EEE"
});
const getBorder = style("mode", {
  light: "#111",
  dark: "#EEE"
});

const GlobalStyle = createGlobalStyle`
body {
  background: ${getBackground};
  color:${getForeground};
  border-color: ${getBorder};
}
`;

function App() {
  const theme = useTheme();
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/spiderman" component={DetailsSpider} />
          </Switch>
        </>
      </ThemeProvider>
    </Router>
  );
}

export default App;
