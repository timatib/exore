import { Spin } from "antd";
import useError from "hooks/useError";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import style from "./style.module.scss";
import {
  clearProductsCurrentStore,
  getProductsByIdRequest,
} from "store/Products/Edit/ProductsCurrent.action";
import UIBack from "ui/Back";
import { PRODUCTS } from "utils/link";
import UICard from "ui/Card";

const ViewProductsCurrent = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, data, errors } = useSelector(
    (store: IRootState) => store.productsCurrent
  );

  useError({ isError: !!errors });

  const { description, image, title, price, rating } = data || {};

  const handleBack = () => {
    navigate(PRODUCTS);
  };

  useEffect(() => {
    if (params.id) {
      dispatch(getProductsByIdRequest(Number(params.id)));
    }
  }, [dispatch, params.id]);

  useEffect(() => {
    return () => {
      dispatch(clearProductsCurrentStore());
    };
  }, [dispatch]);

  return (
    <main className={style.wrapper}>
      <UIBack onBack={handleBack} title={title} />

      <Spin spinning={isLoading}>
        <UICard
          description={description}
          image={image}
          title={title}
          price={price}
          hoverable={false}
          rating={rating?.rate}
        />
      </Spin>
    </main>
  );
};

export default ViewProductsCurrent;
