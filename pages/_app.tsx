import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { wrapper } from "../src/store";
import { theme } from "styles/theme";
import GlobalStyle from "styles/globals";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default wrapper.withRedux(MyApp);
