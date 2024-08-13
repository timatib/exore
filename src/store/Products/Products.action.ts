import { ErrorReturnedType } from "entities/common/types";
import {
  GET_PRODUCTS_LIST_FAILURE,
  GET_PRODUCTS_LIST_REQUEST,
  GET_PRODUCTS_LIST_SUCCESS,
} from "./Products.constant";
import { IProductsResponseBody } from "entities/types/Products";

export const getProductsListRequest = (query = "") => ({
  type: GET_PRODUCTS_LIST_REQUEST,
  payload: query,
});

export const getProductsListSuccess = (body: IProductsResponseBody[]) => ({
  type: GET_PRODUCTS_LIST_SUCCESS,
  payload: body,
});

export const getProductsListFailure = (error: ErrorReturnedType) => ({
  type: GET_PRODUCTS_LIST_FAILURE,
  payload: error,
});
