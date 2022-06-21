import type { NextPage } from "next";
import Head from "next/head";

import { ChooseProductBy } from "../src/components/home_components/choose_product_by/ChooseProductBy";
import { Hero } from "../src/components/home_components/hero/Hero";
import { NewProduct } from "../src/components/home_components/new_products/NewProduct";
import { SubCategory } from "../src/components/home_components/sub_category/SubCategory";
import { Tranding } from "../src/components/common_components/tranding/Tranding";
import { TypesCars } from "../src/components/common_components/types_cars/TypesCars";
import { Container } from "../src/components/common_components/container/Container";
import { SubSection } from "./../src/components/common_components/sub_section/SubSection";

const Home: NextPage = (): JSX.Element => {
  return (
    <div className="home">
      <Head>
        <title>Главная</title>
      </Head>
      <Container>
        <TypesCars isBig />
      </Container>
      <Hero />
      <ChooseProductBy />
      <NewProduct />
      <SubCategory />
      <SubSection title="ТОВАРЫ НА СКИДКЕ" />
      <Tranding />
    </div>
  );
};

export default Home;
