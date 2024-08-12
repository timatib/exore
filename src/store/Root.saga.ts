import { all } from "redux-saga/effects";
import { productsWatchers } from "./Products/Constacts.saga";

export function* rootSagas() {
  yield all([...productsWatchers]);
}
