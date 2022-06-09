import { FC } from "react";
import { BreadCrumbs } from "../../common_components/bread_crumbs/BreadCrumbs";
import { TypesCars } from "../../common_components/types_cars/TypesCars";

import styles from "./headerProducts.module.scss";

export const HeaderProducts: FC = (): JSX.Element => {
  return (
    <div className={styles.header}>
      <BreadCrumbs
        list={[
          { id: 1, href: "/", text: "Главная" },
          { id: 2, href: "/products", text: "Каталог" },
        ]}
        last="Легковые"
      />
      <div className={styles.inner}>
        <h1 className={styles.heade_title}>Каталог товаров</h1>

        <div className={styles.header_right}>
          <TypesCars isBig={false} />
        </div>
      </div>
    </div>
  );
};
