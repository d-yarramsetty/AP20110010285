import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TrainList = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    axios.get('http://20.244.56.144:80/train/trains')
      .then(response => {
        setTrains(response.data);
      })
      .catch(error => {
        console.error('Error fetching train data:', error);
      });
  }, []);

  return (
    <div>
      <h1>All Trains</h1>
      <ul>
        {trains.map(train => (
          <li key={train.trainNumber}>
            <Link to={`/train/${train.trainNumber}`}>{train.trainName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainList;