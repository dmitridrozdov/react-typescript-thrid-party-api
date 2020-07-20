import React, { ChangeEvent } from "react";

interface DailyInputComponentProps {
  inputName: string;
  inputValue: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const DailyInputComponent: React.FC<DailyInputComponentProps> = ({
  inputName,
  inputValue,
  onChange,
}) => {
  return (
    <div>
      <p className="pDailyInput">
        {inputName}{" "}
        <input className="input" value={inputValue} onChange={onChange}></input>
      </p>
    </div>
  );
};
