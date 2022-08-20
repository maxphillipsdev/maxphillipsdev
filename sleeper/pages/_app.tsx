import "../styles/globals.css";
import "98.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const handleClose = () => window.close();

  return (
    <>
      <div className="window fill">
        <div className="title-bar">
          <div className="title-bar-text">Max Phillips Dev Blog</div>
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
