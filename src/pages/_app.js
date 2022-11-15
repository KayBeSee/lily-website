import { Analytics } from "@vercel/analytics/react";
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />;
      <Analytics />
    </>
  );
}

export default MyApp;
