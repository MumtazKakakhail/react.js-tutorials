import React from "react";
//components in jsxgit 
export const App = () => {
  return (
    <>
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
    </>
  );
};

const NetflixSeries = () => {
  //Dynamic values in jsx
  const name = "Harry Potter and the Deathly Hallows – Part 2 (2011)";
  const rating = "96%";
  const summary =
    "A young wizard, Harry Potter, battles dark forces at Hogwarts, uncovering secrets, forging friendships, and confronting Voldemort to save magic.";
  const returnGenre = () => {
    const genre = "magic";
    return genre;
  };

  return <div>
    <div><img src="../public/harry.png" alt="" width="40%" height="40%" /></div>
    <h2>Name: {name} </h2>
    <h3>Rating: {rating} </h3>
    {/* <h3>Rating: {5 + 3.2} </h3> */}
    <p>Summary: {summary} </p>
    <p>Genre: {returnGenre()}</p>
  </div>
}
