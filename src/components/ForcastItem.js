import image from "../img/weather-icons/clear.svg"
import convertTempreture, {formatTime} from "../common function/comminFunction"
const ForcastItem = ({date,temp}) => {
    return (
        <li>
            <p className="time">{formatTime(date)}</p>
            <img src={image}></img>
            <p className="forcatTemprature">{convertTempreture(temp)} C</p>
        </li>
    );
};
export default ForcastItem;