import {
  ADD_FAVORITE_CITY,
  REMOVE_FAVORITE_CITY,
} from "./favoriteCitiesActionsNames.ts";

export const favoriteCitiesIdReducer = (state = new Set(), action) => {
  switch (action.type) {
    case ADD_FAVORITE_CITY:
      return new Set([...state, action.payload.id]);
    case REMOVE_FAVORITE_CITY:
      const updatedSet = new Set(state);
      updatedSet.delete(action.payload.id);
      return updatedSet;
    default:
      return state;
  }
};

export const favoriteCitiesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FAVORITE_CITY:
      return [...state, action.payload.city];
    case REMOVE_FAVORITE_CITY:
      return state.filter((city) => city.id !== action.payload.id);
    default:
      return state;
  }
};
