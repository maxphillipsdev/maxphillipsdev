import "@fontsource/plus-jakarta-sans";
import "../styles/globals.scss";

import dynamic from "next/dynamic";

const CardCanvasDynamic = dynamic(() => import("../components/CardCanvas"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

function MyApp({ Component, pageProps }) {
  return (
    <div id="canvas-container">
      <CardCanvasDynamic />
    </div>
  );
}

export default MyApp;
