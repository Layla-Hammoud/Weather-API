import image from "../img/weather-icons/clear.svg"

const CurrentWeather = () => {
  return (
        <section className="currentWeather">
          <img src={image}></img>
          <h3 className="weatherStatus">overcast cloud</h3>
          <h3 className="weatherTemperature">Temperature <span>10 to 11 C</span></h3>
          <p className="moreInfo"><span>Humidity</span> 78% <span>Pressure</span> 1008.48</p>
        </section>
  );
};


export default CurrentWeather;