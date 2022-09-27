import { Link } from "react-router-dom";
import React from "react";

const PageNotFound = () => {
  return (
    <div>
      <h1>Page not found</h1>
      <Link to={"/"}>Return to home</Link>
    </div>
  );
};

export default PageNotFound;
