import { Button } from "antd";
import styles from "./style.module.scss";
import { productsBtn } from "./constant";
import { useDispatch } from "react-redux";
import { getProductsListRequest } from "store/Products/Products.action";
import { QueryHelper } from "utils/helpers";
import { QUERY_CONSTANT, QUERY_SORT_VALUES } from "entities/common/constant";
import { memo, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  VerticalAlignBottomOutlined,
  VerticalAlignTopOutlined,
} from "@ant-design/icons";
import { UIHeaderWrapper } from "ui";

const ProductsHeader = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const {
    [QUERY_CONSTANT.LIMIT]: limitValue,
    [QUERY_CONSTANT.SORT]: sortValue,
  } = QueryHelper.getFromQueryString(location.search);

  const handlerBtnClick = (value: string | number) => {
    navigate(
      location.pathname +
        QueryHelper.getQueryString({
          [QUERY_CONSTANT.LIMIT]: value,
        })
    );
  };

  const handlerSort = () => {
    navigate(
      location.pathname +
        QueryHelper.getQueryString({
          [QUERY_CONSTANT.SORT]:
            sortValue === QUERY_SORT_VALUES.DESC
              ? QUERY_SORT_VALUES.ASC
              : QUERY_SORT_VALUES.DESC,
        })
    );
  };

  useEffect(() => {
    if (location?.search) {
      dispatch(getProductsListRequest(location?.search));
    }
  }, [dispatch, location?.search]);

  useEffect(() => {
    navigate(
      location.pathname +
        QueryHelper.getQueryString({
          [QUERY_CONSTANT.LIMIT]: 8,
        })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, location.pathname]);

  return (
    <UIHeaderWrapper>
      <div className={styles.btn}>
        <Button type="primary" onClick={handlerSort}>
          Sort
          {sortValue === QUERY_SORT_VALUES.DESC ? (
            <VerticalAlignTopOutlined />
          ) : (
            <VerticalAlignBottomOutlined />
          )}
        </Button>

        {productsBtn?.map(({ name, value }, index) => (
          <Button
            disabled={limitValue === String(value)}
            key={index}
            type={limitValue === String(value) ? "primary" : "default"}
            onClick={() => handlerBtnClick(value)}
          >
            {name}
          </Button>
        ))}
      </div>
    </UIHeaderWrapper>
  );
};

export default memo(ProductsHeader);
