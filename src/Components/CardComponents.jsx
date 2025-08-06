import React from "react";
import NetflixSeries from "./NetflixSeries";
// components in jsx
export const App = () => {
  return (
    <section className="container">
      <h1 className="card-heading">List of Best Netflix Series</h1>
      <NetflixSeries />

    </section>
  );
};
