import React, {useState} from 'react';
import './App.css';
import Dashboard from './dashboard.js';
import StatCard from './Component/StatCard.js';

function App() {

  const [planets, setPlanets] = useState({planets: []}); 

  function handleChange(newValue){
    setPlanets(newValue); 
    console.log("Home planets are" + planets); 
  }

  return (
    <div className="App">
      <div id="container">
        <Dashboard onChange={handleChange} />

        <div class="card-container">
          <StatCard cardType="numPlanets" />
          <StatCard cardType="orbPeriod" />
          <StatCard cardType="Mass" />
          <StatCard cardType="Distance" />

      </div>
    </div>
    </div>
  );
}

export default App;
