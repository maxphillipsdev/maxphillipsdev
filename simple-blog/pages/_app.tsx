import "../styles/globals.scss";
import "@fontsource/plus-jakarta-sans";

import NavBar from "../components/NavBar";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
