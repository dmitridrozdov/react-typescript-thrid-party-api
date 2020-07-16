import React from "react";
import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CurrencyConverter } from "./CurrencyConverter";
import { TodoComponenet } from "./TodoComponenet";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={CurrencyConverter} />
        <Route path="/todo" exact component={TodoComponenet} />
        {/* <Route path="/posts/:id" exact component={Post} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
