import HomeTemplate from "../templates/pages/Home";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <HomeTemplate>
      <Component {...pageProps} />
    </HomeTemplate>
  );
}

export default MyApp;
