import { ErrorReturnedType } from "entities/common/types";
import {
  GET_PRODUCTS_LIST_FAILURE,
  GET_PRODUCTS_LIST_REQUEST,
  GET_PRODUCTS_LIST_SUCCESS,
} from "./Constacts.constant";
import { IProductsResponseBody } from "entities/types/Products";

export interface IProductsList {
  data: IProductsResponseBody[];
  errors: ErrorReturnedType | null;
  isLoading: boolean;
}

export interface IGetProductsListRequest {
  payload: string;
  type: typeof GET_PRODUCTS_LIST_REQUEST;
}

export interface IGetProductsListSuccess {
  payload: IProductsResponseBody[];
  type: typeof GET_PRODUCTS_LIST_SUCCESS;
}

export interface IGetProductsListFailure {
  payload: ErrorReturnedType;
  type: typeof GET_PRODUCTS_LIST_FAILURE;
}

export type ProductsListActionsTypes =
  | IGetProductsListRequest
  | IGetProductsListSuccess
  | IGetProductsListFailure;
