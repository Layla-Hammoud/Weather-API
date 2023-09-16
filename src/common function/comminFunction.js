export const displayProperImage = (id) => {
  switch (true) {
    case id < 300:
      return "storm.svg";
    case id > 300 && id < 500:
      return "drizzle.svg";
    case id > 500 && id < 600:
      return "rain.svg";
    case id > 600 && id < 700:
      return "sunny.png";
    case id > 700 && id < 800:
      return "rainy.png";
    case id == 800:
      return "clear.svg";
    case id == 801:
      return "partlycloudy.svg";
    case id > 801 && id < 805:
      return "mostlycloudy.svg";
    default:
      return "unknown.svg";
  }
};
export const formatTime = (time) => {
  const timeObject = new Date(time);
  const hours = timeObject.getHours();
  const minutes = timeObject.getMinutes();
  return `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
};
export default formatTime;
