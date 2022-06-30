import React from "react";

import { NextPage } from "next";
import { Container } from "../../src/components/common_components/container/Container";

import { BreadCrumbs } from "../../src/components/common_components/bread_crumbs/BreadCrumbs";
import { ShoppingCartOrder } from "../../src/components/shopping_cart_page_components/shopping_cart_order/ShoppingCartOrder";
import { ShoppingCartIndex } from "./../../src/components/shopping_cart_page_components/shoping_cart/index";

import fakeImg from "../../src/images/fake_photo/balloon2.png";

const fakeData = [
  {
    id: 1,
    img: fakeImg,
    name: "Pirelli Scorpion VerdeAll Season",
    price: "999 999 000",
    quantity: 3,
    size: "225/55R17",
    amount: 22,
  },
  {
    id: 2,
    img: fakeImg,
    name: "Michelin Latitude Sport 3 Acoustic",
    price: "0",
    quantity: 3,
    size: "225/55R17",
    amount: 2,
  },
  {
    id: 3,
    img: fakeImg,
    name: "Pirelli Scorpion VerdeAll Season",
    price: "200 000",
    quantity: 3,
    size: "225/55R17",
    amount: 2,
  },

  {
    id: 4,
    img: fakeImg,
    name: "Marvelous Modern 3 SeaterVerdeAll Season",
    price: "1 900 000",
    quantity: 3,
    size: "225/55R17",
    amount: 2,
  },
  {
    id: 5,
    img: fakeImg,
    name: "WINTER SOTTOZERO™ SERIE II",
    price: "3 000 000",
    quantity: 3,
    size: "225/55R17",
    amount: 2,
  },
  {
    id: 6,
    img: fakeImg,
    name: "Marvelous Modern 3 Seater",
    price: "34 000 000",
    quantity: 3,
    size: "225/55R17",
    amount: 2,
  },
];

const ShoppingCart: NextPage = (): JSX.Element => {
  return (
    <section>
      <Container>
        <div>
          <BreadCrumbs
            list={[{ id: 1, href: "/", text: "Главная" }]}
            last="Корзина"
          />

          <ShoppingCartOrder title="Покупки" />
          <ShoppingCartIndex data={fakeData} />
        </div>
      </Container>
    </section>
  );
};

export default ShoppingCart;
