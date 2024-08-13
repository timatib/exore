import {
  CREATE_PRODUCTS_LOCAL,
  UPDATE_PRODUCTS_LOCAL,
} from "./Products.constant";
import {
  IProductsLocalList,
  ProductsLocalListActionsTypes,
} from "./Products.type";

const initialState: IProductsLocalList = {
  data: [],
};

export default function productsLocalReducer(
  state = initialState,
  action: ProductsLocalListActionsTypes
): IProductsLocalList {
  switch (action.type) {
    case CREATE_PRODUCTS_LOCAL:
      return { ...state, data: [...state.data, action.payload] };
    case UPDATE_PRODUCTS_LOCAL:
      return {
        ...state,
        data: state.data?.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          }

          return item;
        }),
      };

    default:
      return { ...state };
  }
}
