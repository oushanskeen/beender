import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Choice from './components/Choice';

function App() {
  return (
    <Switch>
        <Route path="/beender/" component={Home} exact/>
        <Route path="/beender/gallery" component={Gallery} exact/>
        <Route path="/beender/choice" component={Choice} exact/>            
    </Switch>
  );
}

export default App;
