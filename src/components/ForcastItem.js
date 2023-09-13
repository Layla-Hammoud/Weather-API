import image from "../img/weather-icons/clear.svg"
const ForcastItem = ({date,temp}) => {
    return (
        <li>
            <p className="time">{date}</p>
            <img src={image}></img>
            <p className="forcatTemprature">{temp} C</p>
        </li>
    );
};
export default ForcastItem;