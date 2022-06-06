import type { NextPage } from "next";

import { ChooseProductBy } from "../src/components/home_components/choose_product_by/ChooseProductBy";
import { Hero } from "../src/components/home_components/hero/Hero";
import { NewProduct } from "../src/components/home_components/new_products/NewProduct";
import { SubCategory } from "../src/components/home_components/sub_category/SubCategory";
import { TrandingHome } from "../src/components/home_components/tranding_home/TrandingHome";
import { TypesCars } from "../src/components/home_components/types_cars/TypesCars";

const Home: NextPage = () => {
  return (
    <div className="home">
      <Hero />
      <TypesCars />
      <NewProduct />
      <ChooseProductBy />
      <SubCategory />
      <TrandingHome />
      {/* <ProductsBy /> */}
    </div>
  );
};

export default Home;
