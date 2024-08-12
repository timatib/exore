import { PRODUCTS } from "utils/link";
import ViewProducts from "./Products";
import { RoutesType } from "entities/view/types";
import LayoutBase from "layouts/Base";


const routes: RoutesType[] = [
    {
        path: '/',
        element: <></>,
        name: 'ViewHome',
        Layout: LayoutBase
      },
  {
    path: PRODUCTS,
    element: <ViewProducts />,
    name: 'ViewProducts',
    Layout: LayoutBase
  },
 
];

export default routes;
