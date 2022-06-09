import type { NextPage } from "next";

import { ChooseProductBy } from "../src/components/home_components/choose_product_by/ChooseProductBy";
import { Hero } from "../src/components/home_components/hero/Hero";
import { NewProduct } from "../src/components/home_components/new_products/NewProduct";
import { SubCategory } from "../src/components/home_components/sub_category/SubCategory";
import { Tranding } from "../src/components/common_components/tranding/Tranding";
import { TypesCars } from "../src/components/common_components/types_cars/TypesCars";
import { DiscountProducts } from "./../src/components/home_components/discount_products/DiscountProducts";
import Head from "next/head";
import { Container } from "../src/components/common_components/container/Container";

const Home: NextPage = () => {
  return (
    <div className="home">
      <Head>
        <title>Главная</title>
      </Head>
      <Hero />
      <Container>
        <TypesCars isBig />
      </Container>
      <NewProduct />
      <ChooseProductBy />
      <SubCategory />
      <DiscountProducts />
      <Tranding />
    </div>
  );
};

export default Home;
