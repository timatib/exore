import {
  PRODUCTS,
  PRODUCTS_CURRENT,
  PRODUCTS_LOCAL,
  PRODUCTS_LOCAL_EDIT,
  PRODUCTS_LOCAL_NEW,
} from "utils/link";
import ViewProducts from "./Products";
import { RoutesType } from "entities/view/types";
import LayoutBase from "layouts/Base";
import ViewProductsCurrent from "./Products/Current";
import ViewProductsLocal from "./ProductsLocal";
import ProductsLocalCreate from "./ProductsLocal/Create";
import ProductsLocalEdit from "./ProductsLocal/Edit";

const routes: RoutesType[] = [
  {
    path: "/",
    element: <h1>Made by TIma Matsuka - @Timas0</h1>,
    name: "ViewHome",
    Layout: LayoutBase,
  },
  {
    path: PRODUCTS,
    element: <ViewProducts />,
    name: "ViewProducts",
    Layout: LayoutBase,
  },
  {
    path: PRODUCTS_CURRENT,
    element: <ViewProductsCurrent />,
    name: "ViewProductsCurrent",
    Layout: LayoutBase,
  },
  {
    path: PRODUCTS_LOCAL,
    element: <ViewProductsLocal />,
    name: "ViewProductsLocal",
    Layout: LayoutBase,
  },
  {
    path: PRODUCTS_LOCAL_EDIT,
    element: <ProductsLocalEdit />,
    name: "ProductsLocalEdit",
    Layout: LayoutBase,
  },
  {
    path: PRODUCTS_LOCAL_NEW,
    element: <ProductsLocalCreate />,
    name: "ProductsLocalCreate",
    Layout: LayoutBase,
  },
];

export default routes;
