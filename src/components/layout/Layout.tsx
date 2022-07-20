import { FC, useState, useCallback } from "react";

import { Header } from "../common_components/header/Header";
import { Footer } from "../common_components/footer/Footer";

import { StandardComponentProps } from "../../interfaces/StandardComponentProps";

import { ShoppingCartSidebar } from "../common_components/shopping_cart_sidebar/ShoppingCartSidebar";

import { useRouter } from "next/router";
import { Account } from "./../account/Account";

export const Layout: FC<StandardComponentProps> = ({
  children,
}): JSX.Element => {
  const { pathname } = useRouter();

  const [sideCart, setSideCart] = useState<boolean>(false);
  const [account, setAccount] = useState<boolean>(false);

  const handleSideCart = useCallback((val: boolean): (() => void) => {
    return () => setSideCart(val);
  }, []);

  const handleAccount = useCallback((val: boolean): (() => void) => {
    return () => setAccount(val);
  }, []);

  return (
    <>
      {pathname !== "/admin" && (
        <Header handleSideCart={handleSideCart} handleAccount={handleAccount} />
      )}
      <Account account={account} handleAccount={handleAccount} />
      <ShoppingCartSidebar
        sideCart={sideCart}
        handleSideCart={handleSideCart}
      />
      {children}
      {pathname !== "/admin" && <Footer />}
    </>
  );
};
