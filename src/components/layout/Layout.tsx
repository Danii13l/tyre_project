import { FC } from "react";
import { Header } from "../common_components/header/Header";
import { Footer } from "../common_components/footer/Footer";

import { StandardComponentProps } from "../../interfaces/StandardComponentProps";

import { ShoppingCardSidebar } from "../common_components/shopping_card_sidebar/ShoppingCardSidebar";

export const Layout = ({ children }: StandardComponentProps) => {
  return (
    <div>
      <Header />
      {/* <ModalProduct /> */}
      {children}
      <Footer />
      {/*  <ShoppingCardSidebar /> */}
    </div>
  );
};
