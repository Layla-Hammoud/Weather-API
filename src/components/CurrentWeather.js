import image from "../img/weather-icons/clear.svg"

const CurrentWeather = ({data}) => {
  return (
        <section className="currentWeather">
          <img src={image}></img>
          <h3 className="weatherStatus">{data.weather[0].description}</h3>
          <h3 className="weatherTemperature">Temperature <span>{data.main.temp_min} to {data.main.temp_max} C</span></h3>
          <p className="moreInfo"><span>Humidity</span> {data.main.humidity}% <span>Pressure</span> {data.main.pressure}</p>
        </section>
  );
};


export default CurrentWeather;