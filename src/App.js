import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import Header from './components/header/Header'
import HomePage from './pages/home/HomePage'
import AboutMePage from './pages/about-me/AboutMePage'
import ServicesPage from './pages/services/ServicePage'
import ContactsPage from './pages/contacts/ContactsPage'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about-me' component={AboutMePage} />
        <Route exact path='/services' component={ServicesPage} />
        <Route exact path='/contacts' component={ContactsPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
