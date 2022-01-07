import { SWRConfig } from "swr";
import { wrapper } from "../services/redux/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}

export default wrapper.withRedux(MyApp);
