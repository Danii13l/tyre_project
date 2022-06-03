import React from "react";
import { NextPage } from "next";

import { Container } from "../../src/components/common_components/container/Container";
import { BreadCrumbs } from "./../../src/components/common_components/bread_crumbs/BreadCrumbs";

import styles from "../../styles/pages/shopping_card_pages/checkout.module.scss";
import { ShoppingCardOrder } from "../../src/components/shopping_card_page_components/shopping_card_order/ShoppingCardOrder";
import { useRouter } from "next/router";
import { FormPayment } from "../../src/components/shopping_card_page_components/checkout/FormPayment";

const Checkout: NextPage = () => {
  const a = useRouter();

  return (
    <section className={styles.checkout}>
      <Container>
        <div className={styles.shoppnig_card_inner}>
          <BreadCrumbs
            list={[
              { id: 1, href: "/", text: "Home" },
              { id: 2, href: "/shopping_card", text: "Shopping Cart" },
            ]}
            last="Checkout"
          />
          <h1 className={styles.checkout_title}>Checkout</h1>

          <ShoppingCardOrder />
          <FormPayment />
        </div>
      </Container>
    </section>
  );
};

export default Checkout;
