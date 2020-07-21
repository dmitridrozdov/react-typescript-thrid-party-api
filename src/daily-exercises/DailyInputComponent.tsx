import React, { ChangeEvent } from "react";

interface DailyInputComponentProps {
  id: string;
  inputName: string;
  inputValue: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const DailyInputComponent: React.FC<DailyInputComponentProps> = ({
  id,
  inputName,
  inputValue,
  onChange,
}) => {
  return (
    <div>
      <p className="pDailyInput">
        {inputName}{" "}
        <input
          id={id}
          className="input"
          value={inputValue}
          onChange={onChange}
        ></input>
      </p>
    </div>
  );
};
