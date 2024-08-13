import { all } from "redux-saga/effects";
import { productsWatchers } from "./Products/Products.saga";
import { productsCurrentWatchers } from "./Products/Edit/ProductsCurrent.saga";

export function* rootSagas() {
  yield all([...productsWatchers, ...productsCurrentWatchers]);
}
