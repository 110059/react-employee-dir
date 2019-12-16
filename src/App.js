import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Overview from './components/Overview';
import NavBar from './components/NavBar';


function App() {
  return (
    <React.Fragment>
    <NavBar />
      <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/overview/:name" component={Overview}></Route>
      </Switch>
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default App;
