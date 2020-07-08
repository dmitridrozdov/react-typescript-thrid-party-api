import React, { useState, useEffect } from "react";
import "./App.css";
import { TodoList } from "./TodoList";
import { Todo, ToggleTodo, AddTodo } from "./types.d";
import { AddTodoForm } from "./AddTodoForm";
import { CurrecncyRow } from "./CurrencyRow";

const initialTodos: Array<Todo> = [
  { text: "first", complete: false },
  { text: "second", complete: true },
];

const BASE_URL = "https://api.exchangeratesapi.io/latest";

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggoleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const newTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };
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
      {/* <TodoList todos={todos} toggleTodo={toggoleTodo} />
      <AddTodoForm addTodo={newTodo} /> */}
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

export default App;
