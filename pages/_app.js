// import { SWRConfig } from "swr";
import { wrapper } from "../services/redux/store";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="utf-8" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default wrapper.withRedux(MyApp);
