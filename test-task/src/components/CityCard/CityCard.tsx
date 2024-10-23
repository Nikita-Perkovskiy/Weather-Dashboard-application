import { React, useState, useEffect } from "react";
import { cityCardStyles } from "./CityCard.styled.ts";
import { ReactComponent as EmptyStarIcon } from "../../assets/svgs/emptyStarIcon.svg";
import { ReactComponent as StarIcon } from "../../assets/svgs/starIcon.svg";

export const CityCard = ({ cityData, toggelCity, isFavoriteStatus }) => {
  const [isFavorite, setIsFavorite] = useState(isFavoriteStatus);
  const tempInCelsius = (cityData.temperature - 273.15).toFixed(2);

  useEffect(() => {
    setIsFavorite(isFavoriteStatus);
  }, []);

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
    toggelCity(cityData);
  };

  return (
    <div style={cityCardStyles.cardWrapper}>
      <div style={cityCardStyles.contentWrapper}>
        <h4 style={cityCardStyles.cardName}>{cityData.name}</h4>
        <p style={cityCardStyles.cardText}>Temperature: {tempInCelsius} °C</p>
        <p style={cityCardStyles.cardText}>Humidity: {cityData.humidity} %</p>
        <p style={cityCardStyles.cardText}>
          Wind Speed: {cityData.windSpeed} m/s
        </p>
      </div>
      <div style={cityCardStyles.iconWrapper} onClick={handleFavoriteToggle}>
        {isFavorite ? <StarIcon /> : <EmptyStarIcon />}
      </div>
    </div>
  );
};
