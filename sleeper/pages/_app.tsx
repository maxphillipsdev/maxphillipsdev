import "../styles/globals.css";
import "98.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className="desktop">
        <Component {...pageProps} />;
      </main>
    </>
  );
}

export default MyApp;
