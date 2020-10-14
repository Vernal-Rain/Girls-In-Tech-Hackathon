import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Landing from './Components/Landing/Landing';
import Map from './Components/Map/Map';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import Questions from './Components/Questions/Questions';
import Error from './Components/Error/Error';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <main className="App">
      <Header />
      <Switch>
                <Route path="/" component={Landing} exact />
                <Route path="/Map" component={Map} />
                <Route path="/Contact" component={Contact} />
                <Route path="/Questions" component={Questions} />
                <Route component={Error} />
      </Switch>
      <Footer />
    </main>
  );
}

export default App;
