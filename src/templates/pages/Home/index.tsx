import Head from "next/head";
import styles from "../../../styles/Home.module.css";

export default function HomeTemplate({ children }) {
  return (
    <>
      <Head>
        <title>Pokédex</title>
        <meta name="description" content="Pokedex using NextJs" />
        <link rel="icon" href="/pokeball.ico" />
      </Head>
      <div className={styles.container}>{children}</div>
    </>
  );
}
