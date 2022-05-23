import { Container } from "../../common_components/container/Container";
import { Rating } from "../../common_components/rating/Rating";

import Image from "next/image";

import styles from "./productsBy.module.scss";
import imga from "../../../images/slide_examples/a.jpg";

const data = [
  {
    id: 1,
    title: "РАСПРОДАЖА",
    products: [
      {
        id: 1,
        img: imga,
        title: "Гостинная Валенсия Каштан",
        rating: 3,
        oldPrice: "140 000",
        newPrice: "100 000",
      },
      {
        id: 2,
        img: imga,
        title: "Гостинная Валенсия Каштан",
        rating: 3,
        oldPrice: "140 000",
        newPrice: "100 000",
      },
      {
        id: 3,
        img: imga,
        title: "Гостинная Валенсия Каштан",
        rating: 3,
        oldPrice: "140 000",
        newPrice: "100 000",
      },
    ],
  },
  {
    id: 2,
    title: "САМЫЕ ПОКУПАЕМЫЕ",
    products: [
      {
        id: 4,
        img: imga,
        title: "Гостинная Валенсия Каштан",
        rating: 3,
        oldPrice: "140 000",
        newPrice: "100 000",
      },
      {
        id: 5,
        img: imga,
        title: "Гостинная Валенсия Каштан",
        rating: null,
        oldPrice: "140 000",
        newPrice: "100 000",
      },
      {
        id: 6,
        img: imga,
        title: "Гостинная Валенсия Каштан",
        rating: null,
        oldPrice: "140 000",
        newPrice: "100 000",
      },
    ],
  },
  {
    id: 3,
    title: "ТОВАРЫ НА СКИДКЕ",
    products: [
      {
        id: 7,
        img: imga,
        title: "Гостинная Валенсия Каштан",
        rating: null,
        oldPrice: "140 000",
        newPrice: "100 000",
      },
      {
        id: 8,
        img: imga,
        title: "Гостинная Валенсия Каштан",
        rating: null,
        oldPrice: "140 000",
        newPrice: "100 000",
      },
      {
        id: 9,
        img: imga,
        title: "Гостинная Валенсия Каштан",
        rating: 3,
        oldPrice: "140 000",
        newPrice: "100 000",
      },
    ],
  },
  {
    id: 4,
    title: "С ВЫСОКИМ РЕЙТИНГОМ",
    products: [
      {
        id: 10,
        img: imga,
        title: "Гостинная Валенсия Каштан",
        rating: 3,
        oldPrice: "140 000",
        newPrice: "100 000",
      },
      {
        id: 11,
        img: imga,
        title: "Гостинная Валенсия Каштан",
        rating: 3,
        oldPrice: "140 000",
        newPrice: "100 000",
      },
      {
        id: 12,
        img: imga,
        title: "Гостинная Валенсия Каштан",
        rating: null,
        oldPrice: "140 000",
        newPrice: "100 000",
      },
    ],
  },
];

export const ProductsBy = () => {
  return (
    <div className={styles.prodcut_by}>
      <Container>
        <div className={styles.prodcut_by_inner}>
          {data.map((item) => {
            return (
              <div key={item.id} className={styles.prodcut_by_item}>
                <h5>{item.title}</h5>
                {item.products.map((subitem) => {
                  return (
                    <div key={subitem.id} className={styles.prodcut_by_subitem}>
                      <div className={styles.prodcut_by_imgbox}>
                        <Image src={subitem.img} alt="product" layout="fill" />
                      </div>

                      <div className={styles.prodcut_by_infobox}>
                        <h6
                          className={`${styles.prodcut_by_subtitle} ${
                            subitem.rating ? styles.prodcut_by_norating : ""
                          }`}
                        >
                          {subitem.title}
                        </h6>
                        <div className={styles.prodcut_by_rating}>
                          {subitem.rating && <Rating num={subitem.rating} />}
                        </div>
                        <p className={styles.prodcut_by_price}>
                          <span>{subitem.oldPrice}</span> {subitem.newPrice} сум
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};
