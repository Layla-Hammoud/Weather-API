import React, { useState } from "react";
import clear from "../img/weather-icons/clear.svg";
const Search = () =>{
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = () => {

  };
  return (
    <header>
      <input type="text" name="text" placeholder="Entre your city" value={input}
        onChange={handleInputChange}></input>
      <button type="button" onClick={handleSubmit}>FIND WEATHER</button>
    </header>
  );
}
export default Search;
