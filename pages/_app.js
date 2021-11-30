import { Provider } from "react-redux";
import useSWR, { SWRConfig } from "swr";
import { wrapper } from "../services/redux/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    // <Provider store={store}>
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: (resource, init) =>
          instanceHost.get(resource, init).then((res) => res.data),
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
    // </Provider>
  );
}

export default wrapper.withRedux(MyApp);