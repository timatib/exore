import styles from "./style.module.scss";
import { useCallback, useMemo } from "react";
import ProductsLocalHeader from "modules/ProductsLocal/Header";
import { UICard } from "ui";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PRODUCTS_LOCAL_EDIT } from "utils/link";
import { Empty } from "antd";

const ViewProductsLocal = () => {
  const navigate = useNavigate();

  const { data } = useSelector((store: IRootState) => store.productsLocal);

  const handleCardClick = useCallback(
    (id: string) => {
      navigate(PRODUCTS_LOCAL_EDIT.replace(":id", id));
    },
    [navigate]
  );

  const renderList = useMemo(
    () =>
      data?.map(({ description, image, title, id, price }) => (
        <UICard
          key={id}
          handler={() => handleCardClick(String(id))}
          description={description}
          image={String(image?.file?.thumbUrl)}
          title={title}
          price={price}
        />
      )),
    [data, handleCardClick]
  );

  return (
    <main className={styles.wrapper}>
      <ProductsLocalHeader />

      {!!renderList?.length && <div className={styles.list}> {renderList}</div>}

      {!renderList?.length && <Empty />}
    </main>
  );
};

export default ViewProductsLocal;
