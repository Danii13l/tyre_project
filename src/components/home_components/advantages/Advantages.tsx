import { FC } from "react";
import Image from "next/image";

import { Container } from "../../container/Container";

import styles from "./advantages.module.scss";

import flight from "../../../images/advantages_home/flight.svg";

interface advContentInt {
  id: number;
  img: string;
  title: string;
  text: string;
}

const advContent: advContentInt[] = [
  {
    id: 1,
    img: flight,
    title: "БЕсплатная доставка",
    text: "Во все города Узбекистана",
  },
  {
    id: 2,
    img: flight,
    title: "БЕсплатная доставка",
    text: "Во все города Узбекистана",
  },
  {
    id: 3,
    img: flight,
    title: "БЕсплатная доставка",
    text: "Во все города Узбекистана",
  },
  {
    id: 4,
    img: flight,
    title: "БЕсплатная доставка",
    text: "Во все города Узбекистана",
  },
];

export const Advantages: FC = () => {
  return (
    <div className={styles.advantages}>
      <Container>
        <div className={styles.advantages_inner}>
          {advContent.map((item) => {
            return (
              <div key={item.id} className={styles.advantages_item}>
                <div className={styles.advantages_img_box}>
                  <Image
                    src={item.img}
                    alt="icon"
                    className={styles.advantages_img}
                  />
                </div>

                <div className={styles.advantages_info}>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};
