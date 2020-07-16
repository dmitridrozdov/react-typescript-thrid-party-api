import React from "react";
import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CurrencyConverter } from "./CurrencyConverter";
import { TodoComponenet } from "./TodoComponenet";
import { WeatherComponent } from "./WeatherComponent";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={CurrencyConverter} />
        <Route path="/todo" exact component={TodoComponenet} />
        <Route path="/weather" exact component={WeatherComponent} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
