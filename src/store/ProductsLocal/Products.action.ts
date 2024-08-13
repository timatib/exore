import {
  CREATE_PRODUCTS_LOCAL,
  UPDATE_PRODUCTS_LOCAL,
} from "./Products.constant";
import { IProductsLocalBody } from "entities/types/Products";

export const createProductsLocal = (body: IProductsLocalBody) => ({
  type: CREATE_PRODUCTS_LOCAL,
  payload: body,
});

export const updateProductsLocal = (body: IProductsLocalBody) => ({
  type: UPDATE_PRODUCTS_LOCAL,
  payload: body,
});
