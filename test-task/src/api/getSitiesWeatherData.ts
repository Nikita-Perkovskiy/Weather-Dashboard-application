import axios from "axios";

const getSitiesWeatherData = async (cityId, apiKey) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,
      {
        params: {
          id: cityId,
          appid: apiKey,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};
