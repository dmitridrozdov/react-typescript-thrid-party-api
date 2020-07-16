import React, { useState } from "react";
import "./weather.css";

const api = {
  key: "a98d02a08ffe54b7ea98043833350d42",
  base: "https://api.openweathermap.org/data/2.5/",
};

interface Weather {
  name: "";
  country: "";
  temp: 0;
  main: "";
}

export const WeatherComponent: React.FC = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState<Weather>();

  const search = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((weather) => {
          setWeather({
            name: weather.name,
            country: weather.sys.country,
            temp: weather.main.temp,
            main: weather.weather[0].main,
          });
          setQuery("");
          console.log(weather);
        });
    }
  };

  const dateBuilder = (d: Date) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div
      className={
        typeof weather?.main != "undefined"
          ? weather.temp > 16
            ? "app warm"
            : "app"
          : "app"
      }
    >
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather?.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather?.name}, {weather?.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{weather?.temp}°c</div>
              <div className="weather">{weather?.main}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
};
