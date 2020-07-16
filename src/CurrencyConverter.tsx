import React, { useState, useEffect } from "react";
import { CurrecncyRow } from "./CurrencyRow";

export const CurrencyConverter: React.FC = () => {
  const BASE_URL = "https://api.exchangeratesapi.io/latest";
  const initConvertResult: Array<string> = [""];
  const [currencyOptions, setCurrencyOptions] = useState(initConvertResult);
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("CAD");
  const [exchageRate, setExchangeRate] = useState(1);
  const [amount, setAmount] = useState("");
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  let toAmount = "",
    fromAmount = "";
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = String(Number(amount) * exchageRate);
  } else {
    toAmount = amount;
    fromAmount = String(Number(amount) / exchageRate);
  }

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        const firstCurrency = Object.keys(data.rates)[0];
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
        setExchangeRate(data.rates[firstCurrency]);
      });
  }, []);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
        .then((response) => response.json())
        .then((data) => setExchangeRate(data.rates[toCurrency]));
    }
  }, [fromCurrency, toCurrency]);

  function handleFromAmountChange(e: React.ChangeEvent<HTMLInputElement>) {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }

  function handleToAmountChange(e: React.ChangeEvent<HTMLInputElement>) {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }

  const fromId = "1";
  const toId = "2";

  return (
    <React.Fragment>
      <h1>Convert</h1>
      <CurrecncyRow
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onChangeCurrency={(e) => setFromCurrency(e.target.value)}
        amount={fromAmount}
        onChangeAmount={handleFromAmountChange}
        selectid={fromId}
      />
      <div className="equals"> = </div>
      <CurrecncyRow
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency={(e) => setToCurrency(e.target.value)}
        amount={toAmount}
        onChangeAmount={handleToAmountChange}
        selectid={toId}
      />
    </React.Fragment>
  );
};
