import { ReactNode } from "react";

export type SidebarType = {
  children?: SidebarType[];
  icon?: ReactNode;
  label: string;
  link?: string;
  sidebarKey: string;
};
