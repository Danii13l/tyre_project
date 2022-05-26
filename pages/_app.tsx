import { Layout } from "../src/components/layout/Layout";

import type { AppProps } from "next/app";
import "../styles/globals.scss";
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
