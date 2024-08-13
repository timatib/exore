import { FC, memo, ReactElement } from "react";

import { getDefaultSelectedKeys } from "entities/sidebar/utils";
import LayoutSidebar from "entities/layouts/Sidebar";
import { sidebarLinks } from "entities/sidebar/constants";

type PropTypes = { children: ReactElement };

const LayoutBase: FC<PropTypes> = ({ children }) => {
  return (
    <LayoutSidebar
      getDefaultSelectedKeys={getDefaultSelectedKeys}
      links={sidebarLinks}
    >
      {children}
    </LayoutSidebar>
  );
};

export default memo(LayoutBase);
