import {
  ADD_FAVORITE_CITY,
  REMOVE_FAVORITE_CITY,
} from "./favoriteCitiesActionsNames.ts";

export const addFavoriteCity = (city) => ({
  type: ADD_FAVORITE_CITY,
  payload: { city, id: city.id },
});

export const removeFavoriteCity = (id) => ({
  type: REMOVE_FAVORITE_CITY,
  payload: { id },
});
