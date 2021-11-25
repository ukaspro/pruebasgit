import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './components/pets/Home';
import New from './components/pets/New';
import Edit from './components/pets/Edit';
import Petid from './components/pets/Petid';
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component ={Home}/>
          <Route exact path="/pets/new" component ={New}/>
          <Route exact path="/pets/edit/:id" component ={Edit}/>
          <Route exact path="/pets/:id" component ={Petid}/>
          <Route exact path="/pets/:idprueba" component ={Petid}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
