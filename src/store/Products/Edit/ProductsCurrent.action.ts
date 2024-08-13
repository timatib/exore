import { ErrorReturnedType } from "entities/common/types";
import {
  CLEAR_PRODUCTS_CURRENT_STORE,
  GET_PRODUCTS_BY_ID_FAILURE,
  GET_PRODUCTS_BY_ID_REQUEST,
  GET_PRODUCTS_BY_ID_SUCCESS,
} from "./ProductsCurrent.constant";
import { IProductsResponseBody } from "entities/types/Products";

export const getProductsByIdRequest = (id: number) => ({
  type: GET_PRODUCTS_BY_ID_REQUEST,
  payload: id,
});

export const getProductsByIdSuccess = (body: IProductsResponseBody) => ({
  type: GET_PRODUCTS_BY_ID_SUCCESS,
  payload: body,
});

export const getProductsByIdFailure = (error: ErrorReturnedType) => ({
  type: GET_PRODUCTS_BY_ID_FAILURE,
  payload: error,
});

export const clearProductsCurrentStore = () => ({
  type: CLEAR_PRODUCTS_CURRENT_STORE,
});
