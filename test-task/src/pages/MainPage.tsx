import { React, useState, useEffect } from "react";
import citiesData from "../weatherData/city.list.json";

export const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sitiesList, setSitiesList] = useState("");

  useEffect(() => {
    setSitiesList(citiesData);
  }, []);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  console.log("sitiesList", sitiesList);
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchTerm);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Enter search term"
          style={{
            padding: "10px",
            width: "300px",
            fontSize: "16px",
            marginRight: "10px",
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: "10px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
};
