import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import WeatherForcast from "./components/WeatherForcast";
import "./App.css";

const App = () => {
  const [loading,setLoading]=useState(false)
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [error, setError] = useState(null);
  const API_KEY = "b8b2b42b9ec9d3509f8b08b33aa03d0c";
  const getData = async () => {
    if (city != "") {
      setLoading(true)
      setError(false)
      await axios
        .get(
          `http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=${API_KEY}`
        )
        .then((response) => {
          setLoading(false)
          setError(null)
          setWeatherData(response.data);
        })
        .catch((error) => {
          setWeatherData([])
          setLoading(false)
          setError(error);
        });
    }
  };
  const currentWeather =
    weatherData.list && weatherData.list.length > 0
      ? weatherData.list[0]
      : null;
  const forcasttWeather =
    weatherData.list && weatherData.list.length > 0
      ? weatherData.list.slice(1)
      : [];
  useEffect(() => {
    getData(weatherData);
  }, [city]);
  return (
    <div className="app">
      <Search setCity={setCity} />
      <main>
        {loading
          ? <h3 className="error"> loading ... </h3>
          : null}
        {currentWeather && !loading ? (
          <CurrentWeather
            currentWeather={currentWeather}
            id={currentWeather["weather"][0]["id"]} desciption={currentWeather["weather"][0]["description"]}
          />
        ) : null}
        {error
          ? <h3 className="error">Sorry, We did not find the country &#128533; <br></br>
        Try again &#128513; </h3>
          : null}
        {forcasttWeather.length !== 0 && !loading ? (
          <WeatherForcast data={forcasttWeather} />
        ) : (
          ""
        )}
      </main>
    </div>
  );
};
export default App;
