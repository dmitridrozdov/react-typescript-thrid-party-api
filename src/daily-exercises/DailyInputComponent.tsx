import React, { ChangeEvent } from "react";

interface DailyInputComponentProps {
  id: string;
  inputName: string;
  inputValue: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const DailyInputComponent: React.FC<DailyInputComponentProps> = ({
  id,
  inputName,
  inputValue,
  onChange,
  onFocus,
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
          onFocus={onFocus}
        ></input>
      </p>
    </div>
  );
};
