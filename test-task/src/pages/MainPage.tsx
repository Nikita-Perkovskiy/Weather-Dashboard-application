import { React, useState } from "react";
import { API_KEY } from "../constants.ts";
import { getWeatherDataBySityName } from "../api/getWeatherDataBySityName.ts";
import { mainPageStyles } from "./MainPage.styled.ts";
import { SearchForm } from "../components/SearchForm/SearchForm.tsx";
import { CityCard } from "../components/CityCard/CityCard.tsx";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavoriteCity,
  removeFavoriteCity,
} from "../features/favoriteCities/favoriteCitiesActions.ts";

export const MainPage = () => {
  const [searchData, setSearchData] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  // const [favoriteCitiesId, setFavoriteCitiesId] = useState(new Set());
  // const [favoriteCities, setFavoriteCities] = useState([]);
  const dispatch = useDispatch();
  const favoriteCities = useSelector((state) => state.favoriteCities);
  const favoriteCitiesId = useSelector((state) => state.favoriteCitiesId);

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
      // updatedFavorites.delete(city.id);
      // setFavoriteCitiesId(updatedFavorites);
      // setFavoriteCities((prevCities) =>
      //   prevCities.filter((favCity) => favCity.id !== city.id)
      // );
      dispatch(removeFavoriteCity(city.id));
    } else {
      // updatedFavorites.add(city.id);
      // setFavoriteCitiesId(updatedFavorites);
      // setFavoriteCities((prevCities) => [...prevCities, city]);\
      dispatch(addFavoriteCity(city));
    }
  };

  console.log(
    "favoriteCities",
    favoriteCities,
    "favoriteCitiesId",
    favoriteCitiesId
  );
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
          <CityCard
            cityData={weatherData}
            toggelCity={toggleFavoriteCity}
            isFavoriteStatus={false}
          />
        ) : (
          <p>Please select a city in the search bar.</p>
        )}
      </div>
      <section>
        <h4 style={mainPageStyles.sectionHeader}>List of favorite cities:</h4>
        {favoriteCities.length > 0 ? (
          favoriteCities.map((city) => (
            <div key={city.id} style={mainPageStyles.cityItem}>
              <CityCard
                cityData={city}
                toggelCity={toggleFavoriteCity}
                isFavoriteStatus={true}
              />
            </div>
          ))
        ) : (
          <p>No favorite cities added yet.</p>
        )}
      </section>
    </main>
  );
};
