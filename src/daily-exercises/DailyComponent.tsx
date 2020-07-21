import React, { useState } from "react";
import { DailyInputComponent } from "./DailyInputComponent";
import "./DailyComponent.css";

export const DailyComponent: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [expectedSum, setExpectedSum] = useState("");
  const [result, setResult] = useState("");

  function handleInputValueChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function handleExpectedSumChange(e: React.ChangeEvent<HTMLInputElement>) {
    setExpectedSum(e.target.value);
  }

  function runVerification() {
    let result = verifySum(inputValue, expectedSum);
    setResult(String(result));
  }

  // function fact(x: number, acc: number): number {
  //   if (x <= 1) return acc;
  //   else return fact(x - 1, (acc || 1) * x);
  // }

  function verifySum(inputValue: string, expectedSum: string) {
    let inputValusList = inputValue.split(",").map((x) => +x);
    return checkSum(inputValusList, +expectedSum);
  }

  function checkSum(inputValues: number[], expectedSum: number): Boolean {
    if (!(Array.isArray(inputValues) && inputValues.length)) return false;
    else {
      if (inputValues.length < 2) return false;
      else if (
        calcForListHead(inputValues[0], inputValues.slice(1), expectedSum)
      )
        return true;
      else return checkSum(inputValues.slice(1), expectedSum);
    }
  }

  function calcForListHead(
    head: number,
    lst: number[],
    expectedSum: number
  ): Boolean {
    if (!(Array.isArray(lst) && lst.length)) return false;
    else {
      if (head + lst[0] === expectedSum) return true;
      else return calcForListHead(head, lst.slice(1), expectedSum);
    }
  }

  return (
    <div>
      <h1>Daily Coding Challenge</h1>
      <div className="dailyBlock">
        <DailyInputComponent
          id="inputlist"
          inputName="Input List (example: 10, 1, 4, 7)"
          inputValue={inputValue}
          onChange={handleInputValueChange}
        />
        <DailyInputComponent
          id="expectedsum"
          inputName="Expected Sum (example: 17)"
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
