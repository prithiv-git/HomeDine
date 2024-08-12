import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Biriyani.css';

import Biriyani1 from '../images/Biriyanipageimages/Biriyani1.png';
import Biriyani2 from '../images/Biriyanipageimages/Biriyani2.png';
import Biriyani3 from '../images/Biriyanipageimages/Biriyani3.png';
import Biriyani4 from '../images/Biriyanipageimages/Biriyani4.png';

const Biryani = () => {
  const menuItems = [
    {
      name: 'Aniqas Kitchen',
      image: Biriyani1,
      rating: 4.1,
      time: '45-50 mins',
      price: '₹40',
      discount: '10% OFF',
      location: 'Velachery',
    },
    {
      name: 'Nama Veetu Biriyani',
      image: Biriyani2,
      rating: 3.9,
      time: '20-30 mins',
      price: '₹139',
      discount: 'ITEMS AT',
      location: 'Parameswaran Nagar',
    },
    {
      name: 'Jai Sri Kitchen',
      image: Biriyani3,
      rating: 4.0,
      time: '30-35 mins',
      price: '₹220',
      discount: 'ITEMS AT',
      location: 'Gandhipuram ',
    },
    {
      name: 'Karpagam Home Kitchen',
      image: Biriyani4,
      rating: 3.9, 
      time: '20-30 mins',
      price: '₹175',
      discount: 'ITEMS AT',
      location: 'Parameswaran Nagar',
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

  // Update the addToCart function with the storage event trigger
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
        placeholder="Search for biryani..."
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

export default Biryani;
