import Image from "next/image";
import styles from "./ShoppingCardProducts.module.scss";

import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { BottonNext } from "../button_next/BottonNext";

export const ShoppingCardProducts = ({ data }: any) => {
  return (
    <div className={styles.products}>
      <div className={styles.products_item}>
        <div className={styles.products_product}>PRODUCT</div>
        <div className={styles.products_price}>PRICE</div>
        <div className={styles.products_quantity}>QUANTITY</div>
        <div className={styles.products_total}>TOTAL</div>
      </div>
      {data.map((item: any) => {
        return (
          <div className={styles.products_item} key={item.id}>
            <div className={styles.products_product}>
              <div className={styles.products_img_wrapper}>
                <Image src={item.img} alt="product" layout="fill" />
              </div>
              <p>{item.title}</p>
            </div>
            <div className={styles.products_price}>{item.price} сум</div>
            <div className={styles.products_quantity}>
              <input type="number" value={item.quantity} required />
            </div>
            <div className={styles.products_total}>
              {item.total} сум <AiOutlineClose className={styles.close} />
            </div>
          </div>
        );
      })}

      <div className={styles.products_total_wrapper}>
        <p>
          Total products: <span>12</span>
        </p>
        <p>
          Total price: <span>2 000 000 сум</span>
        </p>
        <BottonNext href="/shopping_card/checkout" text="PROCEED TO CHECKOUT" />
      </div>
    </div>
  );
};
