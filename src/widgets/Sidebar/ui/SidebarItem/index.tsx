/* eslint-disable @typescript-eslint/no-use-before-define */
import { FC, memo } from "react";

import styles from "./style.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { SidebarType } from "entities/sidebar/types";

const SidebarItem: FC<SidebarType & { selectedKey: string }> = ({
  icon,
  label,
  link,
  selectedKey,
  sidebarKey,
}) => {
  return (
    <Link
      to={link || ""}
      key={sidebarKey}
      className={classNames(styles.sidebar__list__item, {
        [styles.sidebar__list__item_selected]: sidebarKey === selectedKey,
      })}
    >
      <li className={styles.sidebar__list__item__li}>
        {icon}

        <p>{label}</p>
      </li>
    </Link>
  );
};

export default memo(SidebarItem);
