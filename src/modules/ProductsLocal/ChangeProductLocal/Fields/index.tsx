import { Form, Input, InputNumber, Upload, FormInstance } from "antd";
import { FC } from "react";
import styles from "./style.module.scss";
import TextArea from "antd/es/input/TextArea";
import { ProductsLocalFormEnum } from "../index.type";
import { IProductsLocalBody } from "entities/types/Products";
import { UploadChangeParam } from "antd/es/upload";

type PropsType = {
  form: FormInstance<IProductsLocalBody>;
};

const ChangeProductLocalFields: FC<PropsType> = ({ form }) => {
  const imageWatch: UploadChangeParam = Form.useWatch(
    ProductsLocalFormEnum.IMAGE,
    form
  );

  return (
    <>
      <Form.Item
        name={ProductsLocalFormEnum.IMAGE}
        rules={[{ required: true, message: "Please input Image" }]}
        className={styles.uploadWrapper}
      >
        <Upload
          listType="picture-card"
          fileList={imageWatch?.fileList}
          maxCount={1}
        >
          {!imageWatch?.fileList?.length && "Upload Image"}
        </Upload>
      </Form.Item>

      <Form.Item
        name={ProductsLocalFormEnum.TITLE}
        label="Title"
        rules={[{ required: true, message: "Please input Title" }]}
      >
        <Input placeholder="Title" />
      </Form.Item>

      <Form.Item
        name={ProductsLocalFormEnum.DESCRIPTION}
        label="Description"
        rules={[{ required: true, message: "Please input Description" }]}
      >
        <TextArea placeholder="Description" />
      </Form.Item>

      <Form.Item
        name={ProductsLocalFormEnum.PRICE}
        label="Price"
        rules={[{ required: true, message: "Please input Price" }]}
      >
        <InputNumber placeholder="Price" />
      </Form.Item>
    </>
  );
};

export default ChangeProductLocalFields;
