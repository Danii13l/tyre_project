import { FC } from "react";

import { Header } from "../common_components/header/Header";
import { Footer } from "../common_components/footer/Footer";

import { StandardComponentProps } from "../../interfaces/StandardComponentProps";

import { ShoppingCardSidebar } from "../common_components/shopping_card_sidebar/ShoppingCardSidebar";

import { useRouter } from "next/router";
import { Account } from "./../account/Account";

export const Layout: FC<StandardComponentProps> = ({
  children,
}): JSX.Element => {
  const { pathname } = useRouter();

  return (
    <div>
      {pathname !== "/admin" && <Header />}
      {children}
      {/* <Account /> */}

      {/* {pathname !== "/admin" && <Footer />} */}
      {/* <ShoppingCardSidebar /> */}
    </div>
  );
};
