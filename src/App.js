import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

// import {Container, Row, Col, Button, Card} from 'react-bootstrap';

// components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Notfound from './components/pages/Notfound';


class App extends React.Component {

  construct() {
    
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={Notfound} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
