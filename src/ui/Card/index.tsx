import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { FC } from "react";
import style from "./style.module.scss";

type PropsType = {
  image: string;
  handler?: () => void;
  description?: string;
  title?: string;
  price?: number;
};

const UICard: FC<PropsType> = ({
  image,
  handler,
  description,
  title,
  price,
}) => {
  return (
    <Card hoverable cover={<img src={image} alt="icon" />} onClick={handler}>
      <Meta title={title} description={description} />

      {price && (
        <div className={style.cardPriceWrapper}>
          Price: <span>{price}</span>
        </div>
      )}
    </Card>
  );
};

export default UICard;
