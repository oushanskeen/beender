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
            <Route exact path="/beender/" component={Home} />
            <Route exact path="/beender/gallery" component={Gallery}/>
            <Route exact path="/beender/choice" component={Choice}/>            
        </Switch>
    </main>
  );
}

export default App;
