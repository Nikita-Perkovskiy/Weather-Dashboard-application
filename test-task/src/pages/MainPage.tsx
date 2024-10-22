import { React, useState } from "react";
import { API_KEY } from "../constants.ts";
import { getWeatherDataBySityName } from "../api/getWeatherDataBySityName.ts";
import { mainPageStyles } from "./MainPage.styled.ts";
import { SearchForm } from "../components/SearchForm/SearchForm.tsx";
import { CityCard } from "../components/CityCard/CityCard.tsx";

export const MainPage = () => {
  const [searchData, setSearchData] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [favoriteCitiesId, setFavoriteCitiesId] = useState(new Set());
  const [favoriteCities, setFavoriteCities] = useState([]);

  const weatherDataTransformFromResponse = (weatherData) => {
    return {
      name: weatherData.name || "",
      id: weatherData.id || "",
      temperature: weatherData.main.temp || "",
      humidity: weatherData.main.humidity || "",
      windSpeed: weatherData.wind.speed || "",
    };
  };

  const handleInputChange = (e) => {
    setSearchData(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(!isLoading);

    try {
      setIsError(false);
      const data = await getWeatherDataBySityName(searchData, API_KEY);
      const transformdata = weatherDataTransformFromResponse(data);
      setWeatherData(transformdata);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(!isLoading);
    }
  };
  const toggleFavoriteCity = (city) => {
    const updatedFavorites = new Set(favoriteCitiesId);
    if (updatedFavorites.has(city.id)) {
      updatedFavorites.delete(city.id);
      setFavoriteCitiesId(updatedFavorites);
      setFavoriteCities((prevCities) =>
        prevCities.filter((favCity) => favCity.id !== city.id)
      );
    } else {
      updatedFavorites.add(city.id);
      setFavoriteCitiesId(updatedFavorites);
      setFavoriteCities((prevCities) => [...prevCities, city]);
    }
  };

  console.log("favoriteCities", favoriteCities);
  return (
    <main style={mainPageStyles.mainContainer}>
      <SearchForm
        searchFunction={handleSearch}
        searchValue={searchData}
        changeValueFunction={handleInputChange}
        isError={isError}
      />
      <h4 style={mainPageStyles.sectionHeader}>Current city:</h4>
      <div style={mainPageStyles.infoWrapper}>
        {weatherData ? (
          <CityCard cityData={weatherData} toggelCity={toggleFavoriteCity} />
        ) : (
          <p>Please select a city in the search bar.</p>
        )}
      </div>
      <h4 style={mainPageStyles.sectionHeader}>List of favorite cities:</h4>
      {/* {favoriteCities ? (
        [...favoriteCities].map((sity) => (
          <SityCard cityData={sity} toggleCity={toggleFavoriteCity} />
        ))
      ) : (
        <p>Please select a city in the search bar.</p>
      )} */}
    </main>
  );
};
