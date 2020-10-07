import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Landing from './Components/Landing/Landing';
import Map from './Components/Map/Map';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Map />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
