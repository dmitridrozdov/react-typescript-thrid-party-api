import React, { useContext } from "react";
import { ColorContext } from "./UseContextComponent";

export const ChildFunctionComponent: React.FC = () => {
  const darkTheme = useContext(ColorContext);
  return <div style={{ backgroundColor: darkTheme }}>...</div>;
};
