import React from 'react'
import { CardComponents, NetflixSeries } from './Components/CardComponents'
import ConditionalRendering from './Components/ConditionalRendering'

function App() {
  return (
    <div>
      <CardComponents />
      <NetflixSeries />
      <ConditionalRendering/>
    </div>
  )
}

export default App
