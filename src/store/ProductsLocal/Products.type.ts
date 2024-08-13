import { IProductsLocalBody } from "entities/types/Products";
import {
  CREATE_PRODUCTS_LOCAL,
  UPDATE_PRODUCTS_LOCAL,
} from "./Products.constant";

export interface IProductsLocalList {
  data: IProductsLocalBody[];
}

export interface ICreateProductsLocal {
  payload: IProductsLocalBody;
  type: typeof CREATE_PRODUCTS_LOCAL;
}

export interface IUpdateProductsLocal {
  payload: IProductsLocalBody;
  type: typeof UPDATE_PRODUCTS_LOCAL;
}

export type ProductsLocalListActionsTypes =
  | ICreateProductsLocal
  | IUpdateProductsLocal;
