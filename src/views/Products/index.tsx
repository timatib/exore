import { Card, Spin } from "antd";
import Meta from "antd/es/card/Meta";
import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import styles from "./style.module.scss";
import ProductsHeader from "modules/Products/Header";
import useError from "hooks/useError";
import { useNavigate } from "react-router-dom";
import { PRODUCTS_CURRENT } from "utils/link";
import UICard from "ui/Card";

const ViewProducts = () => {
  const navigate = useNavigate();
  const { isLoading, data, errors } = useSelector(
    (store: IRootState) => store.products
  );

  useError({ isError: !!errors });

  const handleCardClick = useCallback(
    (id: string) => {
      navigate(PRODUCTS_CURRENT.replace(":id", id));
    },
    [navigate]
  );

  const renderList = useMemo(
    () =>
      data?.map(({ description, image, title, id }) => (
        <UICard
          key={id}
          handler={() => handleCardClick(String(id))}
          description={description}
          image={image}
          title={title}
        />
      )),
    [data, handleCardClick]
  );

  return (
    <main className={styles.wrapper}>
      <ProductsHeader />

      <Spin spinning={isLoading}>
        <div className={styles.list}> {renderList}</div>
      </Spin>
    </main>
  );
};

export default ViewProducts;
