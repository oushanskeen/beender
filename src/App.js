import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Choice from './components/Choice';

function App() {
  return (
    <main>
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/gallery" component={Gallery}/>
            <Route path="/choice" component={Choice}/>            
        </Switch>
    </main>
  );
}

export default App;
