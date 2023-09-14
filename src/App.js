import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import WeatherForcast from "./components/WeatherForcast";
import "./App.css";

const App = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const API_KEY = "b8b2b42b9ec9d3509f8b08b33aa03d0c";
  const getData = async () => {
    if (city != "") {
      await axios
        .get(
          `http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=${API_KEY}`
        )
        .then((response) => {
          setWeatherData(response.data);
        });
    }
  };
  const currentWeather = weatherData.list && weatherData.list.length > 0 ? weatherData.list[0] : null;
  const forcasttWeather = weatherData.list && weatherData.list.length > 0 ?  weatherData.list.slice(1) : [];
  console.log(forcasttWeather)
  useEffect(() => {
     getData(weatherData);
  }, [city]);
  return (
    <div className="app">
      <Search setCity={setCity} />
      <main>
      {currentWeather!==null?<CurrentWeather currentWeather={currentWeather} id={currentWeather["weather"][0]["id"]}/>:null}
      {forcasttWeather.length !==0? <WeatherForcast data={forcasttWeather} /> : ""}
      </main>
    </div>
  );
};
export default App;
