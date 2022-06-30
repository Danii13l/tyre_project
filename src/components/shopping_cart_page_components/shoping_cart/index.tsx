import Link from "next/link";

import { FC } from "react";

import { ButtonMain } from "../../common_components/button_main/ButtonMain";
import { ProductInCart } from "../../common_components/product_in_cart/ProductInCart";

import styles from "./shoppingCartIndex.module.scss";

import pay from "../../../images/icons/to_pay.svg";

// заменить any на типы

export const ShoppingCartIndex: FC<any> = ({ data }): JSX.Element => {
  return (
    <div className={styles.shoppingCartIndex}>
      <div className={styles.products}>
        {data.map((item: any) => (
          <ProductInCart key={item.id} {...item} isBig />
        ))}
      </div>
      <div className={styles.total}>
        <h3>Сумма заказа</h3>

        <div className={styles.total_count}>
          <p>Кол-во товаров</p>
          <span>4</span>
        </div>

        <div className={styles.total_price}>
          <p>Всего к оплате</p>
          <span>999 999 999 сум</span>
        </div>

        <Link href={"/shopping_cart/checkout"}>
          <a>
            <ButtonMain type="button" text="К оплате" img={pay} />
          </a>
        </Link>
      </div>
    </div>
  );
};
