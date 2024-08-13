import { PRODUCTS, PRODUCTS_CURRENT, PRODUCTS_LOCAL } from "utils/link";
import ViewProducts from "./Products";
import { RoutesType } from "entities/view/types";
import LayoutBase from "layouts/Base";
import ViewProductsCurrent from "./Products/Current";
import ViewProductsLocal from "./ProductsLocal";

const routes: RoutesType[] = [
  {
    path: "/",
    element: <></>,
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
];

export default routes;
