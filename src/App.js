import React, { useState } from "react";
import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import WeatherForcast from "./components/WeatherForcast";
import fakeWeatherData from "./fakeWeatherData.json";
import "./App.css";

const App = () => {
  const data = fakeWeatherData["list"].slice(-8);
  return (
    <div className="app">
      <Search/>
      <main>
        <CurrentWeather data={data[0]}/>
        <WeatherForcast data={data.slice(-7)}/>
      </main>
    </div>
  );
};


export default App;
