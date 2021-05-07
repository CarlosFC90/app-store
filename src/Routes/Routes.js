import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Login from '../pages/Login/Login'; 
import './Routes.css';

function Routes() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path='/login' exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
