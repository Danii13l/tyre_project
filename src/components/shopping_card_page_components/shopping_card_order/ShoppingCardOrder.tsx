import { useRouter } from "next/router";
import { FC } from "react";

import styles from "./ShoppingCardOrder.module.scss";

const data = [
  { id: 1, order: "01", text: "Корзина", path: "/shopping_card" },
  { id: 2, order: "02", text: "Ваши данные" },
  { id: 3, order: "03", text: "Оплата" },
];

export const ShoppingCardOrder: FC = (): JSX.Element => {
  const urlPath = useRouter();
  const active = urlPath.pathname.split("/").filter((item) => item.length > 0);

  return (
    <div className={styles.shopping_card_order}>
      {data.map((item, index) => {
        return (
          <div
            key={item.id}
            className={`${styles.shopping_card_item} ${
              index < active.length ? styles.active : ""
            }`}
          >
            <h4>{item.order}</h4>
            <p>{item.text}</p>
          </div>
        );
      })}
    </div>
  );
};
