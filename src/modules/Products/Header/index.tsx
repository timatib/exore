import { Button } from "antd";
import styles from "./style.module.scss";
import { productsBtn } from "./constant";

const ProductsHeader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.btn}>
        {productsBtn.map(({ name }, index) => (
          <Button key={index} type="primary">
            {name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ProductsHeader;
