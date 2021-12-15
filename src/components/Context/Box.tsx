import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Box = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: theme.Secondary.main,
        color: theme.Primary.main,
      }}
    >
      <h1>Theme Context</h1>
    </div>
  );
};

export default Box;
