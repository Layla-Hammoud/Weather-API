import {formatTime , displayProperImage} from "../common function/comminFunction"
const ForcastItem = ({date,temp,id}) => {
    const image = require(`../img/weather-icons/${displayProperImage(id)}`)
    return (
        <li>
            <p className="time">{formatTime(date)}</p>
            <img src={image}></img>
            <p className="forcatTemprature">{Math.round(temp)}&deg;C</p>
        </li>
    );
};
export default ForcastItem;