import {
  GET_PRODUCTS_LIST_FAILURE,
  GET_PRODUCTS_LIST_REQUEST,
  GET_PRODUCTS_LIST_SUCCESS,
} from "./Products.constant";
import { IProductsList, ProductsListActionsTypes } from "./Products.type";

const initialState: IProductsList = {
  isLoading: false,
  data: [],
  errors: null,
};

export default function productsReducer(
  state = initialState,
  action: ProductsListActionsTypes
): IProductsList {
  switch (action.type) {
    case GET_PRODUCTS_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PRODUCTS_LIST_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case GET_PRODUCTS_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };

    default:
      return { ...state };
  }
}
