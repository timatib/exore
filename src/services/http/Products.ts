import { GET } from "utils/http";

const basePath = "/products";

export const getProductsListApi = (query = '') => GET(basePath + query);
