import ForcastItem from "./ForcastItem";
const WeatherForcast = ({ data }) => {
  return (
    <section className="forcast">
      <ul>
        {data.map((singleData) => (
          <ForcastItem key={singleData.dt} date={singleData.dt_txt} temp={singleData.main.temp} />
        ))}
      </ul>
    </section>
  );
};
export default WeatherForcast;