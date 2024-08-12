import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Puttu.css';

import Puttu1 from '../images/PuttuImages/Puttu1.png';
import Puttu2 from '../images/PuttuImages/Puttu2.png';
import Puttu3 from '../images/PuttuImages/Puttu3.png';
import Puttu4 from '../images/PuttuImages/Puttu4.png';

const Puttu = () => {
  const menuItems = [
    {
      name: 'Shiva Home Food',
      dishName: 'Coconut Puttu',
      image: Puttu1,
      rating: 4.7,
      time: '30-35 mins',
      price: '₹145',
      discount: '10% OFF',
      location: 'Kuniyamuthur',
    },
    {
      name: 'Kenns Kitchen',
      dishName: 'Chicken Puttu',
      image: Puttu2,
      rating: 4.3,
      time: '50-55 mins',
      price: '₹79',
      discount: 'ITEMS AT',
      location: 'South Indian, Beverages RS Puram',
    },
    {
      name: 'KR Chats',
      dishName: 'Veg Puttu',
      image: Puttu3,
      rating: 4.6,
      time: '50-55 mins',
      price: '₹78',
      discount: 'ITEMS AT',
      location: 'Beverages, South Indian Gandhipuram',
    },
    {
      name: 'Hotel Sri',
      dishName: 'Puttu With Chicken Curry',
      image: Puttu4,
      rating: 3.9,
      time: '40-45 mins',
      price: '₹47',
      discount: 'ITEMS AT',
      location: 'South Indian, Vadavalli',
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (item) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItemIndex = cart.findIndex(cartItem => cartItem.name === item.name);
    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));

    // Trigger a storage event to update the cart count in Navbar
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <div className="biryani-menu-container">
      <input
        type="text"
        placeholder="Search for Puttu..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />

      <div className="biryani-menu">
        {filteredItems.map((item) => (
          <div key={item.name} className="menu-item">
            <img src={item.image} alt={item.dishName} className="menu-image" />
            <div className="menu-details">
              <div className="discount">{item.discount} UPTO {item.price}</div>
              <p className="menu-title">{item.name}</p>
              <p className="dish-name">{item.dishName}</p>
              <p className="menu-info">{item.rating} • {item.time}</p>
              <p className="menu-location">{item.location}</p>
              <button 
                className="order-now-button"
                onClick={() => addToCart(item)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Puttu;
