import { createStore, combineReducers } from "redux";
import {
  favoriteCitiesReducer,
  favoriteCitiesIdReducer,
} from "./favoriteCities/favoriteCitiesReducer.ts";

const rootReducer = combineReducers({
  favoriteCities: favoriteCitiesReducer,
  favoriteCitiesId: favoriteCitiesIdReducer,
});

const store = createStore(rootReducer);

export default store;
