import type { NextPage } from "next";

import Head from "next/head";

import { Container } from "../src/components/common_components/container/Container";
import { Controller } from "../src/components/products_components/content/controller/Controller";
import { HeaderProducts } from "./../src/components/products_components/top/HeaderProducts";
import { Tranding } from "../src/components/common_components/tranding/Tranding";
import { FilterProducts } from "../src/components/products_components/aside/FilterProducts";
import { Pagination } from "./../src/components/common_components/pagination/Pagination";
import { ContentProducts } from "../src/components/products_components/content/ContentProducts";

import styles from "../src/components/products_components/products.module.scss";
import { useState } from "react";
import { SubSection } from "../src/components/common_components/sub_section/SubSection";

const Products: NextPage = () => {
  const [view, setView] = useState<number>(0);

  const handleView = (num: number): void => {
    setView(num);
  };

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
            <Controller handleView={handleView} />
            <ContentProducts view={view} />
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
