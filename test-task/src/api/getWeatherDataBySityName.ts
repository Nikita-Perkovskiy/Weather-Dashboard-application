import axios from "axios";
import { BASE_URL } from "../constants.ts";

export const getWeatherDataBySityName = async (cityName, apiKey) => {
  const response = await axios.get(`${BASE_URL}?q=${cityName}&appid=${apiKey}`);
  return response.data;
};
