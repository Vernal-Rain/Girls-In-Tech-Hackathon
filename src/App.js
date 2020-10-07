import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Landing from './Components/Landing/Landing';
import Map from './Components/Map/Map'

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Map />
    </div>
  );
}

export default App;
