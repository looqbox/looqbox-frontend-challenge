import HomeTemplate from "../templates/pages/Home";

import GlobalStyles from "../styles/global";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HomeTemplate>
        <Component {...pageProps} />
      </HomeTemplate>
      <GlobalStyles />
    </>
  );
}

export default MyApp;
