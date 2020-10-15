import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Landing from './Components/Landing/Landing';
import Map from './Components/Map/Map';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import Questions from './Components/Questions/Questions';
import Appt from './Components/Appt/Appt';
import Error from './Components/Error/Error';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

function App() {
  return (
      <Router>
        <Header />
        <Landing />
        <Route path="/Map" component={Map} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Questions" component={Questions} />
        <Route path="/Appt" component={Appt} />
        <Route path="/Error" component={Error} />
        <Footer />
      </Router>
  );
}

export default App;
