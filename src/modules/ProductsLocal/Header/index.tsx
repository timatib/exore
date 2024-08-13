import { UIHeaderWrapper } from "ui";
import styles from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import { PRODUCTS_LOCAL_NEW } from "utils/link";
import { Button } from "antd";
import { memo } from "react";

const ProductsLocalHeader = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(PRODUCTS_LOCAL_NEW);
  };

  return (
    <UIHeaderWrapper>
      <div className={styles.btn}>
        <Button type="primary" onClick={handleClick}>
          Create
        </Button>
      </div>
    </UIHeaderWrapper>
  );
};

export default memo(ProductsLocalHeader);
