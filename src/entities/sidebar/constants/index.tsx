import { SettingOutlined } from "@ant-design/icons";

import { SidebarType } from "../types";
import { PRODUCTS } from "utils/link";

export const sidebarLinks: SidebarType[] = [
  {
    icon: <SettingOutlined />,
    sidebarKey: "SIDEBAR.PRODUCTS_CURRENT",
    label: "Products",
    link: PRODUCTS,
  },
];
