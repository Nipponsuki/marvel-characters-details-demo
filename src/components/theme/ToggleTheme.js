import React from "react";
import styled, { ThemeConsumer } from "styled-components";

const ToggleTheme = () => {
  return (
    <ThemeConsumer>
      {theme => (
        <label htmlFor="final-toggle1" className="final__toggle-1">
          <input
            type="checkbox"
            id="final-toggle1"
            className="final__toggle-1__input"
          />
          <span
            className="final__toggle-1__button"
            onClick={e =>
              theme.setTheme(
                theme.mode === "dark"
                  ? { ...theme, mode: "light" }
                  : { ...theme, mode: "dark" }
              )
            }
          >
            Night Mode
          </span>
        </label>
      )}
    </ThemeConsumer>
  );
};

export default ToggleTheme;
