import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Quiz from './quiz'

export default function App() {
  return (
    <Router>
      <div>
        <Route path='/:name' component={Quiz} />
      </div>
    </Router>
  )
}
