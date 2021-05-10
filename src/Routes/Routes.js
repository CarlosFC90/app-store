import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Login from '../pages/Login/Login';
import Stock from '../pages/Stock/Stock';
import Home from '../pages/Home/Home'; 
import Footer from '../components/Footer/Footer';
import Contact from '../pages/Contact/Contact'; 
import Products from '../pages/Products/Product'; 
import Register from '../pages/Register/Register'; 
import './Routes.css';

function Routes() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Login}/>
        <Route path='/home' exact component={Home} render= { props => (<Home { ...props}/>)}/>
        <Route path='/stock' exact component={Stock} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/products' exact component={Products} />
        <Route path='/register' exact component={Register} />
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default Routes;
