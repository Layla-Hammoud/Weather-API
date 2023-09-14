import image from "../img/weather-icons/clear.svg"
import convertTempreture from "../common function/comminFunction"
const CurrentWeather = ({data}) => {
  return (
        <section className="currentWeather">
          <img src={image}></img>
          <h3 className="weatherStatus">{data.weather[0].description}</h3>
          <h3 className="weatherTemperature">Temperature <span>{convertTempreture(data.main.temp_min)} to {convertTempreture(data.main.temp_max)} C</span></h3>
          <p className="moreInfo"><span>Humidity</span> {data.main.humidity}% <span>Pressure</span> {data.main.pressure}</p>
        </section>
  );
};


export default CurrentWeather;