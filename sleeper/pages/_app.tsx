import "../styles/globals.css";
import "98.css";
import type { AppProps } from "next/app";
import { createRef } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const desktopRef = createRef<HTMLElement>();

  return (
    <>
      <main className="desktop" ref={desktopRef}>
        <Component {...pageProps} desktopRef={desktopRef} />
      </main>
    </>
  );
}

export default MyApp;
