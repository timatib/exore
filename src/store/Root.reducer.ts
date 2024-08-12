import { combineReducers } from "redux";
import productsReducer from "./Products/Constacts.reducer";

export const rootReducer = combineReducers({
  products: productsReducer,
});
