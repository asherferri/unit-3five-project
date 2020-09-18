import React from 'react'
import Editor from './Editor'
import { Route } from 'react-router-dom'

import './App.css'

const App = () => (
  <div>
      {/*we donte render editor directly anymore  */}
      {/* we now use a component */}
    {/* <Editor /> */}
    <Route path="/events/:id?" component={ Editor } />
  </div>
)

export default App