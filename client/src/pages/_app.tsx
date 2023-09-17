import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import "./global.css";
import { IoProvider } from "socket.io-react-hook";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Historic</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <IoProvider>
        <Component {...pageProps} />
      </IoProvider>
    </React.Fragment>
  );
}

export default MyApp;
