import { React } from "react";
import { cityCardStyles } from "./CityCard.styled.ts";
import { ReactComponent as EmptyStarIcon } from "../../assets/svgs/emptyStarIcon.svg";
import { ReactComponent as StarIcon } from "../../assets/svgs/starIcon.svg";

export const CityCard = ({ cityData, toggelCity, isFavoriteListId }) => {
  const tempInCelsius = (cityData.temperature - 273.15).toFixed(2);
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
      <div
        style={cityCardStyles.iconWrapper}
        onClick={() => toggelCity(cityData)}
      >
        {isFavoriteListId.has(cityData.id) ? <StarIcon /> : <EmptyStarIcon />}
      </div>
    </div>
  );
};
