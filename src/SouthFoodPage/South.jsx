import React, { useState } from 'react';
import './South.css';
import SI1 from '../images/SouthImages/SI1.png';
import SI2 from '../images/SouthImages/SI2.png';
import SI3 from '../images/SouthImages/SI3.png';
import SI4 from '../images/SouthImages/SI4.png';
import SI5 from '../images/SouthImages/SI5.png';
import SI6 from '../images/SouthImages/SI6.png';
import SI7 from '../images/SouthImages/SI7.png';
import SI8 from '../images/SouthImages/SI8.png';


const South = () => {
  const menuItems = [
    {
      name: 'Shiva Home Food',
      dishName: 'Tomato Rice',
      image:SI1,
      rating: 4.7,
      time: '30-35 mins',
      price: '₹145',
      discount: '10% OFF',
      location: 'Kuniyamuthur',
    },
    {
      name: 'Kenns Kitchen',
      dishName: 'Lemon Rice',
      image:SI2,
      rating: 4.3,
      time: '50-55 mins',
      price: '₹79',
      discount: 'ITEMS AT',
      location: 'South Indian, Beverages RS Puram',
    },
    {
      name: 'KR Chats',
      dishName:'Cocnut Rice',
      image: SI3,
      rating: 4.6,
      time: '50-55 mins',
      price: '₹78',
      discount: 'ITEMS AT',
      location: 'Beverages, South Indian Gandhipuram',
    },
    {
      name: 'Hotel Sri',
      dishName: 'Curd Rice',
      image: SI4,
      rating: 3.9, 
      time: '40-45 mins',
      price: '₹47',
      discount: 'ITEMS AT',
      location: 'South Indian, Vadavalli',
    },
    {
      name: 'G-VEN Home Foods',
      dishName: 'Puli Buvaa',
      image: SI5,
      rating: 3.9, 
      time: '40-45 mins',
      price: '₹47',
      discount: 'ITEMS AT',
      location: 'South Indian, Vadavalli',
    },
    {
      name: 'Kanhas Kitchen',
      dishName: 'Mint Rice',
      image: SI6,
      rating: 3.9, 
      time: '40-45 mins',
      price: '₹47',
      discount: 'ITEMS AT',
      location: 'South Indian, Vadavalli',
    },
    {
      name: 'Dhanas Kitchen',
      dishName:'Veg Pulo',
      image: SI7,
      rating: 3.9, 
      time: '40-45 mins',
      price: '₹47',
      discount: 'ITEMS AT',
      location: 'South Indian, Vadavalli',
    },
    {
      name: 'Kayal Kitchen',
      dishName: 'Full Meals',
      image: SI8,
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
        placeholder="Search for SouthIndian Foods..."
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

export default South;


