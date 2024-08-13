import { Button, Form } from "antd";
import ChangeProductLocalFields from "./Fields";
import styles from "./style.module.scss";
import { UIBack } from "ui";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { PRODUCTS_LOCAL } from "utils/link";
import { useDispatch, useSelector } from "react-redux";
import {
  createProductsLocal,
  updateProductsLocal,
} from "store/ProductsLocal/Products.action";
import { IProductsLocalBody } from "entities/types/Products";
import { ProductsLocalFormEnum } from "./index.type";
import { useEffect } from "react";

const INITIAL_VALUES = {
  title: "",
  descriptions: "",
  image: null,
  price: null,
};

const ChangeProductLocal = () => {
  const locations = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data } = useSelector((store: IRootState) => store.productsLocal);

  const [form] = Form.useForm<IProductsLocalBody>();

  const handleBack = () => {
    navigate(PRODUCTS_LOCAL);
  };

  const handleFinish = (values: IProductsLocalBody) => {
    if (locations.pathname.includes("new")) {
      dispatch(
        createProductsLocal({
          ...values,
          id: Math.floor(Math.random() * 100),
        })
      );
    } else {
      dispatch(
        updateProductsLocal({
          ...values,
          id: Number(params.id),
        })
      );
    }

    handleBack();
  };

  useEffect(() => {
    if (data) {
      const currentProduct = data?.find(
        (item) => item.id === Number(params.id)
      );

      form.setFields([
        {
          name: ProductsLocalFormEnum.IMAGE,
          value: currentProduct?.image,
        },
        {
          name: ProductsLocalFormEnum.DESCRIPTION,
          value: currentProduct?.description,
        },
        {
          name: ProductsLocalFormEnum.TITLE,
          value: currentProduct?.title,
        },
        {
          name: ProductsLocalFormEnum.PRICE,
          value: currentProduct?.price,
        },
      ]);
    }
  }, [data, form, params.id]);

  useEffect(() => {
    if (params.id && !data.length) {
      navigate(PRODUCTS_LOCAL);
    }
  }, [data.length, navigate, params.id]);

  return (
    <main>
      <UIBack
        onBack={handleBack}
        title={
          locations.pathname.includes("new")
            ? "Create product"
            : "Update product"
        }
      />

      <Form
        form={form}
        onFinish={handleFinish}
        initialValues={INITIAL_VALUES}
        validateTrigger="onSubmit"
        layout="vertical"
        className={styles.wrapper}
      >
        <ChangeProductLocalFields form={form} />

        <Button htmlType="submit" type="primary">
          Submit
        </Button>
      </Form>
    </main>
  );
};

export default ChangeProductLocal;
