import {
  CLEAR_PRODUCTS_CURRENT_STORE,
  GET_PRODUCTS_BY_ID_FAILURE,
  GET_PRODUCTS_BY_ID_REQUEST,
  GET_PRODUCTS_BY_ID_SUCCESS,
} from "./ProductsCurrent.constant";
import {
  IProductsCurrent,
  ProductsCurrentActionsTypes,
} from "./ProductsCurrent.type";

const initialState: IProductsCurrent = {
  isLoading: false,
  data: null,
  errors: null,
};

export default function productsCurrentReducer(
  state = initialState,
  action: ProductsCurrentActionsTypes
): IProductsCurrent {
  switch (action.type) {
    case GET_PRODUCTS_BY_ID_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PRODUCTS_BY_ID_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case GET_PRODUCTS_BY_ID_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };

    case CLEAR_PRODUCTS_CURRENT_STORE:
      return {
        ...initialState,
      };

    default:
      return { ...state };
  }
}
