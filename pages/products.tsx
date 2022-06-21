import { useState } from "react";

import type { NextPage } from "next";
import Head from "next/head";

import { Container } from "../src/components/common_components/container/Container";
import { Controller } from "../src/components/products_components/content/controller/Controller";
import { HeaderProducts } from "./../src/components/products_components/top/HeaderProducts";
import { FilterProducts } from "../src/components/products_components/aside/FilterProducts";
import { Pagination } from "./../src/components/common_components/pagination/Pagination";
import { ContentProducts } from "../src/components/products_components/content/ContentProducts";
import { SubSection } from "../src/components/common_components/sub_section/SubSection";

import styles from "../src/components/products_components/products.module.scss";

const Products: NextPage = (): JSX.Element => {
  return (
    <div className={styles.products}>
      <Head>
        <title>Каталог</title>
      </Head>
      <Container>
        <HeaderProducts />
      </Container>

      <Container>
        <div className={styles.products_inner}>
          <FilterProducts />

          <div className={styles.content}>
            <Controller />
            <ContentProducts />
            <Pagination initialPage={1} pageCount={70} />
          </div>
        </div>
      </Container>

      <SubSection title="Похожие товары" />
      <SubSection title="ТОВАРЫ НА СКИДКЕ" />
    </div>
  );
};

export default Products;
