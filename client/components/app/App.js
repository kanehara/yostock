import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Login } from '../login';
import Home from './Home';

export function App(props) {
  return (
    <Router>
      <div>
        <Route exact={true} path="/" component={Home}/>
        <Route path="/login" component={Login}/>
      </div>
    </Router>
  );
}
