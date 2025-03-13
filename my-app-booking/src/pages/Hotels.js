import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Hotels.css'
const Hotels = () => {
  const [hotels, setHotels] = useState([]);


  useEffect(() => {
    axios
      .get("http://localhost:3001/hotels")
      .then(res => setHotels(res.data))
      .catch(error => console.error("Error fetching destinations:", error));
  }, []);


  return (
    <div className="hotels-container">
      <h2>Hotels</h2>
      <ul className="hotels-ul">
        {hotels.map((hotel) => (
          <li key={hotel.id}>{hotel.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Hotels;