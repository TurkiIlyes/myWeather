import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { WeatherReducer } from "../Reducers/WeatherReducer";
import thunk from "redux-thunk";
export const store = createStore(WeatherReducer, applyMiddleware(thunk));
