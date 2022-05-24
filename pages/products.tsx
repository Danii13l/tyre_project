import type { NextPage } from "next";

import { Container } from "../src/components/common_components/container/Container";
import { Controller } from "../src/components/products_components/controller/Controller";
import { GridView } from "../src/components/products_components/grid_view/GridView";
import { HotSale } from "../src/components/products_components/hot_sale/HotSale";
import { ListView } from "../src/components/products_components/list_view/ListView";

import styles from "../src/components/products_components/products.module.scss";
import img from "../src/images/slide_examples/chair.jpg";

const dataServer = [
  {
    id: 1,
    text: "Стул Oldem Дуб",
    price: "2 000",
    rating: 3,
    discount: 5,
    new: true,
    img: img,
    desc: "Koila is a chair designed for restaurants and food lovers in general. Designed in collaboration with restaurant professionals, it ensures comfort and an ideal posture, as there are armrests on both sides of the chair.",
    reviews: 5,
  },
  {
    id: 2,
    text: "Стул Oldem Дуб",
    price: "500 000",
    rating: 2,
    discount: null,
    new: false,
    img: img,
    desc: "Koila is a chair designed for restaurants and food lovers in general. Designed in collaboration with restaurant professionals, it ensures comfort and an ideal posture, as there are armrests on both sides of the chair.",
    reviews: 12,
  },
  {
    id: 3,
    text: "Стул Oldem Дуб",
    price: "12 220 000",
    rating: 5,
    discount: 23,
    new: true,
    img: img,
    desc: "Koila is a chair designed for restaurants and food lovers in general. Designed in collaboration with restaurant professionals, it ensures comfort and an ideal posture, as there are armrests on both sides of the chair.",
    reviews: 3,
  },
  {
    id: 4,
    text: "Стул Oldem Дуб",
    price: "20 000",
    rating: null,
    discount: null,
    new: false,
    img: img,
    desc: "Koila is a chair designed for restaurants and food lovers in general. Designed in collaboration with restaurant professionals, it ensures comfort and an ideal posture, as there are armrests on both sides of the chair.",
    reviews: 3,
  },
  {
    id: 5,
    text: "Стул Oldem Дуб",
    price: "300 000",
    rating: null,
    discount: null,
    new: false,
    img: img,
    desc: "Koila is a chair designed for restaurants and food lovers in general. Designed in collaboration with restaurant professionals, it ensures comfort and an ideal posture, as there are armrests on both sides of the chair.",
    reviews: 32,
  },
  {
    id: 6,
    text: "Стул Oldem Дуб",
    price: "300 000",
    rating: null,
    discount: null,
    new: true,
    img: img,
    desc: "Koila is a chair designed for restaurants and food lovers in general. Designed in collaboration with restaurant professionals, it ensures comfort and an ideal posture, as there are armrests on both sides of the chair.",
    reviews: 3,
  },
  {
    id: 7,
    text: "Стул Oldem Дуб",
    price: "300 000",
    rating: null,
    discount: null,
    new: true,
    img: img,
    desc: "Koila is a chair designed for restaurants and food lovers in general. Designed in collaboration with restaurant professionals, it ensures comfort and an ideal posture, as there are armrests on both sides of the chair.",
    reviews: 23,
  },
];

const Products: NextPage = () => {
  return (
    <div className={styles.products}>
      <Container>
        <div className={styles.products_inner}>
          <aside className={styles.sidebar}>
            <HotSale />
          </aside>
          <div className={styles.content}>
            <Controller />
            <ListView data={dataServer} />
            {/* <GridView data={dataServer} /> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Products;
