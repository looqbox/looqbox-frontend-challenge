import Head from "next/head";

import * as S from "./styles";

export default function HomeTemplate({ children }) {
  return (
    <>
      <Head>
        <title>Pokédex</title>
        <meta name="description" content="Pokedex using NextJs" />
        <link rel="icon" href="/pokeball.ico" />
      </Head>
      <S.Container>{children}</S.Container>
    </>
  );
}
