import React from "react";

import { NextPage } from "next";

import { Container } from "../../src/components/common_components/container/Container";
import { BreadCrumbs } from "../../src/components/common_components/bread_crumbs/BreadCrumbs";
import { ShoppingCartOrder } from "../../src/components/shopping_cart_page_components/shopping_cart_order/ShoppingCartOrder";
import { FormPayment } from "../../src/components/shopping_cart_page_components/checkout/FormPayment";

const Checkout: NextPage = (): JSX.Element => {
  return (
    <section>
      <Container>
        <div>
          <BreadCrumbs
            list={[
              { id: 1, href: "/", text: "Home" },
              { id: 2, href: "/shopping_cart", text: "Shopping Cart" },
            ]}
            last="Checkout"
          />
          <ShoppingCartOrder title="Ваши данные" />
          <FormPayment />
        </div>
      </Container>
    </section>
  );
};

export default Checkout;
