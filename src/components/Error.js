import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const { data, status, statusText } = useRouteError();
  return (
    <div>
      <h1>{data}</h1>
      <p>
        {status} : {statusText}
      </p>
    </div>
  );
};

export default Error;
