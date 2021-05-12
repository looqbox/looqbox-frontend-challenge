import Head from "next/head";
import SearchBar from "../components/SearchBar";
import Table from "../components/Table";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokédex</title>
        <meta name="description" content="Pokedex using NextJs" />
        <link rel="icon" href="/pokeball.ico" />
      </Head>
      <main>
        <SearchBar />
        <Table />
      </main>
    </div>
  );
}
