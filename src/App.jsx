import React from 'react'
import { CardComponents, NetflixSeries } from './Components/CardComponents'
import ConditionalRendering from './Components/ConditionalRendering'
import Practices from './Practices'

function App() {
  return (
    <div>
      <CardComponents />
      <NetflixSeries />
      <ConditionalRendering/>
      <Practices/>
    </div>
  )
}

export default App
