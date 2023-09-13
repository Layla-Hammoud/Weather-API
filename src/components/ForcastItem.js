import image from "../img/weather-icons/clear.svg"
const ForcastItem = () => {
    return (
        <li>
        <p className="time">3:00</p>
        <img src={image}></img>
        <p className="forcatTemprature">8 C</p>
      </li>
    );
  };
  
  
  export default ForcastItem;