import React, { useState } from "react";
import { DailyInputComponent } from "./DailyInputComponent";
import "./DailyComponent.css";
import { getFirstIntegerByRule } from "./daily3";

export const DailyComponent: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [expectedSum, setExpectedSum] = useState("");
  const [result, setResult] = useState("");

  const handleInputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleExpectedSumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpectedSum(e.target.value);
  };

  const runVerification = () => {
    let result = getFirstIntegerByRule(inputValue);
    setResult(String(result));
  };

  const onFocus = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <div>
      <h1>Daily Coding Challenge</h1>
      <div className="dailyBlock">
        <DailyInputComponent
          id="inputlist"
          inputName="Input String 1: "
          inputValue={inputValue}
          onChange={handleInputValueChange}
          onFocus={onFocus}
        />
        <DailyInputComponent
          id="expectedsum"
          inputName="Input String 2: "
          inputValue={expectedSum}
          onChange={handleExpectedSumChange}
          onFocus={onFocus}
        />
        <p>
          <button className="input" onClick={runVerification}>
            Verify
          </button>
        </p>
        <p className="pDailyInput">
          Result: <span className="result">{result}</span>
        </p>
      </div>
    </div>
  );
};
