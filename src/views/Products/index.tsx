import { Card, Spin } from "antd";
import Meta from "antd/es/card/Meta";
import { QUERY_CONSTANT } from "entities/common/constant";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsListRequest } from "store/Products/Constacts.action";
import { QueryHelper } from "utils/helpers";
import styles from "./style.module.scss";
import ProductsHeader from "modules/Products/Header";

const ViewProducts = () => {
  const dispatch = useDispatch();
  const { isLoading, data } = useSelector(
    (store: IRootState) => store.products
  );

  useEffect(() => {
    dispatch(
      getProductsListRequest(
        QueryHelper.getQueryString({
          [QUERY_CONSTANT.LIMIT]: 8,
        })
      )
    );
  }, [dispatch]);

  const renderList = useMemo(
    () =>
      data?.map(({ description, image, title, id }) => (
        <Card key={id} hoverable cover={<img src={image} alt="icon" />}>
          <Meta title={title} description={description} />
        </Card>
      )),
    [data]
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
