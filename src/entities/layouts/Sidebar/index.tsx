import { FC, ReactElement, memo } from "react";

import { Layout } from "antd";
import { Params, useLocation, useParams } from "react-router-dom";

import styles from "./style.module.scss";
import { SidebarType } from "entities/sidebar/types";
import Sidebar from "widgets/Sidebar";

type PropTypes = {
  children: ReactElement;
  getDefaultSelectedKeys: (
    pathname: string,
    param: Readonly<Params<string>>
  ) => string;
  links: SidebarType[];
};

const LayoutSidebar: FC<PropTypes> = ({
  children,
  links,
  getDefaultSelectedKeys,
}) => {
  const param = useParams();
  const { pathname } = useLocation();

  return (
    <div className={styles.wrapper}>
      <aside className={styles.menu}>
        <Sidebar
          links={links}
          selectedKey={getDefaultSelectedKeys(pathname, param)}
        />
      </aside>

      <Layout className={styles.layout}>{children}</Layout>
    </div>
  );
};

export default memo(LayoutSidebar);
