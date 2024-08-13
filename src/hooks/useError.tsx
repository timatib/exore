import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { addAlert } from "store/Alert/Alert.action";

export default function useError({ isError = false }: { isError?: boolean }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      dispatch(addAlert());
    }
  }, [dispatch, isError]);
}
