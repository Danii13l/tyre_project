import Link from "next/link";
import { useState } from "react";

import styles from "./asideAdmin.module.scss";

const fakeAccardion = [
  {
    id: 1,
    title: "Главная",
    options: [
      { id: 1, text: "Личные данные" },
      { id: 2, text: "Моя карта" },
      { id: 3, text: "Адрес доставки" },
    ],
  },
  {
    id: 2,
    title: "История платежей",
    options: [
      { id: 4, text: "Личные данные" },
      { id: 5, text: "Моя карта" },
    ],
  },
  {
    id: 3,
    title: "История платежей",
    options: [
      { id: 4, text: "Личные данные" },
      { id: 5, text: "Моя карта" },
    ],
  },
  {
    id: 4,
    title: "История платежей",
    options: [
      { id: 4, text: "Личные данные" },
      { id: 5, text: "Моя карта" },
    ],
  },
];

export const AsideAdmin = (): JSX.Element => {
  const [activeAccard, setActiveAccard] = useState<number>(0);

  const handleAccard = (num: number): (() => void) => {
    return () => setActiveAccard(num);
  };

  return (
    <aside className={styles.aside_cabinet}>
      <Link href="/">
        <a className={styles.logo}>Logo</a>
      </Link>

      <div className={styles.content}>
        {fakeAccardion.map((item) => {
          return (
            <div className={styles.accardion_wrapper} key={item.id}>
              <h4 onClick={handleAccard(item.id)}>{item.title}</h4>
              <ul
                className={`${styles.accardion_list} ${
                  activeAccard === item.id ? styles.active : ""
                }`}
              >
                {item.options.map((sumitem) => (
                  <li key={sumitem.id}>{sumitem.text}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <Link href="/">
        <a className={styles.back}>На главную</a>
      </Link>
    </aside>
  );
};
