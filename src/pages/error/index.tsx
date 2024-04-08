import { PageError } from "@/@types/error";
import { useRouteError } from "react-router-dom";

import * as S from "./styles";

export const ErrorPage = () => {
  const error = useRouteError() as PageError;
  console.error(error);

  return (
    <S.Container id="error-page">
      <img src="/assets/images/togepi-sad.png" alt="sad pokemon" />
      <S.Info>
        <h1>Oops...!</h1>
        <h2>Sorry, an unexpected error has occurred.</h2>
        {error?.status === 404 ? <p>Page not found</p> : null}
      </S.Info>
    </S.Container>
  );
};
