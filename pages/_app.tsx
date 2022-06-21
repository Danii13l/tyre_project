import { Layout } from "../src/components/layout/Layout";
import { FC } from "react";

import type { AppProps } from "next/app";

import "../styles/globals.scss";

const MyApp: FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
