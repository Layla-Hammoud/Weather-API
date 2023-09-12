import React, { useState } from "react";
import Search from "./components/Search";
import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";
import "./App.css";

const App = () => {
  const [name, setName] = useState("Karim");
  let image = "https://placekitten.com/g/200/300"
  const handleInputChange = (value) => {
    setName(value);
  };

  return (
    <div className="app">
      <main>
        <section className="currentWeather">
          <img src={image}></img>
          <h3 className="weatherStatus">overcast cloud</h3>
          <h3 className="weatherTemperature"><span>Temperature</span> 10 to 11 C</h3>
          <p className="moreInfo"><span>Humidity</span> 78% <span>Pressure</span> 1008.48</p>
        </section>
        <section className="forcast">
          <ul>
            <li>
              <p className="time">3:00</p>
              <img src={image}></img>
              <p className="forcatTemprature">8 C</p>
            </li>
            <li>
              <p className="time">3:00</p>
              <img src={image}></img>
              <p className="forcatTemprature">8 C</p>
            </li>
            <li>
              <p className="time">3:00</p>
              <img src={image}></img>
              <p className="forcatTemprature">8 C</p>
            </li>
            <li>
              <p className="time">3:00</p>
              <img src={image}></img>
              <p className="forcatTemprature">8 C</p>
            </li>
            <li>
              <p className="time">3:00</p>
              <img src={image}></img>
              <p className="forcatTemprature">8 C</p>
            </li>
            <li>
              <p className="time">3:00</p>
              <img src={image}></img>
              <p className="forcatTemprature">8 C</p>
            </li>
            <li>
              <p className="time">3:00</p>
              <img src={image}></img>
              <p className="forcatTemprature">8 C</p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};


export default App;
