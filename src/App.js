import React, { useState } from "react";
import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import WeatherForcast from "./components/WeatherForcast";
import fakeWeatherData from "./fakeWeatherData.json";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Search/>
      <main>
        <CurrentWeather/>
        <WeatherForcast/>
      </main>
    </div>
  );
};


export default App;
