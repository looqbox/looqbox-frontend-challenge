import { PageError } from "@/@types/page-error";
import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError() as PageError;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {error?.status === 404 ? <p>Page not found</p> : null}
    </div>
  );
};
