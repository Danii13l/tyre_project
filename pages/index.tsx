import type { NextPage } from "next";

import { Advantages } from "../src/components/home_components/advantages/Advantages";
import { ChooseProductBy } from "../src/components/home_components/choose_product_by/ChooseProductBy";
import { Hero } from "../src/components/home_components/hero/Hero";
import { NewProduct } from "../src/components/home_components/new_products/NewProduct";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Advantages />
      <NewProduct />
      <ChooseProductBy />
    </>
  );
};

export default Home;
