import React from 'react'
// import { CardComponents } from './Components/CardComponents'
// import ConditionalRendering from './Components/ConditionalRendering'
// import Practices from './Practices'
import NetflixSeries from './Components/NetflixSeries';
// import Profile from './Components/Profile';
// import './Components/Netflix.css';
import  "./Components/Netflix.module.css";
// import { EventHandling } from './Components/EventHandling';
import { EventProps } from './Components/EventProps';
export const App = () => {
  return (
    <section className="container">
      {/* <h1 className="card-heading">List of Best Netflix Series</h1> */}
      {/* <NetflixSeries /> */}
      {/* <EventHandling/> */}
      <EventProps/>
    
    </section>
  );
};

export default App;

// function App() {
//   return (
//     <div>
//       <CardComponents />
//       <NetflixSeries/>
//       <ConditionalRendering/>
//       <Practices/>
//       <Profile/>
//     </div>
//   )
// }