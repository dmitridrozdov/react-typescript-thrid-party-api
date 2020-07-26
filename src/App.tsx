import React from "react";
import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CurrencyConverter } from "./CurrencyConverter";
import { TodoComponenet } from "./TodoComponenet";
import { WeatherComponent } from "./WeatherComponent";
import { NoteComponent } from "./NoteComponent";
import { InputValidation } from "./InputValidation";
import { DailyComponent } from "./daily-exercises/DailyComponent";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={CurrencyConverter} />
        <Route path="/todo" exact component={TodoComponenet} />
        <Route path="/weather" exact component={WeatherComponent} />
        <Route path="/note" exact component={NoteComponent} />
        <Route path="/daily" exact component={DailyComponent} />
        <Route path="/validate" exact component={InputValidation} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
