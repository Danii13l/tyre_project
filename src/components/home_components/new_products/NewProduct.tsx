import { FC } from "react";
import { LinkTo } from "../../common_components/LinkTo/LinkTo";

import { Container } from "../../container/Container";

import styles from "./newProduct.module.scss";

interface newProductInt {
  id: number;
  href: string;
  img: string;
}

const newProductItems: newProductInt[] = [
  {
    id: 1,
    href: "#!",
    img: "",
  },
  {
    id: 2,
    href: "#!",
    img: "",
  },
  {
    id: 3,
    href: "#!",
    img: "",
  },
];

export const NewProduct: FC = () => {
  return (
    <div className={styles.new_product}>
      <Container>
        <div className={styles.new_product_inner}>
          {newProductItems.map((item) => {
            return (
              <div key={item.id} className={styles.new_product_item}>
                <LinkTo
                  href="#!"
                  text="ПОДРОБНЕЕ"
                  y="small"
                  x="left"
                  color="grey"
                />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};
