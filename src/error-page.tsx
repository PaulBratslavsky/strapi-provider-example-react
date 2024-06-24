import { useRouteError, isRouteErrorResponse } from "react-router-dom";

interface RouterError extends Error {}

function isRouterError(object: any): object is RouterError {
    return 'message' in object;
}

function errorMessage(error: unknown): string {
  if (isRouteErrorResponse(error)) {
      return `${error.status} ${error.statusText}`
  } else if (error != undefined && isRouterError(error)) {
      return error.message;
  } else if (typeof error === 'string') {
      return error
  } else {
      console.error(error)
      return 'Unknown error'
  }
}
export default function ErrorPage() {
  const error = useRouteError() as Error;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage(error)}</i>
      </p>
    </div>
  );
}

// Resources: https://github.com/remix-run/react-router/discussions/9628