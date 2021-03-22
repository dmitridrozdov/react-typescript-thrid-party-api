import React from "react";
import { ChildFunctionComponent } from "./ChildFunctionComponent";

export const FunctionContextComponent: React.FC = () => {
  return (
    <div style={{ backgroundColor: "red" }}>
      ...
      <ChildFunctionComponent />
    </div>
  );
};
