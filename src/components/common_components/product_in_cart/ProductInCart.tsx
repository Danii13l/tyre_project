import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";

import styles from "./productInCart.module.scss";

import plus from "../../../images/icons/plus.svg";
import minus from "../../../images/icons/minus.svg";

interface ProductInCartInt {
  img: string | StaticImageData;
  name: string;
  size: string;
  amount: number;
  price: string;
  isBig?: boolean;
}

export const ProductInCart: FC<ProductInCartInt> = ({
  img,
  name,
  size,
  amount,
  price,
  isBig,
}): JSX.Element => {
  return (
    <div className={`${styles.item} ${isBig ? styles.big : ""}`}>
      <div className={styles.image_wrapper}>
        <Image src={img} alt="product" layout="fill" />
      </div>

      <div className={styles.text_wrapper}>
        <h4 className={styles.item_title}>{name}</h4>
        <p className={styles.item_size}>{size}</p>
      </div>

      <div className={styles.amount_wrapper}>
        <p>Кол-во</p>
        <div className={styles.amount_inner}>
          <div className={styles.dec}>
            <Image src={minus} alt="minus" />
          </div>
          <div className={styles.amount_number}>{amount}</div>
          <div className={styles.inc}>
            <Image src={plus} alt="plus" />
          </div>
        </div>
      </div>

      <div className={styles.price_wrapper}>
        <p>{price} сум</p>
        <span>Удалить</span>
      </div>
    </div>
  );
};
