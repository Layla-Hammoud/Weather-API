import React, { useState } from "react";
import clear from "../img/weather-icons/clear.svg";
const Search = ({setCity}) => {
  const [input, setInput] = useState("");
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
  return (
    <header>
      <input type="text" name="text" placeholder="Entre your city" value={input}
        onChange={handleInputChange}></input>
      <button type="button" onClick={()=>{setCity(input); setInput("")}}>FIND WEATHER</button>
    </header>
  );
}
export default Search;
