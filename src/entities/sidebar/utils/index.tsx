import { Params } from "react-router-dom";
import { StringHelper } from "utils/helpers";
import { PRODUCTS, PRODUCTS_CURRENT } from "utils/link";

export const getDefaultSelectedKeys = (
  pathname: string,
  param: Readonly<Params<string>>
) => {
  switch (pathname) {
    case PRODUCTS:
    case StringHelper.replaceByTypes(PRODUCTS_CURRENT, param, ["id"]):
      return "SIDEBAR.PRODUCTS_CURRENT";

    default:
      return "";
  }
};
