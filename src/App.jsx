//components in jsx
export const App = () => {
  return <div>
    <NetflixSeries />
    <NetflixSeries />
    <NetflixSeries />
    <NetflixSeries />
    <NetflixSeries />
  </div>
};

const NetflixSeries = () => {
  return <div>
    <div><img src="../public/harry.png" alt="" width="40%" height="40%" /></div>
    <h2>Name: Harry Potter and the Deathly Hallows – Part 2 (2011)</h2>
    <h3>Rating: 96%</h3>
    <p>Summary: A young wizard, Harry Potter, battles dark forces at Hogwarts, uncovering secrets,
      forging friendships, and confronting Voldemort to save magic</p>
  </div>
}
