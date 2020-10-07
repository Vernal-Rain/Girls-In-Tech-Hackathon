import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Landing from './Components/Landing/Landing';
import Map from './Components/Map/Map';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
