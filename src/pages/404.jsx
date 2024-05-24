import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex justify-center items-center flex-col min-h-screen bg-primary">
      <h1 className="text-3xl font-bold text-color">Sorry</h1>
      <p className="my-5 text-xl">Sorry, an unexpected error has occurred.</p>
      <p className="text-lg">{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
