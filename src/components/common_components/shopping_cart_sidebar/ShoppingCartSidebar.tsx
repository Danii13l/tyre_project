import { FC, useState, useEffect, useCallback, memo } from "react";

import Image from "next/image";
import Link from "next/link";

import { ButtonMain } from "../button_main/ButtonMain";
import { ProductInCart } from "../product_in_cart/ProductInCart";

import styles from "./ShoppingCartSidebar.module.scss";

// fake
import fakeImg from "../../../images/fake_photo/balloon2.png";

const fakeData = [
  {
    id: 1,
    img: fakeImg,
    name: "Pirelli Scorpion VerdeAll   Season a6",
    price: "999 999 000",
    quantity: 3,
    size: "225/55R17",
    amount: 22,
  },
  {
    id: 2,
    img: fakeImg,
    name: "Pirelli Scorpion ",
    price: "0",
    quantity: 3,
    size: "225/55R17",
    amount: 2,
  },
  {
    id: 3,
    img: fakeImg,
    name: "Pirelli Scorpion VerdeAll Season",
    price: "200 000",
    quantity: 3,
    size: "225/55R17",
    amount: 2,
  },

  {
    id: 4,
    img: fakeImg,
    name: "Marvelous Modern 3 SeaterVerdeAll Season",
    price: "1 900 000",
    quantity: 3,
    size: "225/55R17",
    amount: 2,
  },
  {
    id: 5,
    img: fakeImg,
    name: "Marvelous Modern 3 Seater",
    price: "3 000 000",
    quantity: 3,
    size: "225/55R17",
    amount: 2,
  },
  {
    id: 6,
    img: fakeImg,
    name: "Marvelous Modern 3 Seater",
    price: "34 000 000",
    quantity: 3,
    size: "225/55R17",
    amount: 2,
  },
];

interface sidebarCart {
  sideCart: boolean;
  handleSideCart: (val: boolean) => () => void;
}

export const ShoppingCartSidebar: FC<sidebarCart> = memo(
  ({ sideCart, handleSideCart }): JSX.Element => {
    return (
      <>
        {sideCart && (
          <div className={styles.shopping_sidebar}>
            <div className={styles.bg}></div>
            <div className={styles.shopping_inner}>
              <h3 className={styles.title}>КОРЗИНА</h3>
              <div className={styles.shopping_products}>
                {fakeData.map((item) => {
                  return <ProductInCart key={item.id} {...item} />;
                })}
              </div>
              <div className={styles.shopping_total}>
                <p>
                  Общее количество: <span>{3}шт</span>
                </p>
                <p>
                  Общая сумма: <span>{"100 000 000"} сум</span>
                </p>
              </div>
              <div className={styles.shopping_links}>
                <ButtonMain
                  text="В корзину"
                  type="button"
                  img="/images/common/add_to_cart.svg"
                  second
                />

                <Link href="/">
                  <a>
                    <ButtonMain
                      text="К оплате"
                      type="button"
                      img="/images/common/to_pay.svg"
                    />
                  </a>
                </Link>
              </div>

              <div className={styles.close} onClick={handleSideCart(false)}>
                <Image
                  src="/images/common/close_x.svg"
                  alt="close"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
);

ShoppingCartSidebar.displayName = "ShoppingCartSidebar";
