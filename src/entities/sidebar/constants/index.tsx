import { DatabaseOutlined, HddOutlined } from "@ant-design/icons";

import { SidebarType } from "../types";
import { PRODUCTS_LOCAL, PRODUCTS } from "utils/link";

export const sidebarLinks: SidebarType[] = [
  {
    icon: <DatabaseOutlined />,
    sidebarKey: "SIDEBAR.PRODUCTS",
    label: "Products",
    link: PRODUCTS,
  },
  {
    icon: <HddOutlined />,
    sidebarKey: "SIDEBAR.PRODUCTS_LOCAL",
    label: "Products local",
    link: PRODUCTS_LOCAL,
  },
];
