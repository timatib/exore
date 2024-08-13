import { call, fork, put, takeLatest } from "redux-saga/effects";
import { GET_PRODUCTS_LIST_REQUEST } from "./Products.constant";
import { IProductsResponseBody } from "entities/types/Products";
import { getProductsListApi } from "services/http/Products";
import {
  getProductsListFailure,
  getProductsListSuccess,
} from "./Products.action";
import { IGetProductsListRequest } from "./Products.type";

function* workerGetProductsList({ payload }: IGetProductsListRequest) {
  try {
    const { data }: { data: IProductsResponseBody[] } = yield call(
      getProductsListApi,
      payload
    );

    yield put(getProductsListSuccess(data));
  } catch (error: { massage: string } | unknown) {
    yield put(
      getProductsListFailure({
        errors: (error as { massage: string })?.massage as string,
      })
    );
  }
}

function* watchGetProductsList() {
  yield takeLatest(GET_PRODUCTS_LIST_REQUEST, workerGetProductsList);
}

export const productsWatchers = [fork(watchGetProductsList)];
