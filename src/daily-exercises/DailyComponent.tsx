import React, { useState } from "react";
import { DailyInputComponent } from "./DailyInputComponent";
import "./DailyComponent.css";
// import { verifySum } from "./daily1";
import { calculateProductList } from "./daily2";

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
    let result = calculateProductList(inputValue);
    setResult(String(result));
  };

  return (
    <div>
      <h1>Daily Coding Challenge</h1>
      <div className="dailyBlock">
        <DailyInputComponent
          id="inputlist"
          inputName="Input String 1: "
          inputValue={inputValue}
          onChange={handleInputValueChange}
        />
        <DailyInputComponent
          id="expectedsum"
          inputName="Input String 2: "
          inputValue={expectedSum}
          onChange={handleExpectedSumChange}
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
