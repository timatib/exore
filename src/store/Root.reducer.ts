import { combineReducers } from "redux";
import productsReducer from "./Products/Products.reducer";
import { alertReducer } from "./Alert/Alert.reducer";
import productsCurrentReducer from "./Products/Edit/ProductsCurrent.reducer";
import productsLocalReducer from "./ProductsLocal/Products.reducer";

export const rootReducer = combineReducers({
  products: productsReducer,
  productsCurrent: productsCurrentReducer,
  productsLocal: productsLocalReducer,
  alert: alertReducer,
});
