import "../styles/globals.css";
import "98.css";
import type { AppProps } from "next/app";
import Image from "next/image";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const handleClose = () => window.close();

  return (
    <>
      <Head>
        <title>MaxPhillipsDev - Web 2.0 FTW!!</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="window fill">
        <div className="title-bar">
          <div className="title-bar-text">
            <style jsx>
              {`
                .title-bar-text {
                  display: flex;
                  align-items: center;
                }

                .title {
                  margin-left: 1rem;
                  font-size: 1rem;
                }

                .rainbow-text {
                  background-image: linear-gradient(
                    to right,
                    red,
                    orange,
                    yellow,
                    green,
                    blue,
                    indigo,
                    violet
                  );
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  animation: move 1000s linear infinite;
                }

                @keyframes move {
                  to {
                    background-position: 4500vh;
                  }
                }
              `}
            </style>
            <Image src="/icons/drum.webp" width={32} height={32} alt="icon" />
            <span className="title rainbow-text">Max Phillips Dev Blog</span>
          </div>
          <div className="title-bar-controls">
            <button aria-label="Close" onClick={handleClose} />
          </div>
        </div>
        <main className="window-body">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default MyApp;
