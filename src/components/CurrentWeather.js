import image from "../img/weather-icons/clear.svg";
const CurrentWeather = ({ currentWeather }) => {
  return (
    <section className="currentWeather">
      <img src={image}></img>
      <h3 className="weatherStatus">
      </h3>
      <h3 className="weatherTemperature">
        Temperature{" "}
        <span>
          {currentWeather.main.temp_min} to {" "}
          {currentWeather.main.temp_max} C
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
