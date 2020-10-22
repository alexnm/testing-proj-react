import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import About from './views/about'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={About} path="/about" />
        <Route exact component={Home} path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
