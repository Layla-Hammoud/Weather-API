import { displayProperImage } from "../common function/comminFunction";
const CurrentWeather = ({ currentWeather, id ,desciption}) => {
  const image = require(`../img/weather-icons/${displayProperImage(id)}`);
  return (
    <section className="currentWeather">
      <img src={image}></img>
      <h3 className="weatherStatus">{desciption}</h3>
      <h3 className="weatherTemperature">
        Temperature{" "}
        <span>
          {currentWeather.main.temp_min}&deg; to {currentWeather.main.temp_max}
          &deg;C
        </span>
      </h3>
      <p className="moreInfo">
        <span>Humidity</span> {currentWeather.main.humidity}%{" "}
        <span>Pressure</span> {currentWeather.main.pressure}
      </p>
    </section>
  );
};
export default CurrentWeather;
