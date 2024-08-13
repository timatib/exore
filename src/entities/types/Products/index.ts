import { UploadChangeParam } from "antd/es/upload";

export type ProductsRatingType = {
  rate: number;
  count: number;
};

export interface IProductsResponseBody {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: ProductsRatingType;
  title: string;
}

export interface IProductsLocalBody {
  description: string;
  id: number;
  image: UploadChangeParam;
  price: number;
  title: string;
}
