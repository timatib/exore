import { call, fork, put, takeLatest } from "redux-saga/effects";
import { GET_PRODUCTS_LIST_REQUEST } from "./Constacts.constant";
import { IProductsResponseBody } from "entities/types/Products";
import { getProductsListApi } from "services/http/Products";
import { getProductsListSuccess } from "./Constacts.action";
import { IGetProductsListRequest } from "./Constacts.type";

function* workerGetProductsList({ payload }: IGetProductsListRequest) {
  try {
    const { data }: { data: IProductsResponseBody[] } = yield call(
      getProductsListApi,
      payload
    );

    yield put(getProductsListSuccess(data));
  } catch (error) {
    console.log("error");
  }
}

function* watchGetProductsList() {
  yield takeLatest(GET_PRODUCTS_LIST_REQUEST, workerGetProductsList);
}

export const productsWatchers = [fork(watchGetProductsList)];
