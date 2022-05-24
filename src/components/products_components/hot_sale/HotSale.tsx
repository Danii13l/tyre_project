import React from "react";

import styles from "./hotSale.module.scss";

import img from "../../../images/slide_examples/slide2.jpg";
import { SubProduct } from "../../common_components/sub_product/SubProduct";

const data = [
  {
    id: 1,
    img: img,
    title: "Гостинная Валенсия Каштан",
    rating: 3,
    oldPrice: "140 000",
    newPrice: "100 000",
  },
  {
    id: 2,
    img: img,
    title: "Гостинная Валенсия Каштан",
    rating: 1,
    oldPrice: "140 000",
    newPrice: "100 000",
  },
  {
    id: 3,
    img: img,
    title: "Гостинная Валенсия Каштан",
    rating: null,
    oldPrice: "140 000",
    newPrice: "100 000",
  },
];

export const HotSale = () => {
  return (
    <div className={styles.hot_sale}>
      <h3>HOT SALE</h3>
      <>
        {data.map((item) => {
          return (
            <div key={item.id} className={styles.hot_sale_items}>
              <SubProduct
                img={item.img}
                title={item.title}
                rating={item.rating}
                oldPrice={item.oldPrice}
                newPrice={item.newPrice}
              />
            </div>
          );
        })}
      </>
    </div>
  );
};
