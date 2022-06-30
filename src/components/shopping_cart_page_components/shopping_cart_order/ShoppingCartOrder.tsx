import { useRouter } from "next/router";
import { FC } from "react";

import styles from "./ShoppingCartOrder.module.scss";

const data = [
  { id: 1, order: "01", text: "Корзина" },
  { id: 2, order: "02", text: "Ваши данные" },
  { id: 3, order: "03", text: "Оплата" },
];

interface orderInt {
  title: string;
}

export const ShoppingCartOrder: FC<orderInt> = ({ title }): JSX.Element => {
  const urlPath = useRouter();
  const active = urlPath.pathname.split("/").filter((item) => item.length > 0);

  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.shopping_card_order}>
        {data.map((item, index) => {
          return (
            <div
              key={item.id}
              className={`${styles.shopping_card_item} ${
                index < active.length ? styles.active : ""
              }`}
            >
              <h4 className={styles.order}>{item.order}</h4>
              <p className={styles.text}>{item.text}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
