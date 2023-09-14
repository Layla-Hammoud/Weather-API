const convertTempreture = (temp) => {
    return Math.round(temp - 273.15);
}
export const formatTime = (time) => {
    const timeObject = new Date(time)
    const hours = timeObject.getHours();
    const minutes = timeObject.getMinutes();
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
}
export default convertTempreture