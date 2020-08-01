import React, { useState } from "react";
import { FunctionContextComponent } from "./FunctionContextComponent";

const colors = {
  blue: "#03619c",
  yellow: "#8c8f03",
  red: "#9c0312",
};

export const ColorContext = React.createContext(colors.blue);

export const UseContextComponent: React.FC = () => {
  const [darkTheme, setDarkTheme] = useState(colors.blue);
  const toggleTheme = () => {
    if (darkTheme == colors.blue) setDarkTheme(colors.yellow);
    else setDarkTheme(colors.blue);
  };
  return (
    <>
      <ColorContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle</button>
        <FunctionContextComponent />
      </ColorContext.Provider>
    </>
  );
};
