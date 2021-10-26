import './App.css';
import Header from './components/ui/Header';
import { Fragment } from 'react';
import { Route, Switch } from "react-router";
import Home from "./components/Home";
import World from "./components/World";
import Arts from "./components/Arts";
import Science from "./components/Science";
import Us from "./components/Us";
function App() {
  return (
    <Fragment>
      <Header/>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/world">
          <World/>
        </Route>
        <Route path="/arts">
          <Arts/>
        </Route>
        <Route path="/science">
          <Science/>
        </Route>
        <Route path="/us">
          <Us/>
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
