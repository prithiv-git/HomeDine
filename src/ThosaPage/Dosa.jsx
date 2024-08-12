import React, { useState } from 'react';
import './Dosa.css';

import Dosa1 from '../images/DosaImages/Dosa1.png';
import Dosa2 from '../images/DosaImages/Dosa2.png';
import Dosa3 from '../images/DosaImages/Dosa3.png';
import Dosa4 from '../images/DosaImages/Dosa4.png';





const Dosa = () => {
  const menuItems = [
    {
      name: 'Shiva Home Food',
      dishName: 'Masal Dosa',
      image:Dosa1,
      rating: 4.7,
      time: '30-35 mins',
      price: '₹145',
      discount: '10% OFF',
      location: 'Kuniyamuthur',
    },
    {
      name: 'Kenns Kitchen',
      dishName: 'Dosa',
      image:Dosa2,
      rating: 4.3,
      time: '50-55 mins',
      price: '₹79',
      discount: 'ITEMS AT',
      location: 'South Indian, Beverages RS Puram',
    },
    {
      name: 'KR Chats',
      dishName:'Podi Dosa',
      image: Dosa3,
      rating: 4.6,
      time: '50-55 mins',
      price: '₹78',
      discount: 'ITEMS AT',
      location: 'Beverages, South Indian Gandhipuram',
    },
    {
      name: 'Hotel Sri',
      dishName: 'Butter Dosa',
      image: Dosa4,
      rating: 3.9, 
      time: '40-45 mins',
      price: '₹47',
      discount: 'ITEMS AT',
      location: 'South Indian, Vadavalli',
    },
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
        placeholder="Search for Dosas..."
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
              <p className="dish-name">{item.dishName}</p>
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

export default Dosa;
