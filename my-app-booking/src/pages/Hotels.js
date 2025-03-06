import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Hotels = () => {
  const [hotels, setHotels] = useState([]);


  useEffect(() => {
    axios
      .get("http://localhost:3000/hotels")
      .then(res => setHotels(res.data))
      .catch(error => console.error("Error fetching destinations:", error));
  }, []);


  return (
    <div>
      <h2>Hotels</h2>
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel.id}>{hotel.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Hotels;