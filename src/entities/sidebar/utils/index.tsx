import { Params } from "react-router-dom";
import { StringHelper } from "utils/helpers";
import {
  PRODUCTS_LOCAL,
  PRODUCTS,
  PRODUCTS_CURRENT,
  PRODUCTS_LOCAL_EDIT,
  PRODUCTS_LOCAL_NEW,
} from "utils/link";

export const getDefaultSelectedKeys = (
  pathname: string,
  param: Readonly<Params<string>>
) => {
  switch (pathname) {
    case PRODUCTS:
    case StringHelper.replaceByTypes(PRODUCTS_CURRENT, param, ["id"]):
      return "SIDEBAR.PRODUCTS";

    case PRODUCTS_LOCAL:
    case StringHelper.replaceByTypes(PRODUCTS_LOCAL_NEW, param, ["new"]):
    case StringHelper.replaceByTypes(PRODUCTS_LOCAL_EDIT, param, ["id"]):
      return "SIDEBAR.PRODUCTS_LOCAL";

    default:
      return "";
  }
};
