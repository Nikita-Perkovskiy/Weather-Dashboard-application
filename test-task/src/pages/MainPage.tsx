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
import { LadingSpinner } from "../components/LadingSpinner/LadingSpinner.tsx";

export const MainPage = () => {
  const [searchData, setSearchData] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
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
    setIsLoading(true);

    try {
      setIsError(false);
      const data = await getWeatherDataBySityName(searchData, API_KEY);
      const transformdata = weatherDataTransformFromResponse(data);
      setWeatherData(transformdata);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleFavoriteCity = (city) => {
    if (favoriteCitiesId.has(city.id)) {
      dispatch(removeFavoriteCity(city.id));
    } else {
      dispatch(addFavoriteCity(city));
    }
  };

  return (
    <>
      {isLoading ? <LadingSpinner /> : null}
      <main style={mainPageStyles.mainContainer}>
        <section style={mainPageStyles.sectionWrapper}>
          <h4 style={mainPageStyles.sectionHeader}>Select a city:</h4>
          <SearchForm
            searchFunction={handleSearch}
            searchValue={searchData}
            changeValueFunction={handleInputChange}
            isError={isError}
          />
        </section>
        <section style={mainPageStyles.sectionWrapper}>
          <h4 style={mainPageStyles.sectionHeader}>Current city:</h4>
          <div style={mainPageStyles.infoWrapper}>
            {weatherData ? (
              <CityCard
                cityData={weatherData}
                toggelCity={toggleFavoriteCity}
                isFavoriteListId={favoriteCitiesId}
              />
            ) : (
              <p>Please select a city in the search bar.</p>
            )}
          </div>
        </section>
        <section style={mainPageStyles.sectionWrapper}>
          <h4 style={mainPageStyles.sectionHeader}>List of favorite cities:</h4>
          <div style={mainPageStyles.infoWrapper}>
            {favoriteCities.length > 0 ? (
              favoriteCities.map((city) => (
                <div key={city.id} style={mainPageStyles.cityItem}>
                  <CityCard
                    cityData={city}
                    toggelCity={toggleFavoriteCity}
                    isFavoriteListId={favoriteCitiesId}
                  />
                </div>
              ))
            ) : (
              <p>No favorite cities added yet.</p>
            )}
          </div>
        </section>
      </main>
    </>
  );
};
