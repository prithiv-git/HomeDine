import React, { useState } from 'react';
import './Vada.css';

import Vada1 from '../images/Vadaimages/Vada1.png';
import Vada2 from '../images/Vadaimages/Vada2.png';
import Vada3 from '../images/Vadaimages/Vada3.png';
import Vada4 from '../images/Vadaimages/Vada4.png';

const Vada = () => {
  const menuItems = [
    {
      name: 'The South Indian Coffee House',
      image: Vada1,
      rating: 4.5,
      time: '25-30 mins',
      price: '₹39',
      discount: '10% OFF',
      location: 'South Indian,Chinese Ukkadam',
    },
    {
      name: 'Gowras',
      image: Vada2,
      rating: 4.3,
      time: '50-55 mins',
      price: '₹79',
      discount: 'ITEMS AT',
      location: 'South Indian,Beverages RS Puram',
    },
    {
      name: ' Ridhi Sidhi',
      image: Vada3,
      rating: 4.6,
      time: '50-55 mins',
      price: '₹78',
      discount: 'ITEMS AT',
      location: 'Beverages,South Indian Gandhipuram ',
    },
    {
      name: 'Hotel Sri',
      image:Vada4,
      rating: 3.9, 
      time: '40-45 mins',
      price: '₹47',
      discount: 'ITEMS AT',
      location: 'South Indian ,Vadavalli',
    },
    // Add other menu items similarly
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="biryani-menu-container">
      <input
        type="text"
        placeholder="Search for Vada..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />

      <div className="biryani-menu">
        {filteredItems.map((item) => (
          <div key={item.name} className="menu-item">
            <img src={item.image} alt={item.name} className="menu-image" />
            <div className="menu-details">
              <div className="discount">{item.discount} UPTO {item.price}</div>
              <p className="menu-title">{item.name}</p>
              <p className="menu-info">{item.rating} • {item.time}</p>
              <p className="menu-location">{item.location}</p>
              <button className="order-now-button">Order Now</button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vada;
