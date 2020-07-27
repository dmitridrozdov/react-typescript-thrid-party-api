import React, { useState } from "react";
import { DailyInputComponent } from "./daily-exercises/DailyInputComponent";

export const InputValidation: React.FC = () => {
  const [validationSign, setValidationSign] = useState("");
  const [validationDot, setValidationDot] = useState("");
  const [inputValue, setInputValue] = useState("");

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const setFocusState = (
    setState: (value: React.SetStateAction<string>) => void,
    checkMsg: string,
    inclStr: string
  ) => {
    if (!inputValue.includes(inclStr)) {
      setState("Email should contain " + checkMsg);
    } else {
      setState("");
    }
  };

  const onFocusPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFocusState(setValidationSign, "@", "@");
    setFocusState(setValidationDot, ".", ".");
  };

  const onFocusEmpty = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <div>
      <DailyInputComponent
        id="inputEmail"
        inputName="Email: "
        inputValue={inputValue}
        onChange={onChangeEmail}
        onFocus={onFocusEmpty}
      />
      <p id="validationSign" className="validation-failed">
        {validationSign}
      </p>
      <p id="validationDot" className="validation-failed">
        {validationDot}
      </p>
      <DailyInputComponent
        id="password"
        inputName="Password: "
        inputValue={""}
        onChange={onFocusEmpty}
        onFocus={onFocusPassword}
      />
    </div>
  );
};
