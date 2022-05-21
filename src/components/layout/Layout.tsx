import { FC } from "react";
import { Header } from "../common_components/header/Header";
import { Footer } from "../common_components/footer/Footer";

import { StandardComponentProps } from "./../../interfaces/StandardComponentProps";

export const Layout = ({ children }: StandardComponentProps) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
