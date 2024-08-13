import { Alert } from "antd";
import { useDispatch, useSelector } from "react-redux";
import styles from "./style.module.scss";
import { useEffect } from "react";
import { clearAlert } from "store/Alert/Alert.action";

const WidgetsAlert = () => {
  const { isAlert } = useSelector((store: IRootState) => store.alert);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isAlert) {
      setTimeout(() => {
        dispatch(clearAlert());
      }, 5000);
    }
  }, [dispatch, isAlert]);

  return (
    <>
      {isAlert && (
        <Alert
          className={styles.wrapper}
          message="Something wrong"
          type="error"
          showIcon
          closable
        />
      )}
    </>
  );
};

export default WidgetsAlert;
