import React from "react";
import NetflixSeries from "./NetflixSeries";
// components in jsx
export const App = () => {
  return (
    <>
      <NetflixSeries />
    
    </>
  );
};

// export const NetflixSeries = () => {
//   Dynamic values in jsx
//   const name = "Harry Potter and the Deathly Hallows – Part 2 (2011)";
//   const rating = "96%";
//   const summary =
//     "A young wizard, Harry Potter, battles dark forces at Hogwarts, uncovering secrets, forging friendships, and confronting Voldemort to save magic.";
//   let Age = 26;

//   let canWatch = "Not Available";
//   if (Age >= 18) canWatch = "Watch Now";

//   const canWatch = () => {
//     if (Age >= 18) "Watch Now";
//     return "Not Available";
//   }
//     const returnGenre = () => {
//     const genre = "magic";
//     return genre;
//   };

//   return <div>
//     <div><img src="../public/harry.png" alt="" width="40%" height="40%" /></div>
//     <h2>Name: {name} </h2>
//     <h3>Rating: {rating} </h3>
//     <h3>Rating: {5 + 3.2} </h3>
//     <p>Summary: {summary} </p>
//     <p>Genre: {returnGenre()}</p>
//     <button>{Age >= 18 ? "Watch Now" : "Not Available"} </button>
//     <button>{canWatch}</button>
//     <button>{canWatch()}</button>
//   </div>
// }
// export default CardComponents;