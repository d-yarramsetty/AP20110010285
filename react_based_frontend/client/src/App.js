import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TrainList from './components/TrainList';
import SingleTrain from './components/SingleTrain.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<TrainList/>} />
          <Route path="/train/:trainNumber" component={SingleTrain} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;