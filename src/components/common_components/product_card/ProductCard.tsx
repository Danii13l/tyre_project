import Image from "next/image";
import { Rating } from "../rating/Rating";

import styles from "./productCard.module.scss";

interface productCardInt {
  id?: number;
  discount: number | null;
  isNew: boolean;
  rating: number | null;
  text: string;
  price: string;
  img?: any;
  width?: string | null;
}

export const ProductCard = ({
  id,
  discount,
  isNew,
  rating,
  text,
  price,
  img,
  width,
}: productCardInt) => {
  const styleBg = {
    background: `url(${img})`,
  };
  return (
    <div className={`${styles.pruduct_card} ${width ? styles[width] : ""}`}>
      <div className={styles.pruduct_card_top}>
        <div className={styles.pruduct_card_img_wrapper}>
          <Image src={img} alt="aa" layout="fill" />
        </div>

        {discount && (
          <div className={styles.pruduct_card_discount}>{discount}% Скидка</div>
        )}
        {isNew && (
          <div
            className={`${styles.pruduct_card_new} ${
              discount ? styles.with_discount : ""
            }`}
          >
            НОВИНКА
          </div>
        )}
        {rating && (
          <div className={styles.pruduct_card_rating}>
            <Rating num={rating} />
          </div>
        )}
      </div>
      <div className={styles.pruduct_card_bottom}>
        <p>{text}</p>
        <h3>{price} сум</h3>
      </div>
    </div>
  );
};
