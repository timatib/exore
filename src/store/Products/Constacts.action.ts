import { ErrorReturnedType } from "entities/common/types";
import {
  GET_PRODUCTS_BY_ID_FAILURE,
  GET_PRODUCTS_BY_ID_REQUEST,
  GET_PRODUCTS_BY_ID_SUCCESS,
  GET_PRODUCTS_LIST_FAILURE,
  GET_PRODUCTS_LIST_REQUEST,
  GET_PRODUCTS_LIST_SUCCESS,
} from "./Constacts.constant";
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

export const getProductsByIdRequest = (query = "") => ({
  type: GET_PRODUCTS_BY_ID_REQUEST,
  payload: query,
});

export const getProductsByIdSuccess = (body: IProductsResponseBody) => ({
  type: GET_PRODUCTS_BY_ID_SUCCESS,
  payload: body,
});

export const getProductsByIdFailure = (error: ErrorReturnedType) => ({
  type: GET_PRODUCTS_BY_ID_FAILURE,
  payload: error,
});
