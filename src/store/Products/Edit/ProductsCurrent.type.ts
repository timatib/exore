import { ErrorReturnedType } from "entities/common/types";
import {
  CLEAR_PRODUCTS_CURRENT_STORE,
  GET_PRODUCTS_BY_ID_FAILURE,
  GET_PRODUCTS_BY_ID_REQUEST,
  GET_PRODUCTS_BY_ID_SUCCESS,
} from "./ProductsCurrent.constant";
import { IProductsResponseBody } from "entities/types/Products";

export interface IProductsCurrent {
  data: IProductsResponseBody | null;
  errors: ErrorReturnedType | null;
  isLoading: boolean;
}

export interface IGetProductsByIdRequest {
  payload: number;
  type: typeof GET_PRODUCTS_BY_ID_REQUEST;
}

export interface IGetProductsByIdSuccess {
  payload: IProductsResponseBody;
  type: typeof GET_PRODUCTS_BY_ID_SUCCESS;
}

export interface IGetProductsByIdFailure {
  payload: ErrorReturnedType;
  type: typeof GET_PRODUCTS_BY_ID_FAILURE;
}

export interface IClearProductsCurrentStore {
  type: typeof CLEAR_PRODUCTS_CURRENT_STORE;
}

export type ProductsCurrentActionsTypes =
  | IGetProductsByIdRequest
  | IGetProductsByIdSuccess
  | IGetProductsByIdFailure
  | IClearProductsCurrentStore;
