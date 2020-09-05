import React from 'react';
import './App.css';
// import {Button} from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';

function App() {

  return (
    <div>
      <Home></Home>
    </div>
  );
}

export default App;
