import { LeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { FC } from "react";
import style from "./style.module.scss";

type PropsTypes = {
  onBack: () => void;
  title: string;
};

const UIBack: FC<PropsTypes> = ({ onBack, title = "" }) => {
  return (
    <div className={style.wrapper}>
      <Button onClick={onBack} type="primary">
        <LeftOutlined /> Back
      </Button>
      <h3>{title}</h3>
    </div>
  );
};

export default UIBack;
