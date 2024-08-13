import { Card, Rate } from "antd";
import Meta from "antd/es/card/Meta";
import { FC } from "react";
import style from "./style.module.scss";

type PropsType = {
  image?: string;
  handler?: () => void;
  description?: string;
  title?: string;
  price?: number;
  hoverable?: boolean;
  rating?: number;
};

const UICard: FC<PropsType> = ({
  image,
  handler,
  description,
  title,
  price,
  rating,
  hoverable = true,
}) => {
  return (
    <Card
      hoverable={hoverable}
      cover={<img src={image} alt="icon" />}
      onClick={handler}
    >
      {rating && (
        <Rate disabled defaultValue={rating} className={style.rating} />
      )}

      <Meta title={title} description={description} />

      <div className={style.price}>
        Price: <span>{price} $</span>
      </div>
    </Card>
  );
};

export default UICard;
