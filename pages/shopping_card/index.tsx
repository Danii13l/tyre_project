import React from "react";

import { NextPage } from "next";
import { Container } from "../../src/components/common_components/container/Container";

import { BreadCrumbs } from "../../src/components/common_components/bread_crumbs/BreadCrumbs";
import { ShoppingCardOrder } from "../../src/components/shopping_card_page_components/shopping_card_order/ShoppingCardOrder";
import { ShoppingCardProducts } from "../../src/components/shopping_card_page_components/shopping_card_products/ShoppingCardProducts";

import styles from "../../styles/pages/shopping_card_pages/shoppingCardPage.module.scss";

import img from "../../src/images/fake_photo/balloon2.png";

const fakeData = [
  {
    id: 1,
    img: img,
    title: "Marvelous Modern 3 Seater",
    price: "599,00",
    quantity: 2,
    total: " 599,00",
  },
  {
    id: 2,
    img: img,
    title: "Marvelous Modern 3 Seater Seater Seater",
    price: "52299,00",
    quantity: 20,
    total: " 599,00",
  },
  {
    id: 3,
    img: img,
    title: "Marvelous Modern 3 Seater",
    price: "5129,00",
    quantity: 4,
    total: " 51299,00",
  },
];

const ShoppingCard: NextPage = (): JSX.Element => {
  return (
    <section className={styles.shoppnig_card}>
      <Container>
        <div className={styles.shoppnig_card_inner}>
          <BreadCrumbs
            list={[{ id: 1, href: "/", text: "Home" }]}
            last="Shopping Cart"
          />
          <h1 className={styles.shoppnig_card_title}>Shooping Card</h1>

          <ShoppingCardOrder />
          <ShoppingCardProducts data={fakeData} />
        </div>
      </Container>
    </section>
  );
};

export default ShoppingCard;
