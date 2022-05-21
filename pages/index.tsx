import type { NextPage } from "next";

import { Advantages } from "../src/components/home_components/advantages/Advantages";
import { ChooseProductBy } from "../src/components/home_components/choose_product_by/ChooseProductBy";
import { Hero } from "../src/components/home_components/hero/Hero";
import { NewProduct } from "../src/components/home_components/new_products/NewProduct";
import { ProductsBy } from "../src/components/home_components/products_by/ProductsBy";
import { SubCategory } from "../src/components/home_components/sub_category/SubCategory";
import { TrandingHome } from "../src/components/home_components/tranding_home/TrandingHome";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Advantages />
      <NewProduct />
      <ChooseProductBy />
      <SubCategory />
      <TrandingHome />
      <ProductsBy />
    </>
  );
};

export default Home;
