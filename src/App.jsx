import React from 'react'
// import { CardComponents } from './Components/CardComponents'
// import ConditionalRendering from './Components/ConditionalRendering'
// import Practices from './Practices'
import NetflixSeries from './Components/NetflixSeries';
// import Profile from './Components/Profile';
// import './Components/Netflix.css';
import "./Components/Netflix.module.css";
// import { State } from './Components/hooks/State';
// import DerivedState from './Components/DerivedState';
// import { LiftingState } from './Components/LiftStateUp';
// import ToggleSwitch from './projects/ToggleSwitch/ToggleSwitch';
// import { Todo } from './projects/Todo/Todo';

// import { EventPropagation } from './Components/EventPropagation';
// import { EventHandling } from './Components/EventHandling';
// import { EventProps } from './Components/EventProps';
export const App = () => {
  return (
    <section >
      <h1 className="card-heading">List of Best Netflix Series</h1>
      <NetflixSeries />
      {/* <EventHandling/> */}
      {/* <EventProps /> */}
      {/* <EventPropagation/> */}
      {/* <State /> */}
      {/* <DerivedState/> */}
      {/* <LiftingState/> */}
      {/* <ToggleSwitch/> */}
      {/* <Todo /> */}

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