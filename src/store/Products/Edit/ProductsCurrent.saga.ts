import { call, fork, put, takeLatest } from "redux-saga/effects";
import { GET_PRODUCTS_BY_ID_REQUEST } from "./ProductsCurrent.constant";
import { IProductsResponseBody } from "entities/types/Products";
import { getProductsCurrentApi } from "services/http/Products";

import { IGetProductsByIdRequest } from "./ProductsCurrent.type";
import {
  getProductsByIdFailure,
  getProductsByIdSuccess,
} from "./ProductsCurrent.action";

function* workerGetProductsCurrent({ payload }: IGetProductsByIdRequest) {
  try {
    const { data }: { data: IProductsResponseBody } = yield call(
      getProductsCurrentApi,
      payload
    );

    yield put(getProductsByIdSuccess(data));
  } catch (error: { massage: string } | unknown) {
    yield put(
      getProductsByIdFailure({
        errors: (error as { massage: string })?.massage as string,
      })
    );
  }
}

function* watchGetProductsCurrent() {
  yield takeLatest(GET_PRODUCTS_BY_ID_REQUEST, workerGetProductsCurrent);
}

export const productsCurrentWatchers = [fork(watchGetProductsCurrent)];
