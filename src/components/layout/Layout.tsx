import { FC } from "react";
import { Header } from "./../header/Header";
import { Footer } from "./../footer/Footer";

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
