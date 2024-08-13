import { FC } from "react";
import styles from "./style.module.scss";

type PropsType = {
  children: React.ReactNode;
};

const UIHeaderWrapper: FC<PropsType> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default UIHeaderWrapper;
