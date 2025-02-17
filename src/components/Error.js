import { useRouteError } from "react-router-dom";
// This is a hook, anything that starts with use is hook => convention


const Error = () => {
  const err = useRouteError();
  // This will give details about the error

  console.log(err);
  return (
    <div className="error">
      <h1>Oops!!!</h1>
      <h2>Something went wrong</h2>
      {/* <h3>Error: {err.error.message}</h3> */}
    </div>
  );
}

export default Error;