import "../styles/globals.css";
import "98.css";
import type { AppProps } from "next/app";
import Image from "next/image";

function MyApp({ Component, pageProps }: AppProps) {
  const handleClose = () => window.close();

  return (
    <>
      <div className="window fill">
        <div className="title-bar">
          <div
            className="title-bar-text"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image src="/favicon.ico" width={16} height={16} alt="icon" />
            <span style={{ marginLeft: "10px" }}>Max Phillips Dev Blog</span>
          </div>
          <div className="title-bar-controls">
            <button aria-label="Close" onClick={handleClose} />
          </div>
        </div>
        <main className="window-body" style={{ backgroundColor: "#FFFFE1" }}>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default MyApp;
