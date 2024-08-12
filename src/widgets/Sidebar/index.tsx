import { FC, memo } from "react";

import styles from "./style.module.scss";
import SidebarItem from "./ui/SidebarItem";
import { SidebarType } from "entities/sidebar/types";

type PropTypes = {
  links: SidebarType[];
  selectedKey: string;
};

const Sidebar: FC<PropTypes> = ({ links, selectedKey }) => {
  return (
    <div className={styles.sidebar}>
      <nav>
        <ul className={styles.sidebar__list}>
          {links.map((item, index) => (
            <SidebarItem key={index} selectedKey={selectedKey} {...item} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default memo(Sidebar);
